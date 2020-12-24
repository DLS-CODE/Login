import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http'




@Injectable({
  providedIn: 'root'
})
export class ValidacionesService {

  constructor(private http: HttpClient) { }

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

  registrar() {

    let body = {
      name: "Hugofsdf",
      lastName: "Carvajalinosfsfsd",
      date: "1993-07-26",
      email: "Link_261812@hotmail.com",
      password: "Link2618",
      tipo: "ADMIN"
    }
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');

    

    this.http.post('/api/registrar/', body,{headers: headers})



  }
}
