import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterOutlet, Router } from '@angular/router';
import { ServiceService } from 'src/app/servicios/servicio.service';
import { ToastrModule, ToastrService } from 'ngx-toastr'

@Component({
  selector: 'app-altamesero',
  templateUrl: './altamesero.component.html',
  styleUrls: ['./altamesero.component.css']
})
export class AltameseroComponent implements OnInit{
  constructor(private route:Router,private _builder:FormBuilder, private _http: HttpClient, private _service: ServiceService, private toastr: ToastrService){
    this.formMesero = this._builder.group({
      id  : ['', Validators.required],
      claveMesero: ['', Validators.required],
      nombreMesero: ['', Validators.required],
      apellidoMesero: ['', Validators.required],
      contraMesero: ['', Validators.required]
    })
    var form = new FormData();
  }
  formMesero: FormGroup

  public contenidoMesero: Array<any>;

  ngOnInit(){
    this.contenidoMesero = this._service.getArray();
    console.log(this.contenidoMesero);
    this.rellenarFormulario(this.contenidoMesero)
    
  }
    
  rellenarFormulario(infoMesero: any) {
    this.formMesero.get('id').patchValue(infoMesero.id);
    this.formMesero.get('claveMesero').patchValue(infoMesero.claveMesero);
    this.formMesero.get('nombreMesero').patchValue(infoMesero.nombreMesero);
    this.formMesero.get('apellidoMesero').patchValue(infoMesero.apellidoMesero);
    this.formMesero.get('contraMesero').patchValue(infoMesero.contraMesero);
 }
 
  enviarMesero(values){
      let aler = ""
      if (values.id != undefined) {
        aler = "Mesero actualizado"
      }else{
        aler = "Nuevo mesero agregado con exito"
      }

      if(values.claveMesero == undefined){
        alert("Falta el clave de mesero")
      }else if (values.nombreMesero == undefined) {
        alert("Falta el nombre del mesero")
      }else if (values.apellidoMesero == undefined) {
        alert("Falta el apellido del mesero")
      }else if (values.contraMesero == undefined) {
        alert("Falta la contraseña del mesero")
      }else if (values.contraMesero == undefined) {
        alert("Falta la contraseña del mesero")
      }else{
        // this._http.put('http://localhost:3000/api/Productos', values)
        // .subscribe() 
        // alert(aler)
        // this.route.navigate(['/administrador/productos']); 
        this.toastr.success(aler, "Notificación");
      }

  }

  goBack(){
    this.route.navigate(['/administrador/meseros']);
  }

}
