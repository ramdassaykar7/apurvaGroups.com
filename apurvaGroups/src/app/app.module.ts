import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { SliderComponent } from './main/slider/slider.component';
import { IntroComponent } from './main/intro/intro.component';
import { CardsComponent } from './main/cards/cards.component';
import { GallaryComponent } from './main/gallary/gallary.component';


const appRoutes: Routes=[
  { path: 'app-main', component: MainComponent },
  { path: 'app-intro', component: IntroComponent },

  { path:'', redirectTo: '', pathMatch: 'full' }
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    MainComponent,
    SliderComponent,
    IntroComponent,
    CardsComponent,
    GallaryComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
