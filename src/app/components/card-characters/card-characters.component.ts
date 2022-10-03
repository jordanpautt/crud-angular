import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IbuttonEmit, IbuttonOption, ICharacterDb } from 'src/app/interface';

@Component({
  selector: 'app-card-characters',
  templateUrl: './card-characters.component.html',
  styleUrls: ['./card-characters.component.scss']
})
export class CardCharactersComponent implements OnInit {
  @Input() charactersData: ICharacterDb[] = [];
  @Output() outDeleteCharacter: EventEmitter<IbuttonEmit> = new EventEmitter();

  buttonsOption: IbuttonOption[] = [];
  constructor() {}

  ngOnInit(): void {
    this.buttonsOption = [
      {
        type: 'edit',
        icon: 'fa fa-pencil',
        color: '#000'
      },
      {
        type: 'delete',
        icon: 'fa fa-trash-o',
        color: '#d30026'
      }
    ];
  }

  actionButton(character: ICharacterDb, type: 'edit' | 'delete') {
    this.outDeleteCharacter.emit({ data: character, type });
  }
}
