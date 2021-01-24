import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { exit } from 'process';
import { ServiceService } from 'src/app/servicios/servicio.service';
import { runInThisContext } from 'vm';
import { carrito } from '../../interfaces/prueba';

@Component({
  selector: 'app-comprarproducto',
  templateUrl: './comprarproducto.component.html',
  styleUrls: ['./comprarproducto.component.css']
})
export class ComprarproductoComponent implements OnInit {
  private _datosAServicio: any;

  constructor(private route:Router,private _builder:FormBuilder, private _service: ServiceService) {
    this.formCategoria = this._builder.group({
      instruccion: ['']
      // nombre: ['', Validators.required]
    })
    var form = new FormData();
   }
   formCategoria: FormGroup


  public infoProductoCompmrar: Array<any>;
  public precioSumar : number = 0;
  public cantidad: number = 0;

  ngOnInit(){
    this.infoProductoCompmrar = this._service.getArray();
    console.log(this.infoProductoCompmrar);
  }

    sumar(x:any){
      this.precioSumar = this.precioSumar + parseInt(x);
      this.cantidad = this.cantidad + 1
    }

    resta(xx:any){
      this.cantidad = this.cantidad -1    
      this.precioSumar = this.precioSumar - parseInt(xx);    
    }

    
// export interface carrito{
//   producto: string,
//   cantidad: string,
//   total: string,
// }

  pedidos = [];
  public infoObjeto: Array<any>;

  sendArray(datos) {
    this._service.setArray(datos);
  }

  obtenerLocalStorage(){
    this.pedidos = JSON.parse(localStorage.getItem("idCliente") );
    console.log(this.pedidos);
    
  }
     array = [];

    pruebaLocalStogare(producto:any, cantidad:any, total:any, values: any){
      let contadorCantidad;
      let contadorTotal;
      let localProducts = JSON.parse(localStorage.getItem('idCliente'));
      let flag = true;
      
      if (localProducts) {
          this.pedidos = localProducts;
      }

       for (let x = 0; x < this.pedidos.length; x++) {
            const element = this.pedidos[x];

              if (element.producto == producto) {
                  contadorCantidad = element.cantidad + cantidad;
                  contadorTotal = element.total + total;

                  element.cantidad = contadorCantidad;
                  element.total = contadorTotal;

                  localStorage.setItem('idCliente', JSON.stringify(this.pedidos))
                  flag = false;
              }
      }
      if(flag){
        this.pedidos.push({
          producto: producto,
          cantidad: cantidad,
          instruccion: values,
          total: total,
        });
        
        
        localStorage.setItem('idCliente', JSON.stringify(this.pedidos))
      }
      
  }

  goMenu(){
    this.route.navigate(['/menu']);
  }

x

} 

