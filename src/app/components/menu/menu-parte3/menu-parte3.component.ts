import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { comida } from "../../interfaces/prueba";

@Component({
  selector: 'app-menu-parte3',
  templateUrl: './menu-parte3.component.html',
  styleUrls: ['./menu-parte3.component.css']
})
export class MenuParte3Component{

  constructor(private route:Router, private _http: HttpClient) { }


  productoDulces = [];

  ngOnInit() {
    
    let filter = {
      where: {
        categoriaId: "5ff9274dbb63f445285f224d",
        estatus: 1
      }
    }

    this._http.get('http://localhost:3000/api/Productos?filter='+ JSON.stringify(filter)).subscribe((data: any[]) => {
        this.productoDulces = data;
        console.log(this.productoDulces);
    }, (err) => {
        console.log(err);
    });

    
  }

}
