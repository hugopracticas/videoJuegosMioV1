import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DescriptionComponent } from './description/description.component';
import { DetalleComponent } from './detalle/detalle.component';
import { ImagesComponent } from './images/images.component';
import { VideosComponent } from './videos/videos.component';

const routes: Routes = [
  { path: '', component: DetalleComponent,
    children: [
      { path: '', component: DescriptionComponent },
      { path: 'images', component: ImagesComponent },
      { path: 'videos', component: VideosComponent }
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EspecificacionesRoutingModule { }
