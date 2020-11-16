import { elementEventFullName } from '@angular/compiler/src/view_compiler/view_compiler';
import { Component, Input } from '@angular/core';
import { ITS_JUST_ANGULAR } from '@angular/core/src/r3_symbols';
import { RouterLink, RouterOutlet, Router} from '@angular/router';
import { Button, element } from 'protractor';
//import { slider, transformer, fader, stepper } from '../menu/route-animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [
    // fader,
    //slider,
    // transformer,
    //stepper
  ]
})
export class LoginComponent {
  codigo = ""
  constructor(private route:Router){}

  getCodeVal(code){
    this.codigo = code
    if (this.codigo == "cliente") {
      this.route.navigate(['/menu']);
    }if (this.codigo == "mesero") {
      this.route.navigate(['/mesero']);
    }
  }
}

