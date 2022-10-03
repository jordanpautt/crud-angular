import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ListCharactersComponent } from './list-characters/list-characters.component';
import { CardCharactersComponent } from './card-characters/card-characters.component';

@NgModule({
  declarations: [ListCharactersComponent, CardCharactersComponent],
  imports: [CommonModule],
  exports: [ListCharactersComponent, CardCharactersComponent]
})
export class ComponentsModule {}
