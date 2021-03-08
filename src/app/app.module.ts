import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FeedComponent } from './feed/feed.component';
import { RemindersComponent } from './reminders/reminders.component';
import { RemcardComponent } from './remcard/remcard.component';
import { ProfileComponent } from './profile/profile.component';
import { MemoriesComponent } from './memories/memories.component';
import { GalleryComponent } from './gallery/gallery.component';
import { OrdersComponent } from './orders/orders.component';
import { GiftsComponent } from './gifts/gifts.component';
import { StoreModule } from '@ngrx/store';
import {addBuserReducer} from './reducers/Buser.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { FriendsComponent } from './friends/friends.component';
import { BestiesComponent } from './besties/besties.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    FeedComponent,
    RemindersComponent,
    RemcardComponent,
    ProfileComponent,
    MemoriesComponent,
    GalleryComponent,
    OrdersComponent,
    GiftsComponent,
    FriendsComponent,
    BestiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    StoreModule.forRoot({Buser:addBuserReducer}),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
