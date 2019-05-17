import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from './user';
import { Observable } from 'rxjs';

@Injectable()
export class AppService{
    visible: boolean;

    baseUrl="http://localhost:8090/api/users";
    constructor(private http:HttpClient,){ this.visible = true;}


//     hide() { this.visible = false; }

//   show() { this.visible = true; }

//   toggle() { this.visible = !this.visible; }

    registerNewUser(user:Users):Observable<Users>{

        //return this.http.post<Users>(this.baseUrl+"/users",Users);
        return this.http.post<Users>(this.baseUrl,user);

    }

    // loginUser(email:String,password:string):Observable<any>{

    //     return this.http.get(this.baseUrl+"/"+email+"/"+password);
    // }
   
    
    loginUser(email:string):Observable<Users>{

        return this.http.get<Users>(this.baseUrl+"/"+email);
    }
   
}
