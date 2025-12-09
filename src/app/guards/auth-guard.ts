// src/app/guards/auth.guard.ts

import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { FirebaseService } from '../firebase.service'; // Justera sökväg

export const authGuard: CanActivateFn = (route, state) => {
  const firebaseService = inject(FirebaseService);
  const router = inject(Router);

  // Använder firstValueFrom för att hantera Observable som en Promise
  return new Promise<boolean>((resolve) => {
    firebaseService.user$.subscribe(user => {
      if (user) {
        resolve(true); // Användare inloggad, tillåt navigering
      } else {
        // Användare inte inloggad, omdirigera till inloggningssidan
        router.navigate(['/login']);
        resolve(false);
      }
    });
  });
};