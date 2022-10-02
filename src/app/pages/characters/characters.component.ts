import { Component, OnInit } from '@angular/core';
import { CharactersApiService } from 'src/app/services/characters.service';
import { ICharacterDb, IResultCharacter } from 'src/app/interface';
import { CharactersFirebaseService } from 'src/app/services/characters-firebase.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
  charactersDataApi$!: Observable<IResultCharacter[]>;
  charactersFavorite: ICharacterDb[] = [];

  constructor(
    private charactersApiService: CharactersApiService,
    private charactersDbService: CharactersFirebaseService
  ) {}

  ngOnInit(): void {
    this.charactersDbService.listenCharactersDb().subscribe((data) => {
      this.charactersFavorite = data;
    });

    this.charactersDataApi$ = this.charactersApiService.readCharacters();
  }

  addcharacter(character: IResultCharacter) {
    const existsCharacterDb = this.charactersFavorite.some(
      (value) => value.id === character.id
    );

    if (existsCharacterDb) {
      console.log('ya esta agregado en la lista');
      return;
    }

    this.charactersDbService.addCharacter(character).then((data) => {
      console.log('add succefull', data);
    });
  }

  deleteCharacter(idDoc: string) {
    this.charactersDbService
      .deleteCharacter(idDoc)
      .then(() => console.log('deleted succefull'))
      .catch((err) => console.log(err));
  }
}
