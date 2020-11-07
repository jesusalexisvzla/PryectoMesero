import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {

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
