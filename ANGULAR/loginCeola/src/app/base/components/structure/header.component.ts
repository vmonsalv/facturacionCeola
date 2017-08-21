import { Component } from '@angular/core';
import { BaseSettings } from '../../../../app/base-settings';

@Component({
    selector: 'header-panel',
    templateUrl: './header.component.html'
})

export class HeaderComponent {
    appName = BaseSettings.NOMBRE_SISTEMA;
    appVersion = BaseSettings.VERSION_SISTEMA;
    appAuthor = BaseSettings.AUTOR_SISTEMA;
}
