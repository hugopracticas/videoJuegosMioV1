import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Game, APIResponse, Result } from './game-interface';
import { Gamee } from './interface';

@Injectable({
  providedIn: 'root'
})
export class GameServicesService {
  private apiUrl = 'https://api.rawg.io/api';
  private key = '877ee5b7e1244b89b95ef40fdc69638e';
  //https://api.rawg.io/api/games?key=877ee5b7e1244b89b95ef40fdc69638e

  constructor( private http: HttpClient ) { }

  
  getVideoGames():Observable<APIResponse<Game>>{
    const url = `${ this.apiUrl }/games?key=${ this.key }`;
    return this.http.get<APIResponse<Game>>( url )
  }

  getDetail(id: string): Observable<Gamee>{
    //https://api.rawg.io/api/games/3498?key=877ee5b7e1244b89b95ef40fdc69638e
    //https://api.rawg.io/api/games/802/screenshots
    const gameInfoRequest = this.http.get(`${this.apiUrl}/games/${id}?key=${this.key}`);

    const gameScreenshotsRequest = this.http.get(`${this.apiUrl}/games/${id}/screenshots?key=${this.key}`);

    const gameTrailersRequest = this.http.get(`${this.apiUrl}/games/${id}/movies?key=${this.key}`);

    

    return forkJoin({
      gameInfoRequest,
      gameScreenshotsRequest,
      gameTrailersRequest
    }).pipe(
      map((resp: any) =>{
        return {
          ...resp['gameInfoRequest'],
          screenshots: resp['gameScreenshotsRequest']?.results,
          trailer: resp['gameTrailersRequest']?.results
        };
      })
    );
  }

  getImage( id: string ){
    const url = `${ this.apiUrl }/games/${ id }/screenshots?key=${ this.key }`;
    return this.http.get<APIResponse<Result>>( url )
  }

  
  
}
