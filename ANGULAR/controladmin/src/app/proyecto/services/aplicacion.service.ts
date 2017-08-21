import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { Aplicacion } from '../../base/entities/aplicacion';
import { Menu } from '../../base/entities/menu';
import { InvocaService } from '../../../app/base/services/invoca.service';

@Injectable()
export class AplicacionService {

    constructor(private invoke: InvocaService) { }

    getAplicaciones(params?: any): Observable<any> {
        return this.invoke.httpInvoke("aplicacion/getApps", params);
    }

    updateApp(params?: any): Observable<any> {
        return this.invoke.httpInvoke("aplicacion/updateApp", params);
    }

    updateMenu(params?: any): Observable<any> {
        return this.invoke.httpInvoke("aplicacion/updateMenu", params);
    }

    mapAplicaciones(m: any): Aplicacion[] {
        return m.map(this.toAplicaciones);
    }

    toAplicaciones(r: any): Aplicacion {
        let m = <Aplicacion>({
            nombre: r.nombre,
            id: r.id,
            url: r.url,
            estado: r.estado,
            menus: r.menus
        });
        return m;
    }

}