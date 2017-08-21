import { Component, EventEmitter, Injector, ElementRef } from '@angular/core';
import { Menu } from '../../../base/entities/menu';
import { BaseComponent } from '../../../base/components/structure/base.component';

@Component({
    selector: 'home-panel',
    templateUrl: './home.component.html',
    inputs: ['menus']
})

export class HomeComponent extends BaseComponent {

    constructor(
        public injector: Injector,
        public elementRef: ElementRef
    ) {
        super(injector, elementRef);
        this.menusApp = injector.get("menus");
    }
    
    menusApp: Menu[] = [];

}
