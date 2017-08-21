import { EquipoMedico } from './equipoMedico';
import { CentroLaser } from './centroLaser';
import { Adicional } from './adicional';

export class Presupuesto {

    constructor(
        public ID?: number,
        public nombre?: string,
        public ID_Prevision?: number,
        public ID_Prestacion?: number,
        public fec_creacion?: Date,
        public rut_creador?: string,
        public vigencia?: number,
        public tipo?: number,
        public cant_ojos?: number,
        public descuent_50?: boolean,
        public notas?: string,
        public precio_pad_paquetizado?: number,
        public honorarioMedico?: EquipoMedico[],
        public insumosCentroLaser?: CentroLaser[],
        public adicionales?: Adicional[],
        public total_honorario?: number,
        public total_insumos?: number,
        public total_adicionales?: number,
        public total?: number,

        public vencimiento?: Date,
        public uid?: number,
        public rut?: string,
        public nombres?: string,
        public apellidos?: string,
        public fono?: string,
        public movil?: string,
        public correo?: string,
        public cod_prestacion?: string,
        public prestacion?: string,
        ) { }

}