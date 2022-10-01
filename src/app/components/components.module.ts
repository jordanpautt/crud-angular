import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';
import { NgModule } from '@angular/core';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [TableComponent, ModalComponent],
  imports: [CommonModule]
})
export class ComponentsModule {}
