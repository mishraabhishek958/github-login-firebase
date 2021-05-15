import { Injectable } from '@angular/core';
//importing angular firebase auth
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private auth: AngularFireAuth) {}

  signUp(email: string, password: string) {
    return this.auth.createUserWithEmailAndPassword(email, password);
  }

  signIn(email: string, password: string) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  //this method returns the properties of user and this method will return an observable
  getUser() {
    return this.auth.authState;
  }
  
  signOut() {
    return this.auth.signOut();
  }
}
