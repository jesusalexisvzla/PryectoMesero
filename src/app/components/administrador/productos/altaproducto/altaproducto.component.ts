import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterOutlet, Router } from '@angular/router';

@Component({
  selector: 'app-altaproducto',
  templateUrl: './altaproducto.component.html',
  styleUrls: ['./altaproducto.component.css']
})
export class AltaproductoComponent {
  constructor(private route:Router, private _builder: FormBuilder){this.formulario = this._builder.group({
      nombre: ['', Validators.required],
      precio: ['', Validators.required],
      tipo: ['', Validators.required],
      descripcion: ['', Validators.required]
    })}

  goBack(){
    this.route.navigate(['/administrador/productos']);
  }

  formulario:  FormGroup

  enviar(values){
      console.log(values);
      
  }

}
