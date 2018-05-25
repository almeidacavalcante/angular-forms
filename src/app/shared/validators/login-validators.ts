import { AbstractControl, ValidationErrors } from "@angular/forms";

export class LoginValidators {

    

    static cannotContainSpace(control: AbstractControl): ValidationErrors {
        if ((control.value as string).includes(' '))
            return {
                cannotContainSpace: true
            }

        return null;
    }

    static shouldBeUnique(control: AbstractControl): Promise<ValidationErrors> {

        let mockServerStoredValues = [
            "jose.cavalcante",
            "thalles.carvalho",
            "rodrigo.macedo",
            "jose.leandro"
        ]

        return new Promise((resolve, reject) => {

            let randomNumber = Math.random() * 1500
 
            setInterval(()=>{
                //Consulta ao servidor para ver se já existe um username igual
                if(mockServerStoredValues.includes(control.value as string)){
                    resolve({shouldBeUnique: true})
                } else {
                    resolve(null);
                }
            }, randomNumber)
        })
    }
}