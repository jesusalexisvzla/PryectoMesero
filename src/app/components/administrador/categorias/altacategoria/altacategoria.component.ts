import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterOutlet, Router } from '@angular/router';

@Component({
  selector: 'app-altacategoria',
  templateUrl: './altacategoria.component.html',
  styleUrls: ['./altacategoria.component.css']
})
export class AltacategoriaComponent {
  constructor(private route:Router, private _builder:FormBuilder){this.formCategoria = this._builder.group({
      nombre: ['', Validators.required],
      tipo: ['', Validators.required]
    })
  }

  goBack(){
    this.route.navigate(['/administrador/meseros']);
  }
  formCategoria: FormGroup

   enviar(values){
    console.log(values);
  }
}
