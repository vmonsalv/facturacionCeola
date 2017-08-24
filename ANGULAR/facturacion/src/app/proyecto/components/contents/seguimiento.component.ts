import { Component, Injector, ElementRef } from '@angular/core';
import { BaseComponent } from '../../../base/components/structure/base.component';
import { Presupuesto } from '../../entities/presupuesto';
import { PresupuestoService } from '../../services/presupuesto.service';
import { Message } from 'primeng/primeng';

@Component({
    selector: 'seguimiento-panel',
    templateUrl: './seguimiento.component.html',
    providers: [PresupuestoService]
})

export class SeguimientoComponent extends BaseComponent {

    constructor(
        public injector: Injector,
        public elementRef: ElementRef,
        private presupuestoService: PresupuestoService
    ) {
        super(injector, elementRef);
        this.buscarPresupuestosEnSeguimiento();
    }

    presupuestoSeguimientos: Presupuesto[] = [];
    results: Message[] = [];

    buscarPresupuestosEnSeguimiento(){
        this.presupuestoService.getSeguimientos().subscribe(
            pres_seg =>{
                this.results = [];
                if (!pres_seg.hasOwnProperty("error")) {
                    this.presupuestoSeguimientos = this.presupuestoService.mapSeguimientos(pres_seg);
                } else {
                    this.results.push({ severity: 'error', summary: 'Seguimientos', detail: pres_seg.error });
                }
            },error =>{
                this.errorEmitter(error);
            }
        );
    }

    buscaSeguimientos(pres: Presupuesto){
    }

}
