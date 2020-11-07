import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Builder } from 'protractor';


@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent   {

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


