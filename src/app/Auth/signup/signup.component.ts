import { Component } from '@angular/core';
import { IUser } from 'src/app/interfaces/user.interface';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss','../signin/signin.component.Scss']
})
export class SignupComponent {
  constructor(private users: UserService) { }

  User: IUser= {
    Username: '',
    email:'',
    password: '',
  }

  Submit(user:IUser){
    this.users.signUp(user);
  }

}
