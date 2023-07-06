import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from 'src/app/interfaces/user.interface';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {
  constructor( private checkStore: UserService, private route:Router){

  }

  User: IUser = {
    Username: '',
    password: '',
    id:0,
    email:""
  }

  submit(e:any,user:IUser){
    this.checkStore.signIn(user);
  }
  
  googleSignIn(e:any){
    this.checkStore.google()
  }
  
  facebookSignIn(e:any){
    this.checkStore.facebook()
  }
}
