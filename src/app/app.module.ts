import { BrowserModule } from '@angular/platform-browser';
import { Component, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';

import { MenuComponent } from './components/menu/menu.component';
import { MenuParte1Component } from './components/menu/menu-parte1/menu-parte1.component';
import { MenuParte2Component } from './components/menu/menu-parte2/menu-parte2.component';
import { MenuParte3Component } from './components/menu/menu-parte3/menu-parte3.component';
import { MenuParte4Component } from './components/menu/menu-parte4/menu-parte4.component';

import { MeseroComponent } from './components/mesero/mesero.component';

import { ProductosComponent } from './components/productos/productos.component';

import { CategoriasComponent } from './components/categorias/categorias.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InfoproductoComponent } from './components/infoproducto/infoproducto.component';
import { AdminComponent } from './components/admin/admin.component';
import { style } from '@angular/animations';

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
    component: MeseroComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    MenuParte1Component,
    MenuParte2Component,
    MenuParte3Component,
    MenuParte4Component,
    ProductosComponent,
    CategoriasComponent,
    InfoproductoComponent,
    MeseroComponent,
    AdminComponent
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
