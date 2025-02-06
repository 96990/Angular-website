import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ProfileComponent } from './profile/profile.component';
import { AboutComponent } from './about/about.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path: '',component: HomeComponent},
  {path: 'products',component: ProductsComponent },
  {path: 'profile',component: ProfileComponent},
  {path: 'about',component: AboutComponent},
  {path: 'user',component: UserComponent},
  {path: '**',component: PagenotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
