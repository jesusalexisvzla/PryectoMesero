import { HttpClient } from '@angular/common/http';
import { elementEventFullName } from '@angular/compiler/src/view_compiler/view_compiler';
import { Component, Input } from '@angular/core';
import { ITS_JUST_ANGULAR } from '@angular/core/src/r3_symbols';
import { RouterLink, RouterOutlet, Router} from '@angular/router';
import { Button, element } from 'protractor';
import { ServiceService } from 'src/app/servicios/servicio.service';
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
  constructor(private route:Router, private _http: HttpClient, private _datosAServicio: ServiceService){}

  resultado = []
  public tokenMesero =[]
  public tokenCliente =[]
  public tokenCocina =[]

    ngOnInit(){
      
    }

    enviaTokenCliente(datos) {
      this._datosAServicio.enviaTokenCliente(datos);
    }
  
    getCodeVal(code){
      // this.codigo = code
      console.log(code);

      if (code == "cocina") {
        this.route.navigate(['/cocina']);
      }else if(code == "admin"){
        this.route.navigate(['/administrador']);
      }
      

      let filtroMesero = {
        where: {
          claveMesero: code
        }
      }

      let filtroCliente = {
        where: {
          codigoAcceso: code 
        }
      }
        
        this._http.get('http://localhost:3000/api/Meseros?filter='+ JSON.stringify(filtroMesero)).subscribe((data: any[]) => {
          this.resultado = data;

          if (this.resultado.length) {
            this.route.navigate(['/mesero']);
            this.tokenMesero = this.resultado
            console.log(this.tokenMesero);
            localStorage.setItem("tokenMesero", JSON.stringify(this.tokenMesero));
          } 
        }, (err) => {
          console.log(err);
        });
        
        
        this._http.get('http://localhost:3000/api/CodigoClientes?filter='+ JSON.stringify(filtroCliente)).subscribe((data: any[]) => {
          this.resultado = data;
          
          if (this.resultado.length) {
            this.route.navigate(['/menu']);
            this.tokenCliente = this.resultado
            this.enviaTokenCliente(this.tokenCliente);
            localStorage.setItem("tokenCliente", JSON.stringify(this.tokenCliente));
          } 
      }, (err) => {
          console.log(err);
      });

     }
}

