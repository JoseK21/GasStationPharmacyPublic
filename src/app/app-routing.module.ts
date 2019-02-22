import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// gestion-inicio-logIn-pageFound-signIn-titulo
import { InicioComponent } from './inicio/inicio.component';
import { PageFoundComponent } from './page-found/page-found.component';


import { CCrearComponent } from './cliente/c-crear/c-crear.component';
import { CActualizarComponent } from './cliente/c-actualizar/c-actualizar.component';
import { CEliminarComponent } from './cliente/c-eliminar/c-eliminar.component';
import {GestionComponent} from './gestion/gestion.component';
import {SignInComponent} from './sign-in/sign-in.component';


const routes: Routes = [
  { path: '', component: InicioComponent },
  // Cliente
  { path: 'cliente/c-crear', component: CCrearComponent },
  { path: 'cliente/c-actualizar', component: CActualizarComponent },
  { path: 'cliente/c-eliminar', component: CEliminarComponent },
// Gestion
  { path: 'gestion', component: GestionComponent },

  // Inicio
  { path: 'inicio', component: InicioComponent },
// Sign-In
  { path: 'sign-in', component: SignInComponent },
  // PageNotFound
  { path: 'pageNotFound', component: PageFoundComponent },
  // Rol

  // Error Page Not Found
  { path: '**', pathMatch: 'full', redirectTo: 'pageNotFound' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
