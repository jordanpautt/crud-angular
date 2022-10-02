import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';
import { NgModule } from '@angular/core';
import { TableComponent } from './table/table.component';
import { ListCharactersComponent } from './list-characters/list-characters.component';

@NgModule({
  declarations: [TableComponent, ModalComponent, ListCharactersComponent],
  imports: [CommonModule],
  exports: [ListCharactersComponent]
})
export class ComponentsModule {}
