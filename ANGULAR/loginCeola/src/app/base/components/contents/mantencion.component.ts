import { Component } from '@angular/core';
import { BaseSettings } from '../../../base-settings';

@Component({
    selector: 'mantencion-panel',
    templateUrl: './mantencion.component.html'
})

export class MantencionComponent {
    appName = BaseSettings.NOMBRE_SISTEMA;
    appVersion = BaseSettings.VERSION_SISTEMA;
    appAuthor = BaseSettings.AUTOR_SISTEMA;
    appYear = BaseSettings.YEAR_SISTEMA;
}
