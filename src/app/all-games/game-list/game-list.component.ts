import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GameServicesService } from 'src/app/data/game-services.service';
import { APIResponse, Game, APIFilters } from '../../data/game-interface';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {

  //games: Game;
  public games: Array<Game>;
  error: boolean = false;

  constructor( private services: GameServicesService,
                private router: Router ) { }

  ngOnInit(): void {
    this.getGames();
  }

  /**
   * Opcion de hacerlo 1
   * getGames(){
    this.error = false;

    this.services.getVideoGames()
      .subscribe( game => {
        this.games = game;
        console.log( game );
      }, (err)=> {
        console.log( 'Error' );
        console.info( err );
        this.error = true;
        // this.games = [];
      })
  }*/

  getGames(){
    this.error = false;

    this.services.getVideoGames()
      .subscribe(( gameList:APIResponse<Game>) => {
        this.games = gameList.results;
        console.log(this.games);
      },(err) => {
        console.error( err );
      })
  }

  openDetail(id: string): void{
    this.router.navigate(['detail',id]);
  }


}
