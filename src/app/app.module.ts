import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { NavigationbarComponent } from './navigationbar/navigationbar.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { ProfileComponent } from './profile/profile.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { UserComponent } from './user/user.component';
import { DueDatePipe } from './about/dueDate.pipe';
@NgModule({
  declarations: [
    AppComponent,
    NavigationbarComponent,
    HomeComponent,
    AboutComponent,
    ProductsComponent,
    ProfileComponent,
    PagenotfoundComponent,
    UserComponent,
    NavigationbarComponent,
    DueDatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
