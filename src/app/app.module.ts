import { BrowserModule } from '@angular/platform-browser';
import { Component, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';

import { AdministradorComponent } from './components/administrador/administrador.component';
import { AdminComponent } from './components/administrador/admin/admin.component';
import { AbcmeserosComponent } from './components/administrador/abcmeseros/abcmeseros.component';
import { ProductosComponent } from './components/administrador/productos/productos.component';
import { CategoriasComponent } from './components/administrador/categorias/categorias.component';


import { AltameseroComponent } from './components/administrador/abcmeseros/altamesero/altamesero.component';
import { AltacategoriaComponent } from './components/administrador/categorias/altacategoria/altacategoria.component';
import { AltaproductoComponent } from './components/administrador/productos/altaproducto/altaproducto.component';

import { MenuComponent } from './components/menu/menu.component';
import { MenuParte1Component } from './components/menu/menu-parte1/menu-parte1.component';
import { MenuParte2Component } from './components/menu/menu-parte2/menu-parte2.component';
import { MenuParte3Component } from './components/menu/menu-parte3/menu-parte3.component';
import { MenuParte4Component } from './components/menu/menu-parte4/menu-parte4.component';

import { MeseroComponent } from './components/mesero/mesero.component';
import { PedidosComponent } from './components/mesero/pedidos/pedidos.component';
import { VentadiaComponent } from './components//mesero/ventadia/ventadia.component';



import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InfoproductoComponent } from './components/infoproducto/infoproducto.component';
import { style } from '@angular/animations';
import { ComprarproductoComponent } from './components/comprarproducto/comprarproducto.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { ProcesoComponent } from './components/cocina/proceso/proceso.component';
import { RecibidosComponent } from './components/cocina/recibidos/recibidos.component';
import { FinalizadosComponent } from './components/cocina/finalizados/finalizados.component';
import { CocinaComponent } from './components/cocina/cocina.component';


const rutas: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'menu',
    component: MenuComponent,
    children: [
      {
        path: '',
        pathMatch: 'prefix',
        redirectTo: 'parte1'
      },
      {
        path: 'parte1',
        component: MenuParte1Component,
        data: { animation: 'isFarLeft' }
      },
      {
        path: 'parte2',
        component: MenuParte2Component,
        data: { animation: 'isLeft' }
      },
      {
        path: 'parte3',
        component: MenuParte3Component,
        data: { animation: 'isRight' }
      },
      {
        path: 'parte4',
        component: MenuParte4Component,
        data: { animation: 'isFarRight' }
      }
    ]
  },
  {
    path: 'mesero',
    component: MeseroComponent,
    children: [
      {
        path: '',
        pathMatch: 'prefix',
        redirectTo: 'pedidos'
      },
      {
        path: 'pedidos',
        component: PedidosComponent,
        data: { animation: 'isLeft' }
      },
      {
        path: 'ventas',
        component: VentadiaComponent,
        data: { animation: 'isRight' }
      }
    ]
  },
  {
    path: 'administrador',
    component: AdministradorComponent,
    children: [
      {
        path: '',
        pathMatch: 'prefix',
        redirectTo: 'admin'
      },
      {
        path: 'admin',
        component: AdminComponent,
        data: { animation: 'isMiddle' }
      },
      {
        path:'meseros',
        component: AbcmeserosComponent,
        data: { animation: 'isRight' }
      },
      {
        path:'productos',
        component: ProductosComponent,
        data: { animation: 'isRight' }
      },
      {
        path:'categorias',
        component: CategoriasComponent,
        data: { animation: 'isRight' }
      },
      {
        path:'altamesero',
        component: AltameseroComponent,
        data: { animation: 'isFarRight' }
      },
      {
        path:'altacategoria',
        component: AltacategoriaComponent,
        data: { animation: 'isFarRight' }
      },
      {
        path:'altaproducto',
        component: AltaproductoComponent,
        data: { animation: 'isFarRight' }
      }       
    ]
  }
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdministradorComponent,
    AdminComponent,
    AbcmeserosComponent,
    AltameseroComponent,
    ProductosComponent,
    AltaproductoComponent,
    CategoriasComponent,
    AltacategoriaComponent,
    MenuComponent,
    MenuParte1Component,
    MenuParte2Component,
    MenuParte3Component,
    MenuParte4Component,
    InfoproductoComponent,
    MeseroComponent,
    VentadiaComponent,
    ComprarproductoComponent,
    CarritoComponent,
    PedidosComponent,
    ProcesoComponent,
    RecibidosComponent,
    FinalizadosComponent,
    CocinaComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(rutas, {
      enableTracing: true,
      paramsInheritanceStrategy: 'always',
      useHash: true
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
