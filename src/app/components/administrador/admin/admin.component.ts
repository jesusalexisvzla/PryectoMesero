import { Component, OnInit } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  constructor(private route:Router){}

  goMeseros(){
    this.route.navigate(['/administrador/meseros']);
  }

  goProductos(){
    this.route.navigate(['/administrador/productos']);
  
  }
  goCategorias(){
    this.route.navigate(['/administrador/categorias']);
  }

  goReporte(){
    this.route.navigate(['/administrador/meseros']);
  }

  goNuevoMesero(){
    this.route.navigate(['/administrador/nuevomesero']);
  }

  goBack(){
    this.route.navigate(['']);
  }
}
