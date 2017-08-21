export class ErrorBase extends Error {

    constructor(public error: Error, public fatal: boolean, public expirado: boolean, public validacion: any) {
        super();
    }

}