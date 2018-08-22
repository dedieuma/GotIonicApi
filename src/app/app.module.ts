import { BookDetailPage } from './../pages/book-detail/book-detail';
import { ShortPanelComponent } from './../components/short-panel/short-panel';
import { ComponentsModule } from './../components/components.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HousesPage } from './../pages/houses/houses';
import { CharactersPage } from './../pages/characters/characters';
import { BooksPage } from './../pages/books/books';
import { NgModule, ErrorHandler, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';



import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ApiProvider } from '../providers/api/api';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    BooksPage,
    CharactersPage,
    HousesPage,
    ShortPanelComponent,
    BookDetailPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    BooksPage,
    CharactersPage,
    HousesPage,
    BookDetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ApiProvider,
    {provide: LOCALE_ID, useValue: 'fr'}
  ]
})
export class AppModule {
  
}
