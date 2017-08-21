import { Component, Injector } from '@angular/core';
import { BaseSettings } from '../../../base-settings';

@Component({
    selector: 'error-panel',
    templateUrl: './error.component.html',
    inputs: ['errorCatch']
})

export class ErrorComponent {

    errorView: string = "";

    constructor(
        private injector: Injector
    ) {
        this.errorView = injector.get('errorCatch');
    }

    appName = BaseSettings.NOMBRE_SISTEMA;
    appVersion = BaseSettings.VERSION_SISTEMA;
    appAuthor = BaseSettings.AUTOR_SISTEMA;
    appYear = BaseSettings.YEAR_SISTEMA;
}
