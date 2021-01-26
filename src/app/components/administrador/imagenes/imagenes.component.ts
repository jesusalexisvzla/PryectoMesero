import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from 'src/app/servicios/servicio.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-imagenes',
  templateUrl: './imagenes.component.html',
  styleUrls: ['./imagenes.component.css']
})
export class ImagenesComponent implements OnInit {

  constructor(private _router: Router, private _location: Location, private _builder:FormBuilder, private _http: HttpClient, private _service: ServiceService)
  {
      this.formCategoria = this._builder.group({
      id: [''],
      nombre: ['', Validators.required]
    })
    var form = new FormData();
  }
  formCategoria: FormGroup


  ngOnInit(): void {
  }

//   $scope.refresh = function(){
//     $route.reload();
// }

}
