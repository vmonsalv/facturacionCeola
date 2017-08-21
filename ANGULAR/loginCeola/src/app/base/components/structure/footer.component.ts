import { Component } from '@angular/core';
import { BaseSettings } from '../../../../app/base-settings';

@Component({
    selector: 'footer-panel',
    templateUrl: './footer.component.html'
})

export class FooterComponent {
    appName = BaseSettings.NOMBRE_SISTEMA;
    appVersion = BaseSettings.VERSION_SISTEMA;
    appAuthor = BaseSettings.AUTOR_SISTEMA;
    appYear = BaseSettings.YEAR_SISTEMA;
    appNick = BaseSettings.NICKNAME_SISTEMA;
    appSucursal = BaseSettings.SUCURSAL_SISTEMA;

}
