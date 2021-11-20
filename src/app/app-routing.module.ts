import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'viewGames', loadChildren: () =>
    import('./all-games/all-games.module').then( m => m.AllGamesModule )
  },
  {
    path: 'detail/:id', loadChildren: () =>
    import('./especificaciones/especificaciones.module').then( m => m.EspecificacionesModule )
  },
  {
    path: '', component: HomeComponent
  },
  {
    path: '**', component: ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
