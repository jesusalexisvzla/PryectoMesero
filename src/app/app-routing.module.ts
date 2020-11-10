import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuParte1Component } from './components/menu-parte1/menu-parte1.component';
import { MenuParte2Component } from './components/menu-parte2/menu-parte2.component';
import { MenuParte3Component } from './components/menu-parte3/menu-parte3.component';
import { MenuParte4Component } from './components/menu-parte4/menu-parte4.component';

const routes: Routes = [
    { path: 'parte1', component: MenuParte1Component, data: { animation: 'isFarLeft' } },
    { path: 'parte2', component: MenuParte2Component, data: { animation: 'isLeft' } },
    { path: 'parte3', component: MenuParte3Component, data: { animation: 'isRight' } },
    { path: 'parte4', component: MenuParte4Component, data: { animation: 'isFarRight' } }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }