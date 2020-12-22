import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router'
import {ValidacionesService} from 'src/app/services/validaciones.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  forma:FormGroup

  constructor(private fb:FormBuilder,private validaciones:ValidacionesService, private router: Router ) { 
    this.crearFormulario()
  }

  ngOnInit(): void {
  }

  crearFormulario(){
    this.forma = this.fb.group({
      Name:['', [Validators.required,Validators.minLength(3),Validators.pattern("[a-zA-Z]+")]],
      LastName:['', [Validators.required,Validators.minLength(3),Validators.pattern("[a-zA-Z]+")]],
      Date:['', [Validators.required]],
      Email:['', [Validators.required,Validators.minLength(5),Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]],
      Password: ['',[Validators.required, Validators.minLength(8),Validators.pattern("[a-zA-Z0-9]+")]],
      PasswordC: ['',[Validators.required, Validators.minLength(8),Validators.pattern("[a-zA-Z0-9]+")]],
    },{
      validators: this.validaciones.validacionPassword('Password','PasswordC')
    }
    )
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
