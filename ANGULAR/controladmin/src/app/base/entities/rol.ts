import { SelectItem } from 'primeng/primeng';

export class Rol {

    constructor(
        public aplicacion_id?: number,
        public nombre_aplicacion?: string,
        public usuario_id?: number,
        public rol_id?: number,
        public nombre_rol?: string,
        public comboRol?: SelectItem[]
    ) { }

}