import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router'
import { ValidacionesService } from 'src/app/services/validaciones.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  forma:FormGroup

  constructor(private fb:FormBuilder, private router:Router, private validaciones:ValidacionesService) {
    this.crearFormulario()
   }

  ngOnInit(): void {
  }
  crearFormulario(){
    this.forma = this.fb.group({
      Email:['dilan@gmail.com', [Validators.required,Validators.minLength(5),Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]],
      Password: ['Linkgjgj.',[Validators.required, Validators.minLength(8),Validators.pattern("[a-zA-Z0-9]+")]]
      // Password: ['AAAddd2542',[Validators.required, Validators.pattern("^(?=\w\d)(?=\w[A-Z])(?=\w*[a-z])\S{8,16}$")]]
    })
  }
  validCampo(campo:string){
    return this.validaciones.validCampo(campo, this.forma.controls)
  }
  entrar(){
    if (this.forma.invalid) {
      console.log(this.forma);
      return
    }
    console.log(this.forma);
    this.router.navigateByUrl('perfil')
  }

}
