import { EquipoMedico } from './equipoMedico';
import { CentroLaser } from './centroLaser';
import { Adicional } from './adicional';

export class Presupuesto {

    constructor(
        public id?: number,
        public prestacion_id?: number,
        public prestacion_codigo?: string,
        public prestacion_glosa?: string,
        public prevision_id?: number,
        public prevision_glosa?: string,
        public copago_clinica?: number,
        public copago_fonasa?: number,
        public pabellon_id?: number,
        public insumos_id?: number[],
        public medicamentos_id?: number[],
        public protesis_id?: number[],
        public vigencia?: number
    ) { }

}