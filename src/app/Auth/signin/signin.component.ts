import { Component } from '@angular/core';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {

  constructor(private auth: Auth){}

  login(value: any){
    signInWithEmailAndPassword(this.auth, value.email, value.password)
    .then((response) => {
     alert("Wow You are Logged in successfully")
    })
    .catch((err) => {
     alert("Ooops an error occured" + err)
    })
   }
}
