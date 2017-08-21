export class Seguimiento {

    constructor(
        public fec_creacion?: Date,
        public vencimiento?: Date,
        public uid?: number,
        public rut?: string,
        public nombres?: string,
        public paterno?: string
    ) { }

}