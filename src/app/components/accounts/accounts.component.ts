import { Component, OnInit } from '@angular/core';
import { AccountsService } from 'src/app/shared/services/accounts/accounts.service';
import { map } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {

  public show: boolean = false;
  private currentUser;

  constructor(public accountsService: AccountsService, private firestore: AngularFirestore, private fb: FormBuilder) {
    this.AccountExists();
  }

  addFirstAccount: FormGroup;

  ngOnInit() {
    this.addFirstAccount = this.fb.group({
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      password: ['', [
        Validators.required,
        // Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$')
      ]],
      module1: [true, []],
      module2: [true, []]
    });
  }

  get email() {
    return this.addFirstAccount.get('email');
  }

  get password() {
    return this.addFirstAccount.get('password');
  }

  async submitHandler() {
    const formValue = this.addFirstAccount.value;

    try {
      this.accountsService.AddCompanyAndAccount(formValue);
      console.log(formValue)
    } catch (err) {
      console.error(err)
    }

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
