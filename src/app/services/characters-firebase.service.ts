import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection
} from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { ICharacterDb } from '../interface';

@Injectable({
  providedIn: 'root'
})
export class CharactersFirebaseService {
  private dbPath = '/characters';

  characterRef!: AngularFirestoreCollection<any>;
  constructor(private firestore: AngularFirestore) {
    this.characterRef = firestore.collection(this.dbPath);
  }

  getAll(): Observable<ICharacterDb[]> {
    return this.characterRef.valueChanges();
  }

  addOne(character: ICharacterDb) {
    return this.characterRef.add({ ...character });
  }
}
