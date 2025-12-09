import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from '../../firebase.service'; // Justera sökvägen

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  template: `
    <div class="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div class="w-full max-w-md p-8 space-y-6 bg-white rounded-xl shadow-2xl border border-gray-200">
        
        <h1 class="text-3xl font-extrabold text-gray-900 text-center">
          Välkommen till din PWA Boilerplate
        </h1>
        <p class="text-center text-gray-500">
          Logga in med Google för att fortsätta.
        </p>

        <button 
          (click)="loginWithGoogle()"
          [disabled]="isLoading"
          class="w-full flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-lg shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <!-- Enkel SVG för Google-ikon -->
          <svg class="w-5 h-5 mr-3" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M44.5 20H42V19H24V29H35.6432C34.5888 33.1512 30.0195 36 24 36C17.4087 36 12 30.5913 12 24C12 17.4087 17.4087 12 24 12C27.3501 12 30.347 13.386 32.5539 15.6983L39.8665 8.38576C36.4276 5.1654 30.4074 3 24 3C12.9543 3 3 12.9543 3 24C3 35.0457 12.9543 45 24 45C34.9392 45 44.2081 37.7788 44.5 20Z" fill="#FFC107"/>
            <path d="M6 24C6 27.595 7.1514 30.849 9.0883 33.565L16.516 27.0858C15.3907 26.0357 14.5029 25.043 14.5029 24C14.5029 22.957 15.3907 21.9643 16.516 20.9142L9.0883 14.435C7.1514 17.151 6 20.405 6 24Z" fill="#FF3D00"/>
            <path d="M24 45C29.621 45 34.6133 43.1413 38.4404 40.2366L31.6517 34.735C29.2828 36.883 26.311 38 24 38C18.6 38 13.929 34.7335 12.0883 30.1799L4.41733 37.6698C8.55291 42.062 15.7196 45 24 45Z" fill="#4CAF50"/>
            <path d="M44.5 20H24V19H44.5C44.5 19.3333 44.5 19.6667 44.5 20Z" fill="#1976D2"/>
          </svg>
          @if(isLoading){
            <span>Loggar in...</span>
          }
          @else{
            <span>Logga in med Google</span>
          }
        </button>

      </div>
    </div>
  `,
  styles: [],
})
export class LoginComponent {
  // Injecta service och router
  private firebaseService = inject(FirebaseService);
  private router = inject(Router);
  
  isLoading = false;

  async loginWithGoogle() {
    this.isLoading = true;
    try {
      await this.firebaseService.googleSignIn();
      // Om inloggningen lyckas, omdirigerar routern automatiskt till /home
      this.router.navigate(['/home']);
    } catch (error) {
      console.error('Inloggningsfel:', error);
      // Hantera felmeddelanden här (t.ex. visa ett felmeddelande på skärmen)
      alert('Kunde inte logga in. Kontrollera konsolen för mer info.');
    } finally {
      this.isLoading = false;
    }
  }
}