import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyHeader } from './my-header/my-header';
import { SectionHome } from './section-home/section-home';
import { MyFooter } from './my-footer/my-footer';
import { SectionAdverts } from './section-adverts/section-adverts';
import { SectionAboutus } from './section-aboutus/section-aboutus';
import { ROUTING } from './app.routing';
import { HomePage } from './home-page/home-page';
import { AdvertsPage } from './adverts-page/adverts-page';
import { AboutusPage } from './aboutus-page/aboutus-page';

@NgModule({
  declarations: [
    AppComponent,
    MyHeader, 
    SectionHome,
    MyFooter,
    SectionAdverts,
    SectionAboutus,
    HomePage,
    AdvertsPage,
    AboutusPage
  ],
  imports: [
    BrowserModule,
    ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
