import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { GameServicesService } from 'src/app/data/game-services.service';
import { Gamee } from 'src/app/data/interface';
import { Game, Result } from '../../data/game-interface';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {

  @Input() game: Gamee;
  


  constructor( private service: GameServicesService, 
                private activatedRoute: ActivatedRoute ) { }

  ngOnInit(): void {
    
  }

}
