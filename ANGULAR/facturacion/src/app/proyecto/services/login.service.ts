import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { InvocaService } from '../../../app/base/services/invoca.service';

@Injectable()
export class LoginService {

    constructor(private invoke: InvocaService) { }

    getLogin(params?: any): Observable<any> {
        return this.invoke.httpInvoke("login", params);
    }

    getUrlApp(params?: any): Observable<any> {
        return this.invoke.httpInvoke("generarUrl", params);
    }

    getTokenUsuario(params?: any): Observable<any> {
        return this.invoke.httpInvoke("getTokenUsuario", params);
    }

}