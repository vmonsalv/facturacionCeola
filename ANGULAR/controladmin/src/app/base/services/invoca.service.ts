import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { BaseSettings } from '../../base-settings';
import { ErrorBase } from '../entities/errorbase';


@Injectable()
export class InvocaService {

    constructor(private http: Http) { }


    private getHeaders(): Headers {
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        headers.append('Authorization', window.sessionStorage.getItem("token"));

        return headers;
    }

    httpInvoke(serviceName: string, params?: any): Observable<any> {
        var args = params == null ? {} : params;
        let arg = 'arg=' + encodeURIComponent(JSON.stringify(args));

        return this.http.post(`${BaseSettings.URL_BACKEND}/${serviceName}`, arg, { headers: this.getHeaders() })
            .map(this.mapResultado)
            .catch(this._serverError);
    }

    private _serverError(error: Response) {
        if (error instanceof Response) {
            return Observable.throw(new ErrorBase(new Error("Error al comunicarse con servidor interno"), true, false, null));
        }

        return Observable.throw(error || 'backend server error');
    }

    private mapResultado(response: Response): Observable<any> {
        var ret = response.json();
        
        if (ret.status == "OK") {
            return ret.data;
        } else {
            //throw new Error(ret.error.type + "||" + ret.error.message);

            let validacion = {};
            let msgError: string = ret.error.message;
            let error = new Error(msgError);
            let fatal: boolean = ret.error.type=="FATAL";
            let expirado: boolean = msgError.indexOf('tokenError:') >= 0;

            switch (ret.error.type) {
                case "ERROR":
                    if (msgError == 'Invalid Credentials') msgError = 'La contraseña ingresada no corresponde a la del usuario';
                    error.message = msgError;

                    validacion = { error: [{ severity: 'error', detail: msgError }], movil: msgError };

                    break;
                case "FATAL":
                    error.message = msgError

                    validacion = { error: msgError, movil: msgError }

                    break;
            }

            throw new ErrorBase(error, fatal, expirado, validacion);
        }
    }

}
