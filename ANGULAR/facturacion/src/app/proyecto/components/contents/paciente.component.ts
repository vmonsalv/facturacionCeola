import { Component, Injector, ElementRef, ViewChild } from '@angular/core';
import { DatePipe } from '@angular/common';
import { BaseComponent } from '../../../base/components/structure/base.component';
import { Paciente } from '../../entities/paciente';
import { Message, ConfirmationService, SelectItem } from 'primeng/primeng';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { PacientesService } from '../../services/pacientes.service';

@Component({
    selector: 'paciente-panel',
    templateUrl: './paciente.component.html',
    providers: [ConfirmationService, PacientesService, DatePipe]
})

export class PacienteComponent extends BaseComponent {

    results: Message[] = [];
    nuevoPaciente: Paciente = new Paciente();
    editarPaciente: Paciente = new Paciente();
    selectedPaciente: Paciente = new Paciente();
    pacientes: Paciente[] = [];
    crud: string = "";
    previsiones: SelectItem[] = [];
    temporalRUT: string;

    constructor(
        public datepipe: DatePipe,
        public injector: Injector,
        public elementRef: ElementRef,
        private confirmationService: ConfirmationService,
        private pacientesService: PacientesService
    ) {
        super(injector, elementRef);
        for (let prev of this.injector.get("prevision")) {
            this.previsiones.push({ label: prev.nombre, value: prev.id });
        }
        this.buscaPacientes();
    }

    @ViewChild('editPaciente')
    editPaciente: ModalComponent;

    @ViewChild('insertPaciente')
    insertPaciente: ModalComponent;

    buscaPacientes() {
        this.pacientesService.getPacientes().subscribe(
            allPacientes => {
                this.results = [];
                if (!allPacientes.hasOwnProperty("error")) {
                    this.pacientes = this.pacientesService.mapPacientes(allPacientes);
                } else {
                    this.results.push({ severity: 'error', summary: 'Pacientes', detail: allPacientes.error });
                }
            }, error => {
                this.errorEmitter(error);
            }
        );
    }

    closeModalModificarPaciente() {
        this.editPaciente.close();
    }

    closeModalGuardarPaciente() {
        this.insertPaciente.close();
    }

    onGuardarPaciente() {
        this.nuevoPaciente = new Paciente();
        this.nuevoPaciente.creado_por = this.userOnline.uid;
        this.insertPaciente.open("lg");
    }

    onModificarPaciente(event) {
        this.temporalRUT = event.rut;
        this.selectedPaciente = event;
        this.editarPaciente = this.pacientesService.clonePaciente(event);
        this.editarPaciente.creado_por = this.userOnline.uid;
        this.editPaciente.open("lg");
    }

    borrarPaciente(event) {
        this.crud = "Eliminar paciente";
        this.confirmationService.confirm({
            icon: 'fa fa-exclamation-triangle',
            message: '¿Desea eliminar el registro del paciente?',
            accept: () => {
                let indice = this.pacientes.indexOf(event);
                this.pacientesService.deletePaciente({ rut: this.pacientes[indice].rut }).subscribe(
                    pacienteDeleted => {
                        this.pacientes = this.pacientes.filter((val, i) => i != indice);
                        this.results = [];
                        this.results.push({ severity: 'success', summary: 'Paciente eliminado', detail: 'El paciente ha sido eliminado con exito.' });
                    }, error => {
                        this.errorEmitter(error);
                    }
                );
            }
        });
    }



    modificarPaciente(paciente: Paciente) {
        this.results = [];
        let tmp = this.pacientesService.validateNewPaciente(this.pacientes, paciente, true, this.temporalRUT);
        if (tmp.length == 0) {
            this.crud = "Editar paciente";
            this.confirmationService.confirm({
                icon: 'fa fa-info-circle',
                message: '¿Desea editar el registro del paciente paciente?',
                accept: () => {
                    paciente.fec_nac_glosa = this.datepipe.transform(paciente.fec_nac, 'yyyy-MM-dd');
                    paciente.apellidos = paciente.apellidoPA + " " + paciente.apellidoMA;
                    this.pacientesService.updatePaciente(paciente).subscribe(
                        pacienteEdited => {
                            let pacTMP = [...this.pacientes];
                            paciente.fec_nac_glosa = this.datepipe.transform(paciente.fec_nac, 'dd/MM/yyyy');
                            paciente.rut_glosa = paciente.rut.substring(0, paciente.rut.length - 1) + "-" + paciente.rut.substring(paciente.rut.length - 1, paciente.rut.length);
                            for (var i = 0; i < this.previsiones.length; i++) {
                                if (this.previsiones[i].value == paciente.prevision) {
                                    paciente.prevision_glosa = this.previsiones[i].label;
                                    break;
                                }
                            }
                            pacTMP[this.pacientesService.findIndexPaciente(this.pacientes, this.selectedPaciente)] = paciente;
                            this.pacientes = pacTMP;
                            this.editarPaciente = new Paciente();
                            this.selectedPaciente = new Paciente();
                            this.temporalRUT;
                            this.editPaciente.close();
                            this.results = [];
                            this.results.push({ severity: 'success', summary: 'Paciente editado', detail: 'El paciente ha sido editado con exito.' });
                        }, error => {
                            this.errorEmitter(error);
                        }
                    );
                }
            });
        } else {
            this.results = [];
            this.results = tmp;
        }
    }

    guardarPaciente(paciente: Paciente) {
        this.results = [];
        let tmp = this.pacientesService.validateNewPaciente(this.pacientes, paciente, false, this.temporalRUT);
        if (tmp.length == 0) {
            this.crud = "Registrar nuevo paciente";
            this.confirmationService.confirm({
                icon: 'fa fa-info-circle',
                message: '¿Desea registrar al nuevo paciente?',
                accept: () => {
                    paciente.fec_nac_glosa = this.datepipe.transform(paciente.fec_nac, 'yyyy-MM-dd');
                    paciente.apellidos = paciente.apellidoPA + " " + paciente.apellidoMA;
                    this.pacientesService.insertPaciente(paciente).subscribe(
                        pacienteSaved => {
                            let pacientesTMP = [...this.pacientes];
                            paciente.fec_nac_glosa = this.datepipe.transform(paciente.fec_nac, 'dd/MM/yyyy');
                            paciente.rut_glosa = paciente.rut.substring(0, paciente.rut.length - 1) + "-" + paciente.rut.substring(paciente.rut.length - 1, paciente.rut.length);
                            for (var i = 0; i < this.previsiones.length; i++) {
                                if (this.previsiones[i].value == paciente.prevision) {
                                    paciente.prevision_glosa = this.previsiones[i].label;
                                    break;
                                }
                            }
                            pacientesTMP.push(paciente);
                            this.pacientes = pacientesTMP;
                            this.nuevoPaciente = new Paciente();
                            this.insertPaciente.close();
                            this.results = [];
                            this.results.push({ severity: 'success', summary: 'Nuevo paciente', detail: 'El paciente ha sido registrado con exito.' });
                        }, error => {
                            this.errorEmitter(error);
                        }
                    );
                }
            });
        } else {
            this.results = [];
            this.results = tmp;
        }
    }

}
