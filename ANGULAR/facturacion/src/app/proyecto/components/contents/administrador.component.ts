import { Component, Injector, ElementRef } from '@angular/core';
import { BaseComponent } from '../../../base/components/structure/base.component';

@Component({
    selector: 'administrador-panel',
    templateUrl: './administrador.component.html'
})

export class AdministradorComponent extends BaseComponent {

    constructor(
        public injector: Injector,
        public elementRef: ElementRef
    ) {
        super(injector, elementRef);
    }

    bienvenida = `Este es un componente de demostración`;

}
