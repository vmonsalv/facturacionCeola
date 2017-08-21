import { Component, Injector, ElementRef, ViewChild } from '@angular/core';
import { BaseComponent } from '../../../base/components/structure/base.component';
import { Message, SelectItem } from 'primeng/primeng';
import { Aplicacion } from '../../../base/entities/aplicacion';
import { Menu } from '../../../base/entities/menu';
import { AplicacionService } from '../../services/aplicacion.service';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';

@Component({
    selector: 'aplicacion-panel',
    templateUrl: './aplicacion.component.html',
    providers: [AplicacionService]
})

export class AplicacionComponent extends BaseComponent {

    constructor(
        public injector: Injector,
        public elementRef: ElementRef,
        public aplicacionService: AplicacionService
    ) {
        super(injector, elementRef);
        this.buscaAplicaciones();
    }

    @ViewChild('menusModal')
    menusModal: ModalComponent;

    combo: SelectItem[] = [{ label: "Desactivado", value: 0 },{ label: "Activado", value: 1 },{ label: "Mantención", value: 2 }];
    aplicaciones: Aplicacion[] = [];
    aplicacionSelected: Aplicacion = new Aplicacion();
    menus: Menu[] = [];
    msgsApp: Message[] = [];

    buscaAplicaciones() {
        this.aplicacionService.getAplicaciones().subscribe(
            apps => {
                this.aplicaciones = this.aplicacionService.mapAplicaciones(apps);
                this.aplicaciones.forEach(app => {
                    app.comboActivo = this.combo;
                    if (app.menus != null) {
                        app.menus.forEach(menu => {
                            menu.comboEstado = this.combo;
                        });
                    }
                });
            }, error => {
                this.errorEmitter(error);
            }
        );
    }

    changeEstadoApp(event, app: Aplicacion) {
        this.msgsApp = [];
        this.aplicacionService.updateApp({ idApp: app.id, estado: event.value }).subscribe(
            appUpdated => {
                if (appUpdated == "OK") {
                    this.msgsApp.push({ severity: 'success', summary: 'Cambio estado aplicación', detail: 'La aplicación "' + app.nombre + '" ha cambiado su estado con exito.' });
                }
            }, error => {
                this.errorEmitter(error);
            }
        );
    }

    changeEstadoMenu(event, menu: Menu, app: Aplicacion) {
        this.msgsApp = [];
        this.aplicacionService.updateMenu({ estado: event.value, idMenu: menu.id, idApp: app.id }).subscribe(
            menuUpdated => {
                if (menuUpdated == "OK") {
                    this.msgsApp.push({ severity: 'success', summary: 'Cambio estado menú', detail: 'El menú "' + menu.nombre + '" ha cambiado su estado con exito.' });
                }
            }, error => {
                this.errorEmitter(error);
            }
        );
    }

    closeMenuModal() {
        this.menus = [];
        this.menusModal.close();
    }

    onMenuModal(app: Aplicacion) {
        this.aplicacionSelected = app;
        this.menus = [...app.menus];
        this.menusModal.open();
    }

}
