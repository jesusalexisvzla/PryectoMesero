import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterOutlet, Router } from '@angular/router';
import { ServiceService } from 'src/app/servicios/servicio.service';

@Component({
  selector: 'app-altamesero',
  templateUrl: './altamesero.component.html',
  styleUrls: ['./altamesero.component.css']
})
export class AltameseroComponent implements OnInit{
  constructor(private route:Router,private _builder:FormBuilder, private _http: HttpClient, private _service: ServiceService){
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
    this.formMesero.patchValue(this.contenidoMesero);
    
  }
    
  // rellenarFormulario(infoMesero: any) {
    // this.formMesero.get('id').patchValue(infoMesero.id);
    // this.formMesero.get('claveMesero').patchValue(infoMesero.claveMesero);
    // this.formMesero.get('nombreMesero').patchValue(infoMesero.nombreMesero);
    // this.formMesero.get('apellidoMesero').patchValue(infoMesero.apellidoMesero);
    // this.formMesero.get('contraMesero').patchValue(infoMesero.contraMesero);
//  }
 

  enviarMesero(values){
     this._http.put('http://localhost:3000/api/Meseros', values)
     .subscribe()     
    }

  goBack(){
    this.route.navigate(['/administrador/meseros']);
  }

}
