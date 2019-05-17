import { Component } from '@angular/core';
import { Users } from './user';

@Component({
    templateUrl: "./customer-setting.component.html"
})
export class CustomerSettingComponent{

    user:Users;
    ngOnInit(): void {
    this.user=JSON.parse(sessionStorage.getItem('user'));
    console.log(this.user);
    }
}