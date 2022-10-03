import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IbuttonEmit, IbuttonOption, ICharacterDb } from 'src/app/interface';
import { ToastAlertService } from 'src/app/services/toast-alert.service';
@Component({
  selector: 'app-card-characters',
  templateUrl: './card-characters.component.html',
  styleUrls: ['./card-characters.component.scss']
})
export class CardCharactersComponent implements OnInit {
  @Input() charactersData: ICharacterDb[] = [];
  @Output() outActionCharacter: EventEmitter<IbuttonEmit> = new EventEmitter();

  buttonsOption: IbuttonOption[] = [];

  constructor(private toast: ToastAlertService) {}

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

  async actionButton(character: ICharacterDb, type: 'edit' | 'delete') {
    if (type === 'edit') {
      const name = await this.toast.openModalEdit(character.name);
      this.outActionCharacter.emit({
        data: { ...character, name },
        type
      });
    } else {
      this.outActionCharacter.emit({ data: character, type });
    }
  }
}
