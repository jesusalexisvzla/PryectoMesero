import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slider, transformer, fader, stepper } from '../../route-animations';

@Component({
  selector: 'app-mesero',
  templateUrl: './mesero.component.html',
  styleUrls: ['./mesero.component.css'],
  animations: [
    // fader,
     slider,
    // transformer,
    //stepper
  ]
})
export class MeseroComponent implements OnInit {
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
  
  ngOnInit(){
    this.obtenerLocalStorage()
  }

  nombre ="";
  infoMesero=[];
  obtenerLocalStorage(){
    let tokenMesero = JSON.parse(localStorage.getItem('tokenMesero'));
    if (tokenMesero) {
      this.infoMesero = tokenMesero;
    }

    this.nombre = this.infoMesero[0].nombreMesero;
  }

}
