import { Component, EventEmitter, Injector, ElementRef } from '@angular/core';
import { Usuario } from '../../../proyecto/entities/usuario';
import { Aplicacion } from '../../../base/entities/aplicacion';
import { BaseSettings } from '../../../base-settings';
import { Message } from 'primeng/primeng';
import { BaseComponent } from '../../../base/components/structure/base.component';
import { LoginService } from '../../../proyecto/services/login.service';
import { SelectItem } from 'primeng/primeng';

import { Subscription } from 'rxjs';
import { CookieService, CookieOptions } from 'ngx-cookie';

@Component({
    selector: 'home-panel',
    templateUrl: './home.component.html',
    providers: [LoginService]
})

export class HomeComponent extends BaseComponent {

    constructor(
        public injector: Injector,
        public elementRef: ElementRef,
        private loginService: LoginService,
        private cookieService: CookieService
    ) {
        super(injector, elementRef);
        this.makeAppsDropdown();
    }

    busy: Subscription;
    msgs: Message[] = [];
    user: string;
    password: string;
    userDB: Usuario;
    aplicaciones: SelectItem[] = [];
    appSelected: Aplicacion;

    modoDesarrollo: boolean = true;
    urlDesarrollo: string = "http://localhost:4201/";

    makeAppsDropdown() {
        this.busy = this.loginService.getApps().subscribe(
            apps => {
                apps.forEach(api => {
                    this.aplicaciones.push({ label: api.nombre, value: this.loginService.toAplicaciones(api) });
                });
            }, error => {
                this.errorEmitter(error);
            }
        );
    }

    detalle: string;
    loginUsuario() {
        this.detalle = "";
        this.msgs = [];
        if (!this.validateLogin()) {
            this.busy = this.loginService.doLogin({ rut: this.user, password: this.password, app: this.appSelected.codApp }).subscribe(
                idUrl => {
                    if (idUrl == "SIN_PERMISO") {
                        this.msgs.push({ severity: 'error', detail: 'Sin perrmiso a la aplicación' });
                    } else {
                        if (idUrl.hasOwnProperty("error")) {
                            switch (idUrl.error) {
                                case 0:
                                    this.msgs.push({ severity: 'error', detail: 'Usuario no registrado' });
                                    break;
                                case 1:
                                    this.msgs.push({ severity: 'error', detail: 'Usuario no activado' });
                                    break;
                                case 2:
                                    this.msgs.push({ severity: 'error', detail: 'Clave incorrecta' });
                                    break;
                            }
                        } else {
                            if (this.modoDesarrollo) {
                                window.open(this.urlDesarrollo + idUrl.url);
                            } else {
                                window.location.replace(this.appSelected.url + idUrl.url);
                            }
                        }
                    }
                }, error => {
                    this.errorEmitter(error);
                }
            );
        } else {
            this.msgs.push({ severity: 'error', detail: this.detalle });
        }
    }

    validateLogin(): boolean {
        let error = false;
        if (this.user == undefined || this.user == "") {
            error = true;
            this.detalle = "Ingrese rut y clave";
        } else if (this.password == undefined || this.password == "") {
            error = true;
            this.detalle = "Ingrese rut y clave";
        } else if (this.appSelected == undefined) {
            error = true;
            this.detalle = "Seleccione una aplicación";
        } else if (this.appSelected.activo == 2) {
            error = true;
            this.detalle = "Aplicación en mantención";
        }
        if (this.modoDesarrollo) {
            if (this.urlDesarrollo == "") {
                error = true;
                this.detalle = "Ingrese URL";
            }
        }
        return error;
    }

}
