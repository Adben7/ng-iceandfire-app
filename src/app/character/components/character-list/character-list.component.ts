import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { ICharacter } from '../../models/character';
import { CharacterService } from '../../services/character.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit {

 
  characters: ICharacter[];
  filteredCharacters: ICharacter[];
  text = "";


  constructor(private charactersService: CharacterService, private router: Router ) { }

  ngOnInit(): void {
    this.charactersService.getCharacters()
    .pipe(take(1))
    .subscribe(characters => {
       this.characters = characters;
       this.filteredCharacters = this.characters
      } );
  }

  filterList(text: string):void {

    let listFilter = text.toLocaleLowerCase();
    console.log(listFilter);

    this.filteredCharacters = this.characters.filter(character =>
      character.name.toLocaleLowerCase().indexOf(listFilter) !== -1);
  }

  goToCharacterDetail(url: string){
    let urlTab = url.split('/');
    let characterId = urlTab[5];

    this.router.navigate([`character/${characterId}`]);
  }
}
