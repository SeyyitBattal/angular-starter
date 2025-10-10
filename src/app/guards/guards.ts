import { CanActivateFn, ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivateFn } from '@angular/router';

export const canActGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  console.log('CanActivate guard');
  return true;
}; 

export const canActChildGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
console.log('canActChildGuard guard');
  return true;
};

export const canDeactiveGuard: CanDeactivateFn<any> = (component: any, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState: RouterStateSnapshot) => {
alert('Başka sayfaya yönlendirileceksiniz. Emin misiniz?');
  console.log('canDeactiveGuard guard');
return true;
};


