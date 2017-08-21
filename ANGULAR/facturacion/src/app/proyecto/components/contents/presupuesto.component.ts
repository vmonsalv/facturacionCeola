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

    /************* GASTOS HONORARIOS MEDICOS  ***************/

    onInsertHonorario() {
        this.nuevoPresupuesto.honorarioMedico[this.nuevoPresupuesto.honorarioMedico.length - 1].definitivo = true;
        let hono = [...this.nuevoPresupuesto.honorarioMedico];
        let equipo = new EquipoMedico();
        equipo.definitivo = false;
        hono.push(equipo);
        this.nuevoPresupuesto.honorarioMedico = hono;
        this.sumarCostos();
        this.precio_honorario.push("");
    }

    onDeleteHonorario(event) {
        let indice = this.nuevoPresupuesto.honorarioMedico.indexOf(event);
        this.nuevoPresupuesto.honorarioMedico = this.nuevoPresupuesto.honorarioMedico.filter((val, i) => i != indice);
    }

    /************* GASTOS CENTRO LASER  ***************/

    onInsertCentro() {
        this.nuevoPresupuesto.insumosCentroLaser[this.nuevoPresupuesto.insumosCentroLaser.length - 1].definitivo = true;
        let centLaser = [...this.nuevoPresupuesto.insumosCentroLaser];
        let centro = new CentroLaser();
        centro.definitivo = false;
        centLaser.push(centro);
        this.nuevoPresupuesto.insumosCentroLaser = centLaser;
        this.sumarCostos();
        this.precio_centro.push("");
    }

    onDeleteCentro(event) {
        let indice = this.nuevoPresupuesto.insumosCentroLaser.indexOf(event);
        this.nuevoPresupuesto.insumosCentroLaser = this.nuevoPresupuesto.insumosCentroLaser.filter((val, i) => i != indice);
    }

    /************* GASTOS ADICIONALES  ***************/

    onInsertAdicional() {
        this.nuevoPresupuesto.adicionales[this.nuevoPresupuesto.adicionales.length - 1].definitivo = true;
        let adics = [...this.nuevoPresupuesto.adicionales];
        let adi = new Adicional();
        adi.definitivo = false;
        adics.push(adi);
        this.nuevoPresupuesto.adicionales = adics;
        this.sumarCostos();
        this.precio_adicional.push("");
    }

    onDeleteAdicional(event) {
        let indice = this.nuevoPresupuesto.adicionales.indexOf(event);
        this.nuevoPresupuesto.adicionales = this.nuevoPresupuesto.adicionales.filter((val, i) => i != indice);
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
        this.nuevoPresupuesto.honorarioMedico = [equipo];
        this.nuevoPresupuesto.insumosCentroLaser = [centro];
        this.nuevoPresupuesto.adicionales = [adi];
        this.nuevoPresupuesto.ID_Prevision = 0;
        this.precio_honorario.push("");
        this.precio_centro.push("");
        this.precio_adicional.push("");
        this.nuevoPresupuesto.total_honorario = 0;
        this.nuevoPresupuesto.total_insumos = 0;
        this.nuevoPresupuesto.total_adicionales = 0;
        this.nuevoPresupuesto.total = 0;
        this.insertPresupuesto.open();
    }

    /************* EDITAR PRESUPUESTO  ***************/


    /************* ELIMINAR PRESUPUESTO  ***************/


    /************* SUMAR GASTOS PRESUPUESTO  ***************/

    precio_honorario: string[] = [];
    precio_centro: string[] = [];
    precio_adicional: string[] = [];
    sumarCostos() {
        this.nuevoPresupuesto.total_honorario = 0;
        this.nuevoPresupuesto.total_insumos = 0;
        this.nuevoPresupuesto.total_adicionales = 0;
        this.nuevoPresupuesto.total = 0;
        let indice = 0;
        for (let precios of this.precio_honorario) {
            if (precios != "" && precios != undefined) {
                if (this.nuevoPresupuesto.honorarioMedico[indice++].definitivo) {
                    this.nuevoPresupuesto.total += parseInt(precios);
                    this.nuevoPresupuesto.total_honorario += parseInt(precios);
                }
            }
        }
        indice = 0;
        for (let precios of this.precio_centro) {
            if (precios != "" && precios != undefined) {
                if (this.nuevoPresupuesto.insumosCentroLaser[indice++].definitivo) {
                    this.nuevoPresupuesto.total += parseInt(precios);
                    this.nuevoPresupuesto.total_insumos += parseInt(precios);
                }
            }
        }
        indice = 0;
        for (let precios of this.precio_adicional) {
            if (precios != "" && precios != undefined) {
                if (this.nuevoPresupuesto.adicionales[indice++].definitivo) {
                    this.nuevoPresupuesto.total += parseInt(precios);
                    this.nuevoPresupuesto.total_adicionales += parseInt(precios);
                }
            }
        }
    }

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
                    this.prestacionesSelect.push({ label: element.nombre, value: "asd" });
                });
            }, error => {
                this.errorEmitter(error);
            }
        );
    }

}
