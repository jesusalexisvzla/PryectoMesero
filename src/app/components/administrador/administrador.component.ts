import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slider, transformer, fader, stepper } from '../../route-animations';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css'],
  animations: [
    // fader,
     slider,
    // transformer,
    //stepper
  ]
})
export class AdministradorComponent {
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
