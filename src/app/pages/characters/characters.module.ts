import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CharactersComponent } from './characters.component';

@NgModule({
  declarations: [
    CharactersComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{path:'', component:CharactersComponent}])
  ]
})
export class CharactersModule { }
