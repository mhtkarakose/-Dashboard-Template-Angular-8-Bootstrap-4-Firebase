import { Injectable } from '@angular/core';
import { AuthService } from '../user/auth.service';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  private dbPath = '/companies';
 
  ref: AngularFirestoreCollection<any> = null;

  user;


  constructor(public authService: AuthService, private firestore: AngularFirestore) {
    this.ref = firestore.collection(this.dbPath);
    this.user = JSON.parse(localStorage.getItem('user'));
  }


  AddCompanyAndAccount(email, password, val) {
    console.log(email, password, val);
  }

  AccountExists(): boolean {

    setTimeout(() => {
      this.firestore.firestore.doc(`companies/${this.user.uid}`).get()
        .then(docSnapshot => {
          if (docSnapshot.exists) {
            console.log("Match found.");
            return true;
          } else {
            console.log("Not found.");
            return false;
          }
        });
    }, 0);

    return false;


    // const user = JSON.parse(localStorage.getItem('user'));
    // this.countries = this.firestore.doc(`companies/${user.uid}`).valueChanges();
    // this.countries.subscribe(countries => {
    //   this.allCountries = countries;
    //   console.log(this.allCountries);
    // })
    // console.log(this.countries)

    // const user = JSON.parse(localStorage.getItem('user'));
    // console.log(this.firestore.doc(`companies/${user.uid}`)..snapshotChanges()
    // .pipe(
    //     // We want to map the document into a Typed JS Object
    //     map(doc => {
    //         // Only if the entity exists should we build an object out of it
    //         if (doc.payload.exists) {
    //             const data = doc.payload.data() as T;
    //             const payloadId = doc.payload.id;
    //             return { id: payloadId, ...data };
    //         }
    //     })
    // ))

    // const user = JSON.parse(localStorage.getItem('user'));
    // item: new AngularFirestoreDocument<any>();


    // Observable<any> item  = this.firestore
    //   .doc(`companies/${user.uid}`).snapshotChanges();
    //   console.log(ac);
  }


}
