import { Component, EventEmitter, ViewChild } from '@angular/core';
import { Menu } from '../../entities/menu';
import { Usuario } from '../../entities/usuario';
import { BaseSettings } from '../../../base-settings';
import { CookieService } from 'ngx-cookie';
import { ConfirmationService } from 'primeng/primeng';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { UserService } from '../../../base/services/user.service';
import { Message } from 'primeng/primeng';

@Component({
    selector: 'menu-right-panel',
    templateUrl: './menu-right.component.html',
    outputs: ['navigation'],
    providers: [
        ConfirmationService, UserService
    ],
})

export class MenuRightComponent {

    navigation = new EventEmitter();
    user: Usuario = new Usuario();
    rol: string;

    constructor(
        private confirmationService: ConfirmationService,
        private cookieService: CookieService,
        public userService: UserService,
    ) { }

    onNavigate(event) {
        this.navigation.emit({
            value: event
        });
    }

    logOut() {
        this.confirmationService.confirm({
            message: '¿Desea cerrar la sesión?',
            accept: () => {
                this.cookieService.removeAll();
                window.location.replace(BaseSettings.URL_LOGIN);
            }
        });
    }

    actualClave: string;
    nuevaClave: string;
    repitaClave: string;
    msgsClave: Message[] = [];
    msgsHeader: Message[] = [];

    @ViewChild('claveModal')
    claveModal: ModalComponent;

    closeCambiaClaveModal() {
        this.actualClave = "";
        this.nuevaClave = "";
        this.repitaClave = "";
        this.msgsClave = [];
        this.msgsHeader = [];
        this.claveModal.close();
    }

    onCambiaClaveModal() {
        this.actualClave = "";
        this.nuevaClave = "";
        this.repitaClave = "";
        this.msgsClave = [];
        this.msgsHeader = [];
        this.claveModal.open();
    }

    cambiaClave() {
        this.msgsClave = [];
        this.msgsHeader = [];
        let validacionClave: Message[] = this.userService.validadorCambiaClave(this.actualClave, this.nuevaClave, this.repitaClave);
        if (validacionClave.length == 0) {
            this.closeCambiaClaveModal();
            this.msgsHeader.push({ severity: 'success', summary: 'Clave cambiada:', detail: 'Su clave de acceso ha sido modificada con exito.' });
            window.sessionStorage.clear();
            window.sessionStorage.setItem("expired", "1");
            window.location.replace(BaseSettings.URL_LOGIN);
        } else {
            this.msgsClave = validacionClave;
        }
    }

}
