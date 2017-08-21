export class BaseSettings {

    public static get URL_BACKEND(): string {
        return "http://192.168.0.13:3001/facturacion";
        //return "http://192.168.0.17:3001/facturacion";
        //return "http://10.140.50.188:3001/facturacion";
        //return "http://192.168.0.100:3001/facturacion";
    }

    public static get URL_LOGIN(): string {
        return "http://192.168.0.100/loginCeola";
    }

    public static get TITULO_PROYECTO(): string {
        return "facturación";
    }

    public static get NOMBRE_SISTEMA(): string {
        return "Facturación";
    }

    public static get AUTOR_SISTEMA(): string {
        return "Centro Oftalmológico Laser";
    }

    public static get NICKNAME_SISTEMA(): string {
        return "Ceola S.A";
    }
    
    public static get SUCURSAL_SISTEMA(): string {
        return "Viña del Mar";
    }

    public static get VERSION_SISTEMA(): string {
        return "v1.0.0";
    }

    public static get YEAR_SISTEMA(): string {
        return "2017";
    }

    public static get ACTIVITY_TIME_OUT(){
        /* EN SEGUNDOS */
        return 2300;
    }

    public static get ACTIVITY_TIME_OUT_ALERT(){
        /* A LOS X SEGUNDOS EL CLIENTE SERA AVISADO DE EXPIRACIÓN POR INACTIVIDAD INMINENTE */
        /* EN SEGUNDOS */
        return 120;
    }

}
