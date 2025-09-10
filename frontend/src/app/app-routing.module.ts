import { Injector, NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { CartDetailsComponent } from './components/cart-details/cart-details.component';

//////////////////////////////////////////////

import { OktaAuthGuard, OktaCallbackComponent } from '@okta/okta-angular';
import { LoginComponent } from './components/login/login.component';
import OktaAuth from '@okta/okta-auth-js';

//////////////////////////////////////////////

////////////////////////////////
function sendToLoginPage(oktaAuth: OktaAuth, injector: Injector) {
  // Use injector to access any service available within your application
  const router = injector.get(Router);

  // Redirect the user to your custom login page
  router.navigate(['/login']);
}

const routes: Routes = [
  { path: 'login/callback', component: OktaCallbackComponent },
  { path: 'login', component: LoginComponent },

  { path: 'search/:keyword', component: ProductListComponent },
  { path: 'category/:id', component: ProductListComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'category', component: ProductListComponent },
  { path: 'products', component: ProductListComponent },
  { path: 'cart-details', component: CartDetailsComponent },
  { path: 'products/:id', component: ProductDetailsComponent },
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  { path: '**', redirectTo: '/products', pathMatch: 'full' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
