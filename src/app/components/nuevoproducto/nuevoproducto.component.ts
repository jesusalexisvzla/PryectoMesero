import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-nuevoproducto',
  templateUrl: './nuevoproducto.component.html',
  styleUrls: ['./nuevoproducto.component.css']
})
export class NuevoproductoComponent  {

  formulario:  FormGroup

  constructor(private _builder: FormBuilder) 
  { 

    this.formulario = this._builder.group({
      nombre: ['', Validators.required],
      precio: ['', Validators.required],
      tipo: ['', Validators.required],
      descripcion: ['', Validators.required]
    })
  }

  enviar(values){
      console.log(values);
      
  }

}
