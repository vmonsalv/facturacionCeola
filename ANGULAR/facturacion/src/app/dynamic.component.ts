import { Component, Input, ViewContainerRef, ViewChild, ReflectiveInjector, ComponentFactoryResolver, EventEmitter, Output } from '@angular/core';

import { HomeComponent } from './base/components/contents/home.component';
import { MantencionComponent } from './base/components/contents/mantencion.component';
import { NoContenidoComponent } from './base/components/contents/no_contenido.component';
import { ErrorComponent } from './base/components/contents/error.component';
import { PacienteComponent } from '../app/proyecto/components/contents/paciente.component';
import { PresupuestoComponent } from '../app/proyecto/components/contents/presupuesto.component';
import { CirugiaComponent } from '../app/proyecto/components/contents/cirugia.component';
import { PagoComponent } from '../app/proyecto/components/contents/pago.component';
import { PostCirugiaComponent } from '../app/proyecto/components/contents/postCirugia.component';
import { HonorarioComponent } from '../app/proyecto/components/contents/honorario.component';
import { SeguimientoComponent } from '../app/proyecto/components/contents/seguimiento.component';
import { ExpiradoComponent } from './base/components/contents/expirado.component';
import { AdministradorComponent } from '../app/proyecto/components/contents/administrador.component';

@Component({
    selector: 'dynamic-component',
    entryComponents: [
        HomeComponent,
        PacienteComponent,
        MantencionComponent,
        NoContenidoComponent,
        ErrorComponent,
        ExpiradoComponent,
        PresupuestoComponent, PresupuestoComponent, CirugiaComponent, PagoComponent,
        PostCirugiaComponent, HonorarioComponent, SeguimientoComponent, AdministradorComponent
    ], // Reference to the components must be here in order to dynamically create them
    template: `<div #dynamicComponentContainer></div>`
})

export class DynamicComponent {
    currentComponent = null;

    @ViewChild('dynamicComponentContainer', { read: ViewContainerRef }) dynamicComponentContainer: ViewContainerRef;

    constructor(private resolver: ComponentFactoryResolver) { }


    // component: Class for the component you want to create
    // inputs: An object with key/value pairs mapped to input name/input value
    @Input() set componentData(data: { component: any, inputs: any }) {
        if (!data) {
            return;
        }

        // Inputs need to be in the following format to be resolved properly
        let inputProviders = Object.keys(data.inputs).map((inputName) => { return { provide: inputName, useValue: data.inputs[inputName] }; });
        let resolvedInputs = ReflectiveInjector.resolve(inputProviders);

        // We create an injector out of the data we want to pass down and this components injector
        let injector = ReflectiveInjector.fromResolvedProviders(resolvedInputs, this.dynamicComponentContainer.parentInjector);

        // We create a factory out of the component we want to create
        let factory = this.resolver.resolveComponentFactory(data.component);

        // We create the component using the factory and the injector
        let component = factory.create(injector);

        // We insert the component into the dom container
        this.dynamicComponentContainer.insert(component.hostView);

        // We can destroy the old component is we like by calling destroy
        if (this.currentComponent) {
            this.currentComponent.destroy();
        }

        this.currentComponent = component;

        if (this.currentComponent && this.currentComponent.instance["navigation"]) {
            this.currentComponent.instance["navigation"].subscribe((event) => {
                this.onNavigate(event);
            });
        }

        if (this.currentComponent && this.currentComponent.instance["error"]) {
            this.currentComponent.instance["error"].subscribe((event) => {
                this.errorEmitter(event);
            });
        }
    }

    @Output('navigation') navigation = new EventEmitter();
    @Output('error') error = new EventEmitter();

    onNavigate(event) {
        this.navigation.emit({
            value: event.value
        });
    }

    errorEmitter(event) {
        this.error.emit({
            value: event.value
        });
    }

}
