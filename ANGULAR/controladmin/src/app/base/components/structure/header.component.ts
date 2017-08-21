import { Component, EventEmitter } from '@angular/core';
import { BaseSettings } from '../../../../app/base-settings';
import { Menu } from '../../entities/menu';
import { Aplicacion } from '../../entities/aplicacion';
import { SelectItem } from 'primeng/primeng';


@Component({
    selector: 'header-panel',
    templateUrl: './header.component.html',
    outputs: [
        'navigation',
        'error'
    ]
})

export class HeaderComponent {

    appName = BaseSettings.NOMBRE_SISTEMA;
    appVersion = BaseSettings.VERSION_SISTEMA;
    appAuthor = BaseSettings.AUTOR_SISTEMA;

    showMenus: boolean = true;
    showModulos: boolean = true;

    menusApp: Menu[];
    error = new EventEmitter();
    menuActive: string = "home";
    navigation = new EventEmitter();
    appSelected: Aplicacion = new Aplicacion();
    appsCombo: SelectItem[] = [];
    codAppHere: string;
    appsArray: Aplicacion[] = [];

    goUrl(event) {
        window.location.replace(event.value.url);
    }

    errorEmitter(error) {
        this.error.emit({
            value: error.value
        });
    }

    onNavigate(event) {
        if (event.estado == 1) {
            this.navigation.emit({
                value: event
            });
        }
    }

}
