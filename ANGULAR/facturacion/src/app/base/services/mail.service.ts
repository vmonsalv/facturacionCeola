import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { InvocaService } from './invoca.service';

@Injectable()
export class MailService {

    constructor(private invoke: InvocaService) { }

    sendMailContact(params?: any): Observable<any> {
        return this.invoke.httpInvoke("base/sendMail", params);
    }

}