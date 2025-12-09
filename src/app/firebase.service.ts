// src/app/firebase.service.ts (Uppdaterad)
import { Injectable } from '@angular/core';
import { initializeApp, FirebaseApp } from 'firebase/app';
import { 
  getAuth, 
  Auth, 
  GoogleAuthProvider, 
  signInWithPopup, 
  User, 
  onAuthStateChanged, 
  signOut 
} from 'firebase/auth';
import { getFirestore, Firestore } from 'firebase/firestore'; 
import { firebaseConfig } from './core/firebase.config'; 
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private app: FirebaseApp;
  public auth: Auth;
  public firestore: Firestore;
  // Använd en BehaviorSubject för att hålla reda på den inloggade användaren
  private userSource = new BehaviorSubject<User | null>(null);
  user$: Observable<User | null> = this.userSource.asObservable();

  constructor() {
    this.app = initializeApp(firebaseConfig); 
    this.auth = getAuth(this.app);
    this.firestore = getFirestore(this.app);
    
    // Lyssnar på autentiseringsstatusförändringar
    onAuthStateChanged(this.auth, (user) => {
      this.userSource.next(user);
    });
  }

  // Metod för inloggning med Google Pop-up
  async googleSignIn() {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(this.auth, provider);
      // Användaren loggas in, och onAuthStateChanged ovan fångar upp det.
      return result.user;
    } catch (error) {
      console.error("Google Sign-In misslyckades", error);
      throw error;
    }
  }

  // Metod för utloggning
  async signOut() {
    await signOut(this.auth);
  }
}