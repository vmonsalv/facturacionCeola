import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { Menu } from '../entities/menu';
import { Aplicacion } from '../entities/aplicacion';
import { InvocaService } from './invoca.service';

@Injectable()
export class MenuService {

    constructor(private invoke: InvocaService) { }

    getMenus(params?: any): Observable<any> {
        return this.invoke.httpInvoke("base/getMenus", params);
    }

    getApps(params?: any): Observable<any> {
        return this.invoke.httpInvoke("base/getApps", params);
    }

    mapMenus(m: any): Menu[] {
        return m.map(this.toMenus);
    }

    mapAplicaciones(m: any): Aplicacion[] {
        return m.map(this.toAplicaciones);
    }

    toAplicaciones(r: any): Aplicacion {
        let m = <Aplicacion>({
            nombre: r.nombre,
            id: r.id,
            url: r.url,
            estado: r.estado
        });
        return m;
    }

    toMenus(r: any): Menu {
        let m = <Menu>({
            estado: r.estado,
            nombre: r.nombre,
            icono: r.estado == 2 ? 'mantencion' : r.icono,
            metodo: r.estado == 2 ? 'mantencion' : r.metodo,
            descripcion: r.descripcion,
            id: r.id
        });
        return m;
    }

}