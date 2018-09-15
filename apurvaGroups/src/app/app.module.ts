import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { SliderComponent } from './main/slider/slider.component';
import { IntroComponent } from './main/intro/intro.component';
import { ProductComponent } from './main/product/product.component';
import { AboutusComponent } from './main/aboutus/aboutus.component';
import { SearchBarComponent} from './main/search-bar/search-bar.component';
import { MinSliderComponent } from './main/min-slider/min-slider.component'

const appRoutes: Routes=[
  { path: 'app-main', component: MainComponent },
  { path: 'app-intro', component: IntroComponent },
  { path: 'app-product', component: ProductComponent },
  { path: 'app-aboutus', component: AboutusComponent },
  { path: '', component: SliderComponent },


  { path:'', redirectTo: '/', pathMatch: 'full' }
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    MainComponent,
    SliderComponent,
    IntroComponent,
    ProductComponent,
    AboutusComponent,
    SearchBarComponent,
    MinSliderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
