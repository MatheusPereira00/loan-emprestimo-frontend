import { CanActivateFn } from '@angular/router';

export const guardGuard: CanActivateFn = (route, state) => {
  // Obtém o token do Local Storage ou de outro local de armazenamento
  const token = localStorage.getItem('authToken');
  // Verifica se o token existe
  if (!token) {
    // Se não existir token, redireciona para a página de login
    return redirectTo('');
  } else {
    return true;
  }
};

function redirectTo(arg0: string): boolean | import("@angular/router").UrlTree | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
  throw new Error('Function not implemented.');
}

