import { Component, EventEmitter } from '@angular/core';

@Component({
    selector: 'body-panel',
    templateUrl: './body.component.html',
    outputs: ['navigation', 'error']
})

export class BodyComponent {

    navigation = new EventEmitter();
    error = new EventEmitter();
    componentData = null;

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

    createComponent(value: any, inputs?: any) {
        this.componentData = {
            component: value,
            inputs: inputs == undefined || inputs == null ? {} : inputs
        };
    }

}
