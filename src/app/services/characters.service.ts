import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { IApiMarvelResponse, IResultCharacter } from '../interface';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

type ParasmQuery = { [key: string]: string | number };
@Injectable({
  providedIn: 'root'
})
export class CharactersApiService {
  constructor(private http: HttpClient) {}

  readCharacters(): Observable<IResultCharacter[]> {
    const params: ParasmQuery = {
      apikey: environment.apiKeyPublic,
      hash: environment.apiKeyPrivate,
      limit: 100
    };
    return this.http
      .get<IApiMarvelResponse>(`${environment.hostname}/characters`, {
        params: { ...params }
      })
      .pipe(map(({ data }) => data.results));
  }
}
