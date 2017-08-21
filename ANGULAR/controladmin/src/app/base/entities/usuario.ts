import {Rol} from './rol';

export class Usuario {

    constructor(
        public uid?: string,
        public rut?: string,
        public nombre?: string,
        public apellidoP?: string,
        public apellidoM?: string,
        public correo?: string,
        public estado?: string,
        public estado_glosa?: string,
        public estado_boolean?: boolean,
        public foto?: string,
        public app?: number,
        public roles?: Rol[],
        public sesion?: number,
        public admin?: number,
        public admin_boolean?: boolean,
    ) { }

}