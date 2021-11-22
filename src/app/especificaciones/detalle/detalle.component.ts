import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';
import { GameServicesService } from 'src/app/data/game-services.service';
import { Result } from '../../data/game-interface';
import { Subscription } from 'rxjs';
import { Gamee } from '../../data/interface';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  
  // game:Game;
  game: Gamee;
  gameId:string;
  gameRating = 0;
  routeSub: Subscription;
  gameSub: Subscription;

  constructor( private service: GameServicesService,
                private activatedRoute: ActivatedRoute ) { }

  ngOnInit(): void {
    this.routeSub = this.activatedRoute.params.subscribe((params: Params) => {
      this.gameId = params['id'];
      this.getGameDetails(this.gameId);
    })
  }

  getGameDetails(id: string): void{
    this.gameSub = this.service.getDetail(id)
      .subscribe((gameResp: Gamee ) => {
        this.game = gameResp;

        setTimeout(() => {
          this.gameRating = this.game.metacritic;
        }, 1000);
      })
  }
  

}
