import { Component } from '@angular/core';
import { Users } from '../user';

@Component({
    templateUrl:"./payment.component.html"

})
export class PaymentComponent{

    user:Users;

    ngOnInit(){
        this.user=JSON.parse(sessionStorage.getItem('user'));

    }

}