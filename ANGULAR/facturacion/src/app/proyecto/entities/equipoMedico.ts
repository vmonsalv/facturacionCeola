export class EquipoMedico {

    constructor(
        public ID?: number,
        public rut?: string,
        public nombres?: string,
        public apellidoPA?: string,
        public apellidoMA?: string,
        public fec_nac?: Date,
        public fono?: string,
        public movil?: string,
        public correo?: string,
        public direccion?: string,
        public tipo?: string,
        public precio?: string,
        public definitivo?: boolean
    ) { }

}