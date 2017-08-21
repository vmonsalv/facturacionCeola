import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ButtonModule } from 'primeng/primeng';
import { InputTextareaModule } from 'primeng/primeng';
import { OverlayPanelModule } from 'primeng/primeng';
import { InputTextModule } from 'primeng/primeng';
import { TooltipModule } from 'primeng/primeng';
import { CalendarModule } from 'primeng/primeng';
import { CheckboxModule } from 'primeng/primeng';
import { RadioButtonModule } from 'primeng/primeng';
import { SelectButtonModule } from 'primeng/primeng';
import { SpinnerModule } from 'primeng/primeng';
import { ConfirmDialogModule } from 'primeng/primeng';
import { GrowlModule } from 'primeng/primeng';
import { MessagesModule } from 'primeng/primeng';
import { ProgressBarModule } from 'primeng/primeng';
import { DataTableModule, SharedModule } from 'primeng/primeng';
import { DataScrollerModule } from 'primeng/primeng';
import { DialogModule } from 'primeng/primeng';
import { InputSwitchModule } from 'primeng/primeng';
import { InputMaskModule } from 'primeng/primeng';
import { SliderModule } from 'primeng/primeng';
import { TriStateCheckboxModule } from 'primeng/primeng';
import { BusyModule } from 'angular2-busy';
import { PasswordModule } from 'primeng/primeng';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DropdownModule } from 'primeng/primeng';

import { NgIdleKeepaliveModule } from '@ng-idle/keepalive';
import { MomentModule } from 'angular2-moment';
import { AccordionModule } from 'primeng/primeng';

import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';

import { CookieModule } from 'ngx-cookie';
import { CookieService } from 'ngx-cookie';

/** BASE */
import { MainComponent } from './main.component';
import { BaseComponent } from '../app/base/components/structure/base.component';
import { HeaderComponent } from '../app/base/components/structure/header.component';
import { MenuRightComponent } from '../app/base/components/structure/menu-right.component';
import { BodyComponent } from '../app/base/components/structure/body.component';
import { FooterComponent } from '../app/base/components/structure/footer.component';
import { HomeComponent } from './base/components/contents/home.component';
import { MantencionComponent } from './base/components/contents/mantencion.component';
import { NoContenidoComponent } from './base/components/contents/no_contenido.component';
import { ErrorComponent } from './base/components/contents/error.component';
import { ExpiradoComponent } from './base/components/contents/expirado.component';
import { DynamicComponent } from './dynamic.component';

import { PacienteComponent } from '../app/proyecto/components/contents/paciente.component';
import { PresupuestoComponent } from '../app/proyecto/components/contents/presupuesto.component';
import { CirugiaComponent } from '../app/proyecto/components/contents/cirugia.component';
import { PagoComponent } from '../app/proyecto/components/contents/pago.component';
import { PostCirugiaComponent } from '../app/proyecto/components/contents/postCirugia.component';
import { HonorarioComponent } from '../app/proyecto/components/contents/honorario.component';
import { SeguimientoComponent } from '../app/proyecto/components/contents/seguimiento.component';
import { AdministradorComponent } from '../app/proyecto/components/contents/administrador.component';

@NgModule({
    declarations: [
        MainComponent, HeaderComponent,
        BodyComponent, FooterComponent, HomeComponent,
        MantencionComponent, DynamicComponent, BaseComponent,
        NoContenidoComponent, ErrorComponent, PacienteComponent, ExpiradoComponent,
        MenuRightComponent, AdministradorComponent,
        PresupuestoComponent, PresupuestoComponent, CirugiaComponent, PagoComponent,
        PostCirugiaComponent, HonorarioComponent, SeguimientoComponent
    ],
    imports: [
        CookieModule.forRoot(),
        MomentModule,
        NgIdleKeepaliveModule.forRoot(),
        BrowserModule,
        FormsModule,
        HttpModule,

        ButtonModule,
        InputTextareaModule,
        OverlayPanelModule,
        InputTextModule,
        TooltipModule,
        CalendarModule,
        CheckboxModule,
        RadioButtonModule,
        SelectButtonModule,
        SpinnerModule,
        ConfirmDialogModule,
        GrowlModule,
        MessagesModule,
        ProgressBarModule,
        DataTableModule,
        SharedModule,
        DataScrollerModule,
        DialogModule,
        InputSwitchModule,
        InputMaskModule,
        SliderModule,
        TriStateCheckboxModule,
        PasswordModule,

        BrowserAnimationsModule,
        BusyModule,
        DropdownModule,
        AccordionModule,
        Ng2Bs3ModalModule
    ],
    providers: [CookieService],
    bootstrap: [MainComponent]
})

export class MainModule {

}
