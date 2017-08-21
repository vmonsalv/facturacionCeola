import { Component, EventEmitter, Injector, ElementRef } from '@angular/core';
import { Usuario } from '../../entities/usuario';


@Component({
    selector: 'base-component',
    template: `<div></div>`,
    outputs: [
        'navigation',
        'error'
    ],
    inputs: [
        'userOnline'
    ]
})

export class BaseComponent {

    navigation = new EventEmitter();
    error = new EventEmitter();
    es: any;
    userOnline: Usuario;

    constructor(
        public injector: Injector,
        public elementRef: ElementRef) {
        this.userOnline = injector.get("userOnline");
    }

    onNavigate(event) {
        if (event.estado == 1) {
            this.navigation.emit({
                value: event
            });
        }
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

    ngOnInit() {

        this.es = {
            firstDayOfWeek: 1,
            dayNames: ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"],
            dayNamesShort: ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"],
            dayNamesMin: ["D", "L", "M", "Mi", "J", "V", "S"],
            monthNames: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
            monthNamesShort: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"]
        }

    }

}

