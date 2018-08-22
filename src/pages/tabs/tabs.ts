import { HousesPage } from './../houses/houses';
import { CharactersPage } from './../characters/characters';
import { BooksPage } from './../books/books';
import { Component } from '@angular/core';



@Component({
  selector: 'tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {



  tab1Root = BooksPage;
  tab2Root = CharactersPage;
  tab3Root = HousesPage;


  constructor() {
    
    
  }


}
