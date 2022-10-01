import { Component, OnInit } from '@angular/core';
import { CharactersService } from 'src/app/services/characters.service';
import { IResultCharacter } from 'src/app/interface';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
  charactersData: IResultCharacter[] = [];
  constructor(private charactersService: CharactersService) {}

  ngOnInit(): void {
    this.charactersService.readCharacters().subscribe((data) => {
      this.charactersData = data;
      console.log(data);
    });
  }
}
