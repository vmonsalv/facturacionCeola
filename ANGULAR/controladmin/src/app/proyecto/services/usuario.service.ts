import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Message } from 'primeng/primeng';
import { Usuario } from '../../base/entities/usuario';
import { InvocaService } from '../../../app/base/services/invoca.service';

@Injectable()
export class UsuarioService {

    constructor(private invoke: InvocaService) { }

    /**************** GETTERS Y SETTERS */

    getUsuarios(params?: any): Observable<any> {
        return this.invoke.httpInvoke("usuario/getUsuarios", params);
    }

    updateUsuario(params?: any): Observable<any> {
        return this.invoke.httpInvoke("usuario/updateUsuario", params);
    }

    createUsuario(params?: any): Observable<any> {
        return this.invoke.httpInvoke("usuario/createUsuario", params);
    }

    mapUsuarios(m: any): Usuario[] {
        return m.map(this.toUsuario);
    }

    toUsuario(r: any): Usuario {
        let m = <Usuario>({
            uid: r.rut,
            rut: r.rut.substring(0, r.rut.length - 1) + "-" + r.rut.substring(r.rut.length - 1, r.rut.length),
            nombre: r.nombre,
            apellidoP: r.primer_apellido,
            apellidoM: r.segundo_apellido,
            correo: r.email,
            admin: r.superadmin,
            admin_boolean: r.superadmin == 1 ? true : r.superadmin == 0 ? false : null,
            estado: r.estado,
            estado_glosa: r.estado == 1 ? 'ACTIVO' : 'NO ACTIVO',
            estado_boolean: r.estado == 1 ? true : false,
            foto: "http://192.168.0.100/services/utils/imagenes/" + r.rut + ".jpg",
            roles: r.roles
        });
        return m;
    }

    /************** VALIDACIONES Y UTILIDADES */

    cloneUser(c: Usuario): Usuario {
        let userTMP = new Usuario();
        for (let prop in c) {
            userTMP[prop] = c[prop];
        }
        return userTMP;
    }

    validaUsuario(user: Usuario, usuarios: Usuario[], temporalRut: string): Message[] {
        let msgs: Message[] = [];
        if (user.uid == undefined || user.uid == "") {
            msgs.push({ severity: 'error', summary: 'Rut usuario', detail: 'Debe ingresar el Rut del usuario.' });
        } else {
            for (let usuario of usuarios) {
                if (usuario.uid == user.uid && temporalRut != usuario.uid) {
                    msgs.push({ severity: 'error', summary: 'Rut usuario', detail: 'El Rut ingresado ya está registrado en el sistema.' });
                    break;
                }
            }
        }
        if(user.nombre == undefined || user.nombre == ""){
            msgs.push({ severity: 'error', summary: 'Nombre(s) usuario', detail: 'Debe ingresar el/los nombre(s) del usuario.' });
        }
        if(user.apellidoP == undefined || user.apellidoM == undefined || user.apellidoP == "" || user.apellidoM == ""){
            msgs.push({ severity: 'error', summary: 'Apellido(s) usuario', detail: 'Debe ingresar el/los apellido(s) del usuario.' });
        }
        if(user.correo == undefined || user.correo == ""){
            msgs.push({ severity: 'error', summary: 'Email usuario', detail: 'Debe ingresar el email del usuario.' });
        } else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/.test(user.correo)) {
            msgs.push({ severity: 'error', summary: 'Email usuario', detail: 'El email ingresado es invalido.' });
        }
        return msgs;
    }

    findSelectedUsuarioIndex(user:Usuario, usuarios: Usuario[]): number {
        return usuarios.indexOf(user);
    }

}