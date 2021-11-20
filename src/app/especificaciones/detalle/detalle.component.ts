import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';
import { GameServicesService } from 'src/app/data/game-services.service';
import { switchMap, tap } from 'rxjs/operators';
import { Game, Result } from '../../data/game-interface';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  
  // game:Game;
  game:Result;
  gameId:string;

  constructor( private service: GameServicesService,
                private activatedRoute: ActivatedRoute ) { }

  ngOnInit(): void {
    // this.activatedRoute.params.subscribe((params: Params )=>{
    //   this.gameId = params['id'];
    //   this.getDetail(this.gameId);
    // })
    this.activatedRoute.params
      .pipe(
        switchMap((param) => this.service.getDetail( param.id )),
        tap( console.log )
      ).subscribe( singleGame => this.game = singleGame )
  }

  getDetail(){

  }
  // getDetail(){
  //   this.activatedRoute.params
  //     .pipe(
  //       switchMap((param)=> this.service.getDetail( param.id )),
  //       tap(console.log)
  //     )
  //     .subscribe( objectGame => this.game = objectGame)
  // }

  // getDetail(id: string): void {
  //   this.service.getDetail(id)
  //   .subscribe((gameResponse: Game)=>{
  //     this.game = gameResponse;

  //   })
  // }

}
