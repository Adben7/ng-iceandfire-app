import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { ICharacter } from '../../models/character';
import { CharacterService } from '../../services/character.service';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss']
})
export class CharacterDetailComponent implements OnInit {

  character: ICharacter;

  constructor(private characterService: CharacterService, private rout: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    let idBook = this.rout.snapshot.paramMap.get('id');

    this.characterService.getCharacter(idBook)
    .pipe(take(1))
    .subscribe(
      c => this.character = c
    );
  }

  goToDetail(url: string){
    let urlTab = url.split('/');
    let id = urlTab[5];
    let resource = urlTab[4];
    this.router.navigate([`${resource}/${id}`]);
  }

}
