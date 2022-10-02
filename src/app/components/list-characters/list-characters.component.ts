import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IResultCharacter } from 'src/app/interface';

@Component({
  selector: 'app-list-characters',
  templateUrl: './list-characters.component.html',
  styleUrls: ['./list-characters.component.scss']
})
export class ListCharactersComponent {
  @Input() charactersData: IResultCharacter[] = [];
  @Output() outCharacter: EventEmitter<IResultCharacter> = new EventEmitter();
  constructor() {}

  emitCharacterData(character: IResultCharacter): void {
    this.outCharacter.emit(character);
  }
}
