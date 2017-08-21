import { Component, EventEmitter, ElementRef, Injector } from '@angular/core';

@Component({
    selector: 'base-component',
    template: `<div></div>`,
    outputs: [
        'navigation',
        'error'
    ]
})

export class BaseComponent {

    navigation = new EventEmitter();
    error = new EventEmitter();

     constructor(
        public injector: Injector,
        public elementRef: ElementRef) {
    }

    onNavigate(event) {
        this.navigation.emit({
            value: event
        });
    }

    errorEmitter(error) {
        this.error.emit({
            value: error
        });
    }

    onlyNumbers(e) {
        var keynum;
        if (window.event) {
            keynum = e.keyCode;
        } else if (e.which) {
            keynum = e.which;
        }
        if (keynum === 8 || keynum === 9 || e.keyCode === 37 || e.keyCode === 39) {
            //return true;
        }
        if (keynum >= 48 && keynum <= 57) {
            //return true;
        } else {
            event.preventDefault();
        }
    }

}

