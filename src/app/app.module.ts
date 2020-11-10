import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { MenuParte1Component } from './components/menu-parte1/menu-parte1.component';
import { MenuParte2Component } from './components/menu-parte2/menu-parte2.component';
import { MenuParte3Component } from './components/menu-parte3/menu-parte3.component';
import { MenuParte4Component } from './components/menu-parte4/menu-parte4.component';
import { MenuComponent } from './menu.component';
import { ProductosComponent } from './components/productos/productos.component';
import { CategoriasComponent } from './components/categorias/categorias.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InfoproductoComponent } from './components/infoproducto/infoproducto.component';
import { MeseroComponent } from './components/mesero/mesero.component';
import { AdminComponent } from './components/admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuParte1Component,
    MenuParte2Component,
    MenuParte3Component,
    MenuParte4Component,
    MenuComponent,
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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
