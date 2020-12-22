import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class ValidacionesService {

  constructor() { }

  validacionPassword(Password: string, PasswordC: string) {
    return (formGroup: FormGroup) => {
      const pass1Controls = formGroup.controls[Password];
      const pass2Controls = formGroup.controls[PasswordC];
      if (pass1Controls.value === pass2Controls.value) {
        return pass2Controls.setErrors(null)
      } else {
        return pass2Controls.setErrors({ noEsIgual: true })
      }
    }
  }

  validCampo(campo: string, forma: any) {
    if (forma[campo].invalid && forma[campo].touched) {
      return forma[campo].invalid
    }
  }
}
