import { Component, ViewChild } from '@angular/core';
import { BaseSettings } from './base-settings';
import { BodyComponent } from '../app/base/components/structure/body.component';
import { HomeComponent } from '../app/base/components/contents/home.component';
import { MantencionComponent } from './base/components/contents/mantencion.component';
import { ErrorComponent } from './base/components/contents/error.component';
import { ErrorBase } from './base/entities/errorbase';

import { InvocaService } from './base/services/invoca.service';

import { CookieService } from 'ngx-cookie';

@Component({
    selector: 'main-root',
    templateUrl: './main.component.html',
    providers: [InvocaService]
})

export class MainComponent {

    componentData = null;
    title = `${BaseSettings.NOMBRE_SISTEMA} - ${BaseSettings.VERSION_SISTEMA} :: ${BaseSettings.AUTOR_SISTEMA}`;
    constructor(
        private cookieService: CookieService
    ) {
        if (this.cookieService.get("sesion") != undefined) {
            window.location.replace(this.cookieService.get("sesion"));
        }
    }

    ngAfterViewInit() {
        if (this.cookieService.get("sesion") == undefined) {
            this.appStatus();
        }
    }

    error: boolean = false;
    mantencion: boolean = false;
    errorContent: string = "";

    @ViewChild(BodyComponent)
    body: BodyComponent;

    onNavigate(event) {
        if (event.value.metodo == "home" || event.value == "home") {
            this.body.createComponent(HomeComponent);
        }
    }

    errorEmitter(event) {
        let miError = <ErrorBase>event.value;
        this.errorContent = miError.error.message;
        this.error = true;
        this.appStatus(this.errorContent);
    }

    createComponent(value: any, inputs?: any) {
        this.componentData = {
            component: value,
            inputs: inputs == undefined || inputs == null ? {} : inputs
        };
    }

    appStatus(errorMessage?: string) {
        if (this.error) {
            this.createComponent(ErrorComponent, { 'errorCatch': errorMessage });
        } else if (this.mantencion) {
            this.createComponent(MantencionComponent);
        } else {
            this.body.createComponent(HomeComponent);
        }
    }

}
