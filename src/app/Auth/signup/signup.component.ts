import { Component } from '@angular/core';
import { Auth, createUserWithEmailAndPassword } from '@angular/fire/auth';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  constructor( private auth: Auth){}

  register(value: any){
   createUserWithEmailAndPassword(this.auth, value.email, value.password)
   .then((response) => {
    alert("Account Created Successfully")
   })
   .catch((err) => {
    alert("Ooops an error occured" + err)
   })
  }
}
