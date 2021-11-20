import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Game, APIResponse, APIFilters, Result } from './game-interface';

@Injectable({
  providedIn: 'root'
})
export class GameServicesService {
  private apiUrl = 'https://api.rawg.io/api';
  private key = '877ee5b7e1244b89b95ef40fdc69638e';
  //https://api.rawg.io/api/games?key=877ee5b7e1244b89b95ef40fdc69638e

  constructor( private http: HttpClient ) { }

  /**
   * Este metodo es una opcion
   * getVideoGames():Observable<Game>{
    const url = `${ this.apiUrl }/games?key=${ this.key }`;
    return this.http.get<Game>(url);
  } 
   */

  getVideoGames():Observable<APIResponse<Game>>{
    const url = `${ this.apiUrl }/games?key=${ this.key }`;
    return this.http.get<APIResponse<Game>>( url )
  }

  getDetail(id: string){
    //https://api.rawg.io/api/games/3498?key=877ee5b7e1244b89b95ef40fdc69638e
    const url = `${ this.apiUrl }/games/${ id }?key=${ this.key }`;
    return this.http.get<APIResponse<Result>>( url ) 
  }

  
  
}
