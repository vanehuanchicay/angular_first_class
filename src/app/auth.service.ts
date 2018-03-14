import { Injectable } from '@angular/core';
import { AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import {Observable} from 'rxjs/Observable';

@Injectable()
export class AuthService {
  user: Observable<firebase.User>;

  constructor(private firebaseAuth:AngularFireAuth) { 
    // Si estoy logueado previamente, obtendré el usuario, si no.. no
    this.user = firebaseAuth.authState;
  }
  signup(email:string, password:string){
    this.firebaseAuth
    .auth
    .createUserWithEmailAndPassword(email, password)
    .then((value) =>{
      console.log("Success!!!", value);
    })
    .catch ((error) =>{
      console.log("TODO SE FUE A LA B" + error);
    })
  }
}
//clase es una plantilla que define algo
// instancia en particular de la clase