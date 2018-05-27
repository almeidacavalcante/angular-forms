import { Component, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PasswordValidators } from './password-validators';

@Component({
  selector: 'app-password-changer',
  templateUrl: './password-changer.component.html',
  styleUrls: ['./password-changer.component.css']
})
export class PasswordChangerComponent  {

  private form = new FormGroup({
    old: new FormControl('', [
      Validators.required
    ], PasswordValidators.passwordIsInvalid),

    confirmation: new FormGroup({
      new: new FormControl('', [
        Validators.required
        
      ]),
      confirm: new FormControl('', [
        Validators.required
      ])
    }, PasswordValidators.passwordDoesNotMatch)
  })

  get confirmation(){
    return this.form.get('confirmation');
  }

  get old(){
    return this.form.get('old');
  }
  get new(){
    return this.confirmation.get('new');
  }
  get confirm(){
    return this.confirmation.get('confirm');
  }
}
