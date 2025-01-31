import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PrivacyComponent } from './pages/privacy/privacy.component';
import { AllProductsComponent } from './pages/all-products/all-products.component';

export const routes: Routes = [
  {
    path:"",
    component:HomeComponent
  },

  {
path:"login",
component:LoginComponent,
  },
  {
    path:"register",
    component:RegisterComponent,
  },
  {
path:"contact",
component:ContactComponent,
  },
  {
    path:"privacy&policy",
    component:PrivacyComponent,
  },
  {
    path:"products",
    component:AllProductsComponent
  }
];

