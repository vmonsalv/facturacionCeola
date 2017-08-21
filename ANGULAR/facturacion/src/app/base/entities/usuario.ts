export class Usuario {

    constructor(
        public uid?: string,
        public rut?: string,
        public nombre?: string,
        public foto?: string,
        public app?: number,
        public permisos?: any[],
        public sesion?: number,
        public admin?: number
    ) { }

}