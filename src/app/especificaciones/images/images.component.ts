import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { Game, Result, APIResponse } from '../../data/game-interface';
import { GameServicesService } from '../../data/game-services.service';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {

  //image : Result[] = [];
  //image : Result;
  //public games: Array<Result>;
  //games: Game[] = [];
  games: Array<Result>;
  
  constructor( private service: GameServicesService,
              private activatedRoute: ActivatedRoute ) { }

  ngOnInit(): void {
   
  }

}
