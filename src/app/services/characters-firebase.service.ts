import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  DocumentReference
} from '@angular/fire/compat/firestore';
import { map, Observable } from 'rxjs';
import { ICharacterDb, IResultCharacter } from '../interface';

@Injectable({
  providedIn: 'root'
})
export class CharactersFirebaseService {
  private dbPath = '/characters';
  characterRef!: AngularFirestoreCollection<ICharacterDb>;

  constructor(private firestore: AngularFirestore) {
    this.characterRef = firestore.collection(this.dbPath);
  }

  listenCharactersDb(): Observable<ICharacterDb[]> {
    return this.characterRef.snapshotChanges().pipe(
      map((snapShot) => {
        return snapShot.map((doc) => ({
          idDoc: doc.payload.doc.id,
          ...(doc.payload.doc.data() as ICharacterDb)
        }));
      })
    );
  }

  addCharacter(
    character: IResultCharacter
  ): Promise<DocumentReference<ICharacterDb>> {
    const { thumbnail, id, name } = character;
    const imgUrl: string = `${thumbnail.path}.${thumbnail.extension}`;

    return this.characterRef.add({
      id,
      name,
      imgUrl
    });
  }

  deleteCharacter(idDoc: string): Promise<void> {
    return this.characterRef.doc(idDoc).delete();
  }
}
