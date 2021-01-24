import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  // ESTE SERVICIO RECIBE DATOS QUE SE LES MANDO DESDE UNA PANTALLA

  public contenido: Array<any>;
  public contenido2: Array<any>;

  //ES PARA GUADAR LO QUE SE ENVIE DEL COMPONENTE 1 EN EL SERVCIO
  setArray(array: any) {
    this.contenido = array;
  }
  // PARA ENVIARLOS A CUALQUIER COMPONENTE 
  getArray() {
    return this.contenido;
  }
 
  enviaTokenCliente(array: any) {
    this.contenido2 = array;
  }
  recibeTokenCliente() {
    return this.contenido2;
  }

}