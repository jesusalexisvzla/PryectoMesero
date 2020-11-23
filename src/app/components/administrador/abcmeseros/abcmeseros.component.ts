import { Component, OnInit } from '@angular/core';
import { infoesero } from "../../../components/interfaces/prueba";
import { RouterOutlet, Router } from '@angular/router';

@Component({
  selector: 'app-abcmeseros',
  templateUrl: './abcmeseros.component.html',
  styleUrls: ['./abcmeseros.component.css']
})
export class AbcmeserosComponent  {
  constructor(private route:Router){}

  goNuevoMesero(){
    this.route.navigate(['/administrador/altamesero']);
  }
  
  goBack(){
    this.route.navigate(['/administrador/']);
  }
  
  infomeseros: infoesero[] = [
    {
      clave: 'dxfsas12',
      nombre: "ruperto",
      apellido: "peruano",
      contra: 'peruano123',
    },
    {
      clave: 'dxfsada42',
      nombre: "rodrigo",
      apellido: "likeito",
      contra: 'likito123',
    },
    {
      clave: 'dddds2',
      nombre: "albin",
      apellido: "yakiroti",
      contra: 'asdas123',
    },
    {
      clave: 'dsdd',
      nombre: "jeferson",
      apellido: "gutierritos",
      contra: 'asdsad230',
    },
    {
      clave: 'dxsadas8',
      nombre: "loca123",
      apellido: 'reloca',
      contra: 'loquis132',
    },
    
  ]
}
