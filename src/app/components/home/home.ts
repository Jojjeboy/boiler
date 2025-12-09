import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FirebaseService } from '../../firebase.service'; // Justera sökvägen
import { User } from 'firebase/auth';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="min-h-screen bg-gray-50 p-4 sm:p-8">
      
      <!-- Navigationsbar/Huvud -->
      <header class="bg-white shadow-md rounded-xl p-4 flex justify-between items-center mb-8">
        <h1 class="text-2xl font-bold text-indigo-600">PWA Startpunkt</h1>
        <button 
          (click)="logout()"
          class="px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-red-600 hover:bg-red-700 transition-colors duration-200"
        >
          Logga ut
        </button>
      </header>

      <!-- Huvudinnehåll -->
      <main class="w-full max-w-4xl mx-auto">
        <div class="bg-white p-6 sm:p-8 rounded-xl shadow-lg border border-gray-100">
          <h2 class="text-xl font-semibold text-gray-800 mb-4">Inloggad Användare</h2>
          
          <div *ngIf="user$ | async as user; else loadingOrError" class="space-y-4">
            
            <!-- Användarprofil -->
            <div class="flex items-center space-x-4 p-4 border rounded-lg bg-indigo-50/50">
              <img 
                [src]="user.photoURL || 'https://placehold.co/60x60/f0f9ff/000?text=U'" 
                alt="Profilbild" 
                class="w-12 h-12 rounded-full object-cover shadow"
                onerror="this.onerror=null;this.src='https://placehold.co/60x60/f0f9ff/000?text=U';"
              >
              <div>
                <p class="text-lg font-medium text-gray-900">{{ user.displayName || 'Okänt Namn' }}</p>
                <p class="text-sm text-gray-500">{{ user.email }}</p>
                <!-- Viktigt för att kunna dela data mellan användare -->
                <p class="text-xs text-gray-400 mt-1">UID: {{ user.uid }}</p>
              </div>
            </div>

            <!-- Nästa steg-information -->
            <div class="pt-4 border-t mt-4">
              <h3 class="text-lg font-medium text-gray-700">Nästa Steg i PWA-utvecklingen:</h3>
              <ul class="list-disc list-inside space-y-2 mt-2 text-gray-600">
                <li>Implementera Firebase Firestore/Storage interaktioner här.</li>
                <li>Använd Angular Signals för tillståndshantering.</li>
                <li>Testa PWA-installationen (öppna i Chrome, klicka på plus-ikonen i adressfältet).</li>
                <li>Verifiera Service Worker-cache med DevTools (F12).</li>
              </ul>
            </div>

          </div>

          <ng-template #loadingOrError>
            <p class="text-gray-500">Laddar användarinformation...</p>
          </ng-template>

        </div>
      </main>
    </div>
  `,
  styles: [],
})
export class HomeComponent implements OnInit {
  private firebaseService = inject(FirebaseService);
  private router = inject(Router);
  
  // Exponera Observable för mallen
  user$: Observable<User | null> = this.firebaseService.user$;

  constructor() {}

  ngOnInit() {
    // Valfri initieringslogik, t.ex. ladda initial data
  }

  async logout() {
    try {
      await this.firebaseService.signOut();
      this.router.navigate(['/login']); // Omdirigera till inloggning
    } catch (error) {
      console.error('Utloggning misslyckades', error);
      alert('Kunde inte logga ut.');
    }
  }
}