import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { MemoriesComponent } from './memories/memories.component';
import { GalleryComponent } from './gallery/gallery.component';
import { OrdersComponent } from './orders/orders.component';
import { GiftsComponent } from './gifts/gifts.component';
import { FriendsComponent } from './friends/friends.component';
import { BestiesComponent } from './besties/besties.component';
import { AuthGuardService } from './services/guards/auth-guard.service';
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent,canActivate:[AuthGuardService] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent,canActivate:[AuthGuardService] },
  { path: 'friends',  component:FriendsComponent,canActivate:[AuthGuardService]},
  { path: 'besties',component:BestiesComponent,canActivate:[AuthGuardService]},
  { path: 'memories', component: MemoriesComponent,canActivate:[AuthGuardService] },
  { path: 'gallery', component: GalleryComponent,canActivate:[AuthGuardService] },
  { path: 'orders', component: OrdersComponent,canActivate:[AuthGuardService] },
  { path: 'gifts', component: GiftsComponent,canActivate:[AuthGuardService] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
