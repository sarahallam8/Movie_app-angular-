import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { from } from 'rxjs';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _AuthService:AuthService , private _Router:Router) { }
  
  errorMessage:string = '';
  isLoading = false;
  loginForm : FormGroup = new FormGroup({
  email :new FormControl(null , [Validators.email, Validators.required]),
  password: new FormControl(null , [Validators.pattern('^[A-Z][a-z]{3,8}')])
})
submitLoginForm(loginForm:FormGroup){
 
  this.isLoading = true;
  if(loginForm.valid){
 this._AuthService.signin(loginForm.value).subscribe({
   next:(response)=>{
    if(response.message === 'success'){

      localStorage.setItem("userToken", JSON.stringify(response.token))
      this._AuthService.saveData();
     this.isLoading = false;
     this._Router.navigate(["/home"])
    }else{
      this.errorMessage = response.message;
      this.isLoading = false;
    }
  }
 })
}
}


  ngOnInit(): void {
  }

}
