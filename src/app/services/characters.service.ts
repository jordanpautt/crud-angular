import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { IApiMarvelResponse, IResultCharacter } from '../interface';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  constructor(private http: HttpClient) {}

  readCharacters(): Observable<IResultCharacter[]> {
    const params = {
      apikey: environment.apiKeyPublic,
      hash: environment.apiKeyPrivate
    };
    return this.http
      .get<IApiMarvelResponse>(`${environment.hostname}/characters`, {
        params: { ...params }
      })
      .pipe(map(({ data }) => data.results));
  }
}
