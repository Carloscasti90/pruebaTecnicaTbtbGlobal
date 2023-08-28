import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { ListarDevelopersComponent } from './components/listar-developers/listar-developers.component';
import { CrearDeveloperComponent } from './components/crear-developer/crear-developer.component';

const routes: Routes = [
  { path: '', component:InicioComponent },
  { path: 'listar-developers', component:ListarDevelopersComponent},
  { path: 'crear-developer', component:CrearDeveloperComponent},
  {path: 'crear-developer/:id', component:CrearDeveloperComponent},
  { path: 'editar-developer/:id', component:CrearDeveloperComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
