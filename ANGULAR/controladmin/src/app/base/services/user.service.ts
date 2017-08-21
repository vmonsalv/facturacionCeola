import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Message } from 'primeng/primeng';
import { Usuario } from '../entities/usuario';
import { InvocaService } from './invoca.service';

@Injectable()
export class UserService {

    constructor(private invoke: InvocaService) { }

    validadorCambiaClave(actual: string, nueva: string, repita: string): Message[]{
        let error: Message[] = [];
        if(actual == "" || nueva == "" || repita == "" || actual == undefined || nueva == undefined || repita == undefined){
            error.push({ severity: 'error', summary: 'Campos vacios:', detail: 'Debe ingresar los campos solicitados' });
        }else if(nueva != repita){
            error.push({ severity: 'error', summary: 'Claves distintas:', detail: 'La clave ingresada no es la misma que la repetida.' });
        }
        return error;
    }

    getTokenData(params?: any): Observable<any> {
        return this.invoke.httpInvoke("base/getTokenData", params);
    }

    toUserData(r: any): Usuario {
        let m = <Usuario>({
            uid: r.uid,
            rut: r.uid.substring(0, r.uid.length - 1) + "-" + r.uid.substring(r.uid.length - 1, r.uid.length),
            nombre: r.nombre,
            foto: "http://192.168.0.100/services/utils/imagenes/" + r.uid + ".jpg",
            app: r.app,
            permisos: r.permisos,
            admin: r.adm
        });
        return m;
    }

}