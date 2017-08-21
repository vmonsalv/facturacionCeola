import { Component, EventEmitter } from '@angular/core';
import { Menu } from '../../entities/menu';
import { Usuario } from '../../entities/usuario';
import { BaseSettings } from '../../../base-settings';
import { CookieService } from 'ngx-cookie';
import { ConfirmationService } from 'primeng/primeng';

@Component({
    selector: 'menu-right-panel',
    templateUrl: './menu-right.component.html',
    outputs: ['navigation'],
    providers: [
        ConfirmationService
    ],
})

export class MenuRightComponent {

    navigation = new EventEmitter();
    user: Usuario = new Usuario();
    rol: string;

    constructor(
        private confirmationService: ConfirmationService,
        private cookieService: CookieService
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

}
