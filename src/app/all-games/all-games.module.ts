import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllGamesRoutingModule } from './all-games-routing.module';
import { GameListComponent } from './game-list/game-list.component';


@NgModule({
  declarations: [
    GameListComponent
  ],
  imports: [
    CommonModule,
    AllGamesRoutingModule
  ]
})
export class AllGamesModule { }
