import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginValidators } from '../shared/validators/login-validators';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {

  private form = new FormGroup({
    username: new FormControl('', [

      Validators.required,
      Validators.minLength(3),
      LoginValidators.cannotContainSpace

    ], [LoginValidators.shouldBeUnique]),

    password: new FormControl('', [

      Validators.required,
      Validators.minLength(8),
      LoginValidators.cannotContainSpace

    ])
  })

  public login(){

    //Recebe resposta do servidor
    let isValid = false;

    if(!isValid){
      this.form.setErrors({
        invalidLogin: true
      })
    }
  }

  get username() {
    return this.form.get('username');
  }

  get password() {
    return this.form.get('password');
  }
}