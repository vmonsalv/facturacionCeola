import { Component, Injector, ElementRef } from '@angular/core';
import { BaseComponent } from '../../../base/components/structure/base.component';

@Component({
    selector: 'honorario-panel',
    templateUrl: './honorario.component.html'
})

export class HonorarioComponent extends BaseComponent {

    constructor(
        public injector: Injector,
        public elementRef: ElementRef
    ) {
        super(injector, elementRef);
    }

    bienvenida = `Este es un componente de demostración`;

}
