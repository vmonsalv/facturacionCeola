import { Component, Injector, ElementRef, ViewChild } from '@angular/core';
import { BaseComponent } from '../../../base/components/structure/base.component';
import { Paciente } from '../../entities/paciente';
import { Prevision } from '../../entities/prevision';
import { Presupuesto } from '../../entities/presupuesto';
import { EquipoMedico } from '../../entities/equipoMedico';
import { CentroLaser } from '../../entities/centroLaser';
import { Adicional } from '../../entities/adicional';
import { Message, ConfirmationService, SelectItem } from 'primeng/primeng';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { PacientesService } from '../../services/pacientes.service';
import { PresupuestoService } from '../../services/presupuesto.service';

@Component({
    selector: 'presupuesto-panel',
    templateUrl: './presupuesto.component.html',
    providers: [PacientesService, PresupuestoService]
})

export class PresupuestoComponent extends BaseComponent {

    constructor(
        public injector: Injector,
        public elementRef: ElementRef,
        private pacientesService: PacientesService,
        private presupuestoService: PresupuestoService
    ) {
        super(injector, elementRef);
        this.previsiones = this.injector.get("prevision");
        for (let prev of this.injector.get("prevision")) {
            this.previsionesSelect.push({ label: prev.nombre, value: prev.id });
        }
        /*for (let pres of this.injector.get("prestacion")) {
            this.prestacionesSelect.push({ label: pres.codigo + " - " + pres.nombre, value: pres.ID });
        }*/
    }

    results: Message[] = [];
    nuevoPresupuesto: Presupuesto = new Presupuesto();
    presupuestos: Presupuesto[] = [];
    prestacionesSelect: SelectItem[] = [];
    previsionesSelect: SelectItem[] = [];
    previsiones: Prevision[] = [];
    rutSearch: string = "";
    pacientes: Paciente[] = [];
    pacienteFound: Paciente[] = [];
    msgsPacienteSearch: Message[] = [];
    msgsPresupuesto: Message[] = [];
    pad_paquetizado: SelectItem[];
    ojos: SelectItem[];
    foundIt: boolean = true;

    @ViewChild('insertPresupuesto')
    insertPresupuesto: ModalComponent;

    @ViewChild('selectPresupuesto')
    selectPresupuesto: ModalComponent;

    ngOnInit() {
        this.pad_paquetizado = [
            { label: 'Normal', value: '1' },
            { label: 'PAD', value: '2' },
            { label: 'Paquetizado', value: '3' }
        ];

        this.ojos = [
            { label: '1 ojo', value: '1' },
            { label: '2 ojos', value: '2' }
        ];

    }

    /************* MODAL CONTROL  ***************/

    closeModalPresupuesto() {
        this.insertPresupuesto.close();
    }

    closeModalPresupuestoSelect() {
        this.selectPresupuesto.close();
    }

    onSelectPresupuesto() {
        this.selectPresupuesto.open("lg");
    }


    /************* CREAR PRESUPUESTO  ***************/

    onInsertPresupuesto() {
        this.nuevoPresupuesto = new Presupuesto();
        let equipo = new EquipoMedico();
        let centro = new CentroLaser();
        let adi = new Adicional();
        adi.definitivo = false;
        equipo.definitivo = false;
        centro.definitivo = false;
        this.insertPresupuesto.open();
    }

    /************* EDITAR PRESUPUESTO  ***************/


    /************* ELIMINAR PRESUPUESTO  ***************/


    /************* SUMAR GASTOS PRESUPUESTO  ***************/


    /************* BUSCAR PACIENTE  ***************/

    searchPaciente() {
        this.presupuestos = [];
        this.pacienteFound = [];
        this.msgsPacienteSearch = [];
        this.foundIt = true;
        if (this.rutSearch == "") {
            this.msgsPacienteSearch.push({ severity: 'error', detail: 'Debe ingresar un Rut de un paciente registrado.' });
        } else {
            this.pacientesService.getPaciente({ rut: this.rutSearch }).subscribe(
                found => {
                    if (!found.hasOwnProperty("error")) {
                        this.foundIt = false;
                        this.pacienteFound = [this.pacientesService.toPacientes(found)];
                        this.searchPresupuestos();
                    } else {
                        this.msgsPacienteSearch.push({ severity: 'error', detail: 'El Rut ingresado no esta registrado en el sistema. Intente nuevamente.' });
                    }
                }, error => {
                    this.errorEmitter(error);
                }
            );
        }
    }

    /************* BUSCAR PRESUPUESTOS DEL PACIENTE ENCONTRADO  ***************/

    searchPresupuestos() {
        let registroPresupuesto = [...this.presupuestos];
        this.presupuestos = registroPresupuesto;
    }

    presupuestosBase: Presupuesto[] = [];

    searchPresupuestoBase(event) {
        this.prestacionesSelect = [];
        this.presupuestoService.getPresupuestosBase({ prevision: event.value }).subscribe(
            presupuestos_base => {
                this.presupuestosBase = this.presupuestoService.mapPresupuestosBase(presupuestos_base);
                this.presupuestosBase.forEach(element => {
                    this.prestacionesSelect.push({ label: element.prestacion_codigo + " - " + element.prestacion_glosa, value: element.prestacion_id });
                });
            }, error => {
                this.errorEmitter(error);
            }
        );
    }

}
