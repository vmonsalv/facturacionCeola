import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { InvocaService } from '../../base/services/invoca.service';
import { Usuario } from '../../proyecto/entities/usuario';
import { Aplicacion } from '../../base/entities/aplicacion';

@Injectable()
export class LoginService {

    constructor(private invoke: InvocaService) { }

    doLogin(params?: any): Observable<any> {
        return this.invoke.httpInvoke("doLogin", params);
    }

    getApps(params?: any): Observable<any> {
        return this.invoke.httpInvoke("doApps", params);
    }

    mapDoLogin(m: any): Usuario[] {
        return m.map(this.toDoLogin);
    }

    toDoLogin(r: any): Usuario {
        let m = <Usuario>({
            idUsuario: r.id,
            rut: r.rut,
            nombreCompleto: r.nombre + " " + r.primer_apellido + " " + r.segundo_apellido
        });
        return m;
    }

    toAplicaciones(r: any): Aplicacion {
        let m = <Aplicacion>({
            nombre: r.nombre,
            codApp: r.codApp,
            url: r.url,
            activo: r.activo
        });
        return m;
    }

}