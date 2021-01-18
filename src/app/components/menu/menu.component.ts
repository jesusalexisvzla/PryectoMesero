import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slider, transformer, fader, stepper } from '../../route-animations';
import { carrito } from '../interfaces/prueba';
import { ServiceService } from 'src/app/servicios/servicio.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  animations: [
    // fader,
     slider,
    // transformer,
    //stepper
  ]
})
export class MenuComponent implements OnInit {
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
  constructor(private _datosAServicio: ServiceService) { }

  public contenidoCarrito = [];

  pedidos: carrito[] = [

    ]
  ngOnInit(){

    
  }








}




