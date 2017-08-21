import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Message } from 'primeng/primeng';
import { Paciente } from '../entities/paciente';
import { InvocaService } from '../../../app/base/services/invoca.service';

@Injectable()
export class PacientesService {

    constructor(private invoke: InvocaService) { }

    /****************** GETTERS Y SETTERS */

    getPacientes(params?: any): Observable<any> {
        return this.invoke.httpInvoke("pacientes/getPacientes", params);
    }

    getPaciente(params?: any): Observable<any> {
        return this.invoke.httpInvoke("pacientes/getPaciente", params);
    }

    insertPaciente(params?: any): Observable<any> {
        return this.invoke.httpInvoke("pacientes/newPaciente", params);
    }

    updatePaciente(params?: any): Observable<any> {
        return this.invoke.httpInvoke("pacientes/updatePaciente", params);
    }

    deletePaciente(params?: any): Observable<any> {
        return this.invoke.httpInvoke("pacientes/deletePaciente", params);
    }

    mapPacientes(m: any): Paciente[] {
        return m.map(this.toPacientes);
    }

    toPacientes(r: any): Paciente {
        let m = <Paciente>({
            rut: r.rut,
            rut_glosa: r.rut.substring(0, r.rut.length - 1) + "-" + r.rut.substring(r.rut.length - 1, r.rut.length),
            nombres: r.nombres,
            apellidoPA: r.paterno,
            apellidoMA: r.materno,
            fec_nac: new Date(r.fec_nac),
            fec_nac_glosa: r.fec_nac_glosa,
            apellidos: r.paterno + " " + r.materno,
            fono: r.fono,
            movil: r.movil,
            correo: r.correo,
            direccion: r.direccion,
            prevision: r.prevision_id,
            prevision_glosa: r.prevision_glosa
        });
        return m;
    }


    /************** UTILIDADES Y VALIDADORES */

    validateNewPaciente(pacientes: Paciente[], paciente: Paciente, editMode: boolean, rutTemp: string): Message[] {
        let msgs: Message[] = [];
        if (paciente.rut == undefined || paciente.rut == "") {
            msgs.push({ severity: 'error', summary: 'Rut paciente', detail: 'Debe ingresar un rut valido.' });
        } else {
            for (let pac of pacientes) {
                if (pac.rut == paciente.rut) {
                    if (!editMode) {
                        msgs.push({ severity: 'error', summary: 'Rut paciente', detail: 'El Rut ingresado ya esta registrado en el sistema.' });
                        break;
                    } else {
                        if (pac.rut != rutTemp) {
                            msgs.push({ severity: 'error', summary: 'Rut paciente', detail: 'El rut ingresado ya esta registrado en el sistema.' });
                            break;
                        }
                    }
                }
            }
        }
        if (paciente.nombres == undefined || paciente.nombres == "") {
            msgs.push({ severity: 'error', summary: 'Nombre(s) paciente', detail: 'Debe ingresar el/los nombre(s) del paciente.' });
        }
        if (paciente.apellidoPA == undefined || paciente.apellidoPA == "" || paciente.apellidoMA == undefined || paciente.apellidoMA == "") {
            msgs.push({ severity: 'error', summary: 'Apellidos paciente', detail: 'Debe ingresar los apellidos del paciente.' });
        }
        if (paciente.fec_nac == null) {
            msgs.push({ severity: 'error', summary: 'Fec. nacimiento paciente', detail: 'Debe seleccionar la fecha de nacimiento del paciente.' });
        }
        if (paciente.correo != undefined && paciente.correo != "") {
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/.test(paciente.correo)) {
                msgs.push({ severity: 'error', summary: 'Email paciente', detail: 'El email ingresado es invalido.' });
            }
        }
        if ((paciente.fono == undefined || paciente.fono == "") && (paciente.movil == "" || paciente.movil == undefined)) {
            msgs.push({ severity: 'error', summary: 'Fono/Movil paciente', detail: 'Debe ingresar el fono y/o el movil del paciente.' });
        }
        if (paciente.direccion == undefined || paciente.direccion == "") {
            msgs.push({ severity: 'error', summary: 'Domicilio paciente', detail: 'Debe ingresar la dirección del paciente.' });
        }
        if (paciente.prevision == undefined) {
            msgs.push({ severity: 'error', summary: 'Previsión paciente', detail: 'Debe seleccionar la previsión del pacientes.' });
        }
        return msgs;
    }

    findIndexPaciente(pacientes: Paciente[], paciente: Paciente): number {
        return pacientes.indexOf(paciente);
    }

    clonePaciente(c: Paciente): Paciente {
        let pacienteTMP = new Paciente();
        for (let prop in c) {
            pacienteTMP[prop] = c[prop];
        }
        return pacienteTMP;
    }

}