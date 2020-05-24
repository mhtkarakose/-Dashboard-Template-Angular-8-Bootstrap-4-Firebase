import { Component, OnInit } from '@angular/core';
import { AccountsService } from 'src/app/shared/services/accounts/accounts.service';
import { map } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {

  public show: boolean = false;
  private currentUser;
 
  constructor(public accountsService: AccountsService, private firestore: AngularFirestore) {
    this.AccountExists();
  }

  ngOnInit() {
  }

  AccountExists() {
    this.currentUser = JSON.parse(localStorage.getItem('user'));
    this.firestore.firestore.doc(`companies/${this.currentUser.uid}`).get()
      .then(docSnapshot => {
        if (docSnapshot.exists) {
          console.log("Match found.");
          return this.show = true;
        } else {
          console.log("Not found.");
          return this.show = false;
        }
      });
  }





}
