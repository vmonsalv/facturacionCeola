import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { Prevision } from '../entities/prevision';
import { InvocaService } from '../../base/services/invoca.service';

@Injectable()
export class PrevisionService {

    constructor(private invoke: InvocaService) { }

    getPrevisiones(params?: any): Observable<any> {
        return this.invoke.httpInvoke("prevision/getPrevisiones", params);
    }

    mapPrevisiones(m: any): Prevision[] {
        return m.map(this.toPrevision);
    }

    toPrevision(r: any): Prevision {
        let m = <Prevision>({
            id: r.id,
            nombre: r.nombre,
            convenio: r.convenio
        });
        return m;
    }

}