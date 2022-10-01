import { Component, OnInit } from '@angular/core';
import { CharactersService } from 'src/app/services/characters.service';
import { ICharacterDb, IResultCharacter } from 'src/app/interface';
import { CharactersFirebaseService } from 'src/app/services/characters-firebase.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
  charactersData: IResultCharacter[] = [];

  charactersDb: ICharacterDb[] = [];
  constructor(
    private charactersService: CharactersService,
    private charactersFirebaseService: CharactersFirebaseService
  ) {}

  ngOnInit(): void {
    this.charactersFirebaseService
      .getAll()
      .subscribe((data) => (this.charactersDb = data));

    this.charactersService.readCharacters().subscribe((data) => {
      this.charactersData = data;
    });
  }

  addcharacter(character: IResultCharacter) {
    console.log(character);

    const { thumbnail, id, name, description } = character;

    const imgUrl: string = `${thumbnail.path}.${thumbnail.extension}`;

    this.charactersFirebaseService.addOne({ id, name, description, imgUrl });
  }
}
