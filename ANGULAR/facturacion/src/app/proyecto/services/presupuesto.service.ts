import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { Presupuesto } from '../entities/presupuesto';
import { InvocaService } from '../../base/services/invoca.service';

@Injectable()
export class PresupuestoService {

    constructor(private invoke: InvocaService) { }

    getSeguimientos(params?: any): Observable<any> {
        return this.invoke.httpInvoke("presupuesto/getSegPresupuestos", params);
    }

    getPresupuestosBase(params?: any): Observable<any> {
        return this.invoke.httpInvoke("presupuesto/getPresupuestosBase", params);
    }

    mapSeguimientos(m: any): Presupuesto[] {
        return m.map(this.toSeguimiento);
    }

    mapPresupuestosBase(m: any): Presupuesto[] {
        return m.map(this.toPresupuestoBase);
    }

    toPresupuestoBase(r: any): Presupuesto {
        let m = <Presupuesto>({
            id: r.id,
            prestacion_id: r.prestacion_id,
            prestacion_codigo: r.codigo_prestacion,
            prestacion_glosa: r.prestacion,
            prevision_id: r.prevision_id,
            prevision_glosa: r.prevision,
            protesis_id: r.protesis_id.split(","),
            pabellon_id: r.pabellon_id,
            vigencia: r.vigencia,
            copago_clinica: r.copago_clinica,
            copago_fonasa: r.copago_fonasa,
            insumos_id: r.insumo_id.split(","),
            medicamentos_id: r.medicamento_id.split(",")
        });
        return m;
    }

    toSeguimiento(r: any): Presupuesto {
        let m = <Presupuesto>({
            id: r.id,
            // fec_creacion: r.fec_creacion,
            // vencimiento: r.vencimiento,
            // uid: r.rut,
            // rut: r.rut.substring(0, r.rut.length - 1) + "-" + r.rut.substring(r.rut.length - 1, r.rut.length),
            // nombres: r.nombres,
            // apellidos: r.paterno + " " + r.materno,
            // fono: r.fono,
            // movil: r.movil,
            // correo: r.correo,
            prestacion_codigo: r.codigo_prestacion,
            prestacion_glosa: r.prestacion
        });
        return m;
    }

}