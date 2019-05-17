import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from '../user';
import { Observable } from 'rxjs';
import { Orders, Feedback } from './profile-order';
import { userInfo } from 'os';

@Injectable()
export class CustomerService{
    user:Users;

    baseUrl="http://localhost:8090/api/users";
    baseUrl2="http://localhost:8091";
    constructor(private http:HttpClient) { }
    
    findAddressByEmail(email:String): Observable<Users> {
        this.user=JSON.parse(sessionStorage.getItem('user'));
        return this.http.get<Users>(this.baseUrl + "/"+this.user.email);
    }

    findOrderDetailsByEmail(email:String):Observable<Orders[]>{
        return this.http.get<Orders[]>(this.baseUrl2 + "/profile/aks@gmail.com");

    }
    
    findDishById(orderId:number): Observable<Orders> {

        return this.http.get<Orders>(this.baseUrl2 + "/" + orderId);
        
         }
         addFeedback(feedback:Feedback):Observable<Feedback>{

            return this.http.post<Feedback>(this.baseUrl2+"/feedback",feedback); 
            
             }
}