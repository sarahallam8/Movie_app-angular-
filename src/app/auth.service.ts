
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { Observable , BehaviorSubject} from 'rxjs';
import { Router } from '@angular/router'
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userData = new BehaviorSubject(null);

  constructor(private _HttpClient:HttpClient , private _Router:Router) { 
    if(localStorage.getItem('userToken')){
      this.saveData();
    }
  }

   signup(formData:object):Observable<any>
   {
    return this._HttpClient.post('https://http://localhost:4200/register', formData)
   }
  
   signin(formData:object):Observable<any>
   {
    return this._HttpClient.post('https://http://localhost:4200/signin', formData)
   }
   saveData(){
    this.userData.next(jwtDecode(JSON.stringify(localStorage.getItem("userToken"))))
}

 signOut(){
  localStorage.removeItem('userToken');
  this.userData.next(null);
  this._Router.navigate(['/login']);

 }
}