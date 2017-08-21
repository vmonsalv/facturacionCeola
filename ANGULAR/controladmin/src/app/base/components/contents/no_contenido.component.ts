import { Component } from '@angular/core';
import { BaseSettings } from '../../../base-settings';

@Component({
    selector: 'no-contenido-panel',
    templateUrl: './no_contenido.component.html'
})

export class NoContenidoComponent {
    appName = BaseSettings.NOMBRE_SISTEMA;
    appVersion = BaseSettings.VERSION_SISTEMA;
    appAuthor = BaseSettings.AUTOR_SISTEMA;
    appYear = BaseSettings.YEAR_SISTEMA;
}
