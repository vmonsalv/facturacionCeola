export class Paciente {

    constructor(
        public id?: number,
        public rut?: string,
        public rut_glosa?: string,
        public nombres?: string,
        public apellidoPA?: string,
        public apellidoMA?: string,
        public apellidos?: string,
        public fec_nac?: Date,
        public fec_nac_glosa?: string,
        public fono?: string,
        public movil?: string,
        public correo?: string,
        public direccion?: string,
        public prevision?: number,
        public prevision_glosa?: string,
        public creado_por?: string
    ) { }

}