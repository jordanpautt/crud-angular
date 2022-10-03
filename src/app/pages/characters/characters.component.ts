import { Component, OnInit } from '@angular/core';
import { CharactersApiService } from 'src/app/services/characters.service';
import { IbuttonEmit, ICharacterDb, IResultCharacter } from 'src/app/interface';
import { CharactersFirebaseService } from 'src/app/services/characters-firebase.service';
import { Observable } from 'rxjs';
import { ToastAlertService } from 'src/app/services/toast-alert.service';

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
    private charactersDbService: CharactersFirebaseService,
    private toastService: ToastAlertService
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
      this.toastService.toastInfo(
        'El personaje ya esta agregado en favoritos!'
      );
      return;
    }

    this.charactersDbService
      .addCharacter(character)
      .then(() =>
        this.toastService.toastSuccess('¡Personaje agregado con exito!')
      )
      .catch((err) => this.toastService.toastError(`${err}`));
  }

  actionsButton(dataAction: IbuttonEmit) {
    const { data, type } = dataAction;

    if (type === 'edit') {
      this.charactersDbService
        .updateCharacter(data.idDoc || '', data.name)
        .then(() =>
          this.toastService.toastSuccess('¡Personaje Modificado con exito!')
        )
        .catch((err) => this.toastService.toastError(`${err}`));
    } else {
      this.charactersDbService
        .deleteCharacter(data.idDoc || '')
        .then(() =>
          this.toastService.toastSuccess('¡Personaje eliminado con exito!')
        )
        .catch((err) => this.toastService.toastError(`${err}`));
    }
  }
}
