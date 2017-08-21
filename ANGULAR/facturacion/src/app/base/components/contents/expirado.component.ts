import { Component } from '@angular/core';
import { BaseSettings } from '../../../base-settings';

@Component({
    selector: 'expirado-panel',
    templateUrl: './expirado.component.html'
})

export class ExpiradoComponent {
    appName = BaseSettings.NOMBRE_SISTEMA;
    appVersion = BaseSettings.VERSION_SISTEMA;
    appAuthor = BaseSettings.AUTOR_SISTEMA;
    appYear = BaseSettings.YEAR_SISTEMA;

    constructor(
    ) { }

    expiredSession() {
        window.sessionStorage.clear();
        window.location.replace(BaseSettings.URL_LOGIN);
    }

}
