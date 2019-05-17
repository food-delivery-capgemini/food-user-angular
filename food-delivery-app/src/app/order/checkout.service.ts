import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from '../user';
import { Observable } from 'rxjs';

@Injectable()
export class CheckOutService{

    baseUrl="http://localhost:8090/api/users";
    


    constructor(private http: HttpClient) { }
    
    addNewAddress(user: Users): Observable<Users> {
        return this.http.post<Users>(this.baseUrl,user);
    }
}