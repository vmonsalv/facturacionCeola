import { Component, ViewChild } from '@angular/core';
import { BaseSettings } from './base-settings';
import { Menu } from './base/entities/menu';
import { Aplicacion } from './base/entities/aplicacion';
import { Prevision } from './proyecto/entities/prevision';
import { Prestacion } from './proyecto/entities/prestacion';
import { ErrorBase } from './base/entities/errorbase';

import { MenuRightComponent } from '../app/base/components/structure/menu-right.component';
import { BodyComponent } from '../app/base/components/structure/body.component';
import { HeaderComponent } from '../app/base/components/structure/header.component';
import { MantencionComponent } from '../app/base/components/contents/mantencion.component';
import { NoContenidoComponent } from '../app/base/components/contents/no_contenido.component';
import { ErrorComponent } from '../app/base/components/contents/error.component';
import { ExpiradoComponent } from '../app/base/components/contents/expirado.component';
import { HomeComponent } from '../app/base/components/contents/home.component';
import { AplicacionComponent } from '../app/proyecto/components/contents/aplicacion.component';
import { UsuarioComponent } from '../app/proyecto/components/contents/usuario.component';

import { InvocaService } from './base/services/invoca.service';
import { MenuService } from './base/services/menu.service';
import { UserService } from './base/services/user.service';

import { Idle, DEFAULT_INTERRUPTSOURCES } from '@ng-idle/core';
import { CookieService } from 'ngx-cookie';
import { Usuario } from './base/entities/usuario';

@Component({
    selector: 'main-root',
    templateUrl: './main.component.html',
    providers: [
        InvocaService,
        MenuService,
        UserService
    ]
})

export class MainComponent {

    componentData = null;
    title = `${BaseSettings.NOMBRE_SISTEMA} - ${BaseSettings.VERSION_SISTEMA} :: ${BaseSettings.AUTOR_SISTEMA}`;
    constructor(
        private menuService: MenuService,
        private userService: UserService,
        private idle: Idle,
        private cookieService: CookieService
    ) {
        if (window.sessionStorage.getItem("expired") == null) {
            let today = new Date();
            this.todayInmills = today.getTime();
            this.buscaTokenData({ identify: window.location.href.split("id=")[1] });
        } else {
            window.sessionStorage.clear();
            window.location.replace(BaseSettings.URL_LOGIN);
        }
    }

    idleState = 'Desactivado';
    timedOut = false;
    displaySessionActivity: boolean = false;

    user: Usuario;                          // USUARIO ONLINE
    mantencion: boolean = false;            // APLICACION EN MANTENCION
    expired: boolean = false;            // APLICACION EN MANTENCION
    error: boolean = false;                 // ERROR EN SERVICIOS NODE
    no_contenido: boolean = false;          // ERROR EN CARGA DE CONTENIDOS (INICIO DE APLICACION)
    errorContent: string = "";              // MENSAJE DE ERROR EN SERVICIOS NODE

    aplicaciones: Aplicacion[] = [];
    positionApp: string;
    todayInmills: number;

    @ViewChild(MenuRightComponent)
    menuRight: MenuRightComponent;

    @ViewChild(BodyComponent)
    body: BodyComponent;

    @ViewChild(HeaderComponent)
    header: HeaderComponent;

    buscaTokenData(param) {
        this.userService.getTokenData(param).subscribe(
            tokenData => {
                if (this.todayInmills < tokenData.expire) {
                    this.user = this.userService.toUserData(tokenData);
                    this.menuRight.user = this.userService.toUserData(tokenData);
                    this.positionApp = this.userService.toUserData(tokenData).app.toString();
                    window.sessionStorage.setItem("token", param.identify);
                    this.sessionActivity();
                } else {
                    window.sessionStorage.clear();
                    window.sessionStorage.setItem("expired", "1");
                    this.expired = true;
                    this.appStatus();
                }
            }, error => {
                window.sessionStorage.clear();
                window.sessionStorage.setItem("expired", "1");
                this.expired = true;
                this.appStatus();
            }, () => {
                this.buscarMenuAplicacion();
                this.buscaAplicaciones();
            }
        );
    }

    buscaAplicaciones() {
        this.menuService.getApps(this.user).subscribe(
            apps => {
                this.aplicaciones = this.menuService.mapAplicaciones(apps);
                this.aplicaciones.forEach(api => {
                    if (api.id.toString() == this.positionApp) {
                        this.header.codAppHere = api.id.toString();
                    }
                    this.header.appsCombo.push({ label: api.nombre, value: api.id.toString() });
                    this.header.appsArray.push(this.menuService.toAplicaciones(api));
                });
            }, error => {
                this.errorEmitter(error);
            }
        );
    }

    buscarMenuAplicacion() {
        this.menuService.getMenus({ app: this.user.app, usuario: this.user }).subscribe(
            menus => {
                this.header.menusApp = this.menuService.mapMenus(menus.menus);
                this.menuRight.rol = menus.rol;
            }, error => {
                this.errorEmitter(error);
            }, () => {
                this.appStatus();
            }
        );
    }

    errorEmitter(event) {
        let miError = event.hasOwnProperty("value") ? <ErrorBase>event.value : <ErrorBase>event;
        if (miError.expirado) {
            this.header.showMenus = false;
            this.header.showModulos = false;
        } else {
            if (miError.error.message == "no_contenido") {
                this.no_contenido = true;
            } else {
                this.errorContent = miError.error.message;
                this.error = true;
            }
        }
        this.appStatus(this.errorContent);
    }

    onNavigate(event) {
        this.body.menuActive = event.value.metodo;
        this.body.bodyTitle = event.value.metodo == "home" ? 'Inicio' : event.value.nombre;
        this.header.menuActive = event.value.metodo;

        switch (event.value.metodo) {
            case "home":
                this.body.createComponent(HomeComponent, { 'userOnline': this.user, "menus": this.header.menusApp });
                break;
            case "users":
                this.body.createComponent(UsuarioComponent, { 'userOnline': this.user });
                break;
            case "apps":
                this.body.createComponent(AplicacionComponent, { 'userOnline': this.user });
                break;
        }
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
            this.header.showMenus = false;
            this.createComponent(MantencionComponent);
        } else if (this.no_contenido) {
            this.createComponent(NoContenidoComponent);
        } else if (this.expired) {
            this.header.showMenus = false;
            this.header.showModulos = false;
            this.createComponent(ExpiradoComponent);
        } else {
            this.body.createComponent(HomeComponent, { 'userOnline': this.user, "menus": this.header.menusApp });
        }
    }

    expiredSession() {
        window.location.replace(BaseSettings.URL_LOGIN);
    }

    sessionActivity() {
        this.idle.setIdle(1);
        this.idle.setTimeout(BaseSettings.ACTIVITY_TIME_OUT);
        this.idle.setInterrupts(DEFAULT_INTERRUPTSOURCES);

        /* DETECCION DE MOVIMIENTO */
        this.idle.onIdleEnd.subscribe(() => {
            this.displaySessionActivity = false;
        });
        /* SESION EXPIRADA POR INACTIVIDAD */
        this.idle.onTimeout.subscribe(() => {
            window.localStorage.setItem("expired", "true");
            this.displaySessionActivity = false;
            this.expired = true;
            this.appStatus();
            //window.location.replace(BaseSettings.URL_LOGIN);
        });

        /* CUENTA REGRESIVA DE INACTIVIDAD */
        this.idle.onTimeoutWarning.subscribe(
            (countdown) => {
                this.idleState = countdown;
                /* a los X segundos se notifica el tiempo de vida restante */
                if (countdown == BaseSettings.ACTIVITY_TIME_OUT_ALERT) {
                    this.displaySessionActivity = true;
                }
            });

        /* INICIO DE MONITOREO DE ACTIVIDAD */
        this.resetSessionActivity();
    }

    resetSessionActivity() {
        this.idle.watch();
        this.timedOut = false;
    }

}
