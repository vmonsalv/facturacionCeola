import { SelectItem } from 'primeng/primeng';

export class Menu {

    constructor(
        public estado?: number,
        public nombre?: string,
        public icono?: string,
        public metodo?: string,
        public descripcion?: string,
        public id?: number,
        public comboEstado?: SelectItem[]
    ) { }

}