import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EspecificacionesRoutingModule } from './especificaciones-routing.module';
import { DetalleComponent } from './detalle/detalle.component';
import { DescriptionComponent } from './description/description.component';
import { ImagesComponent } from './images/images.component';
import { VideosComponent } from './videos/videos.component';


@NgModule({
  declarations: [
    DetalleComponent,
    DescriptionComponent,
    ImagesComponent,
    VideosComponent
  ],
  imports: [
    CommonModule,
    EspecificacionesRoutingModule
  ]
})
export class EspecificacionesModule { }
