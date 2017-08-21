import { SelectItem } from 'primeng/primeng';
import { Menu } from './menu';

export class Aplicacion {

    constructor(
        public nombre?: string,
        public id?: number,
        public url?: string,
        public estado?: number,
        public comboActivo?: SelectItem[],
        public menus?: Menu[]
    ) { }

}