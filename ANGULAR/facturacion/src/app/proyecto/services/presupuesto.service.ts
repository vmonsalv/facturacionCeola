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
            nombre: r.prestacion
        });
        return m;
    }

    toSeguimiento(r: any): Presupuesto {
        let m = <Presupuesto>({
            ID: r.id,
            fec_creacion: r.fec_creacion,
            vencimiento: r.vencimiento,
            uid: r.rut,
            rut: r.rut.substring(0, r.rut.length - 1) + "-" + r.rut.substring(r.rut.length - 1, r.rut.length),
            nombres: r.nombres,
            apellidos: r.paterno + " " + r.materno,
            fono: r.fono,
            movil: r.movil,
            correo: r.correo,
            cod_prestacion: r.codigo_prestacion,
            prestacion: r.prestacion
        });
        return m;
    }

}