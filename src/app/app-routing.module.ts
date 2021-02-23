import { NgModule } from '@angular/core';
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
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'memories', component: MemoriesComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'gifts', component: GiftsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
