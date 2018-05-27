import { AbstractControl, ValidationErrors } from "@angular/forms";

export class PasswordValidators {

    static passwordIsInvalid(control: AbstractControl): Promise<ValidationErrors>{

        let mockServerValue = 'mockpassword'

        return new Promise((resolve, reject) => {
            setInterval(() => {
                if (control.value != mockServerValue){
                    resolve({passwordIsInvalid: true});
                }else{
                    resolve(null);
                }
            }, 2000)
        })
    }

    static passwordDoesNotMatch(groupControl: AbstractControl): ValidationErrors {
        let newPwd = groupControl.get('new').value;
        let confirmPwd = groupControl.get('confirm').value
        
        if (newPwd != confirmPwd)
            return { passwordDoesNotMatch: true }

        return null;
    }
}