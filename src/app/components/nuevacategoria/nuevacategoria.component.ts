import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Builder } from 'protractor';


@Component({
  selector: 'app-nuevacategoria',
  templateUrl: './nuevacategoria.component.html',
  styleUrls: ['./nuevacategoria.component.css']
})
export class NuevacategoriaComponent {

 

  formCategoria: FormGroup

  constructor(private _builder:FormBuilder) {

    this.formCategoria = this._builder.group({
      nombre: ['', Validators.required],
      tipo: ['', Validators.required]
    })
   }
   enviar(values){
    console.log(values);
    
}
}
