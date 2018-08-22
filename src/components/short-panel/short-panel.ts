import { NavController } from 'ionic-angular';
import { Component, Input, SimpleChanges, OnChanges } from '@angular/core';
import { Book } from '../../Models/Book';
import { BookDetailPage } from '../../pages/book-detail/book-detail';

/**
 * Generated class for the ShortPanelComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'short-panel',
  templateUrl: 'short-panel.html'
})
export class ShortPanelComponent implements OnChanges {

  @Input() Book: Book;

  BookTitle: string;
  BookAuthors: string;
  BookRelease: Date;

  constructor(public navCtrl: NavController) {
  }

  ngOnChanges(changes: SimpleChanges): void {

    for (let propName in changes) {
      let changeProp = changes[propName];
      this.Book = changeProp.currentValue;
    }

    if (this.Book) {
      this.updateBookView();
    }

  }

  updateBookView() {
    this.BookTitle = this.Book.name;
    this.BookAuthors = `Written by `;
    this.Book.authors.forEach(element => {
      this.BookAuthors += element+" ";
    });
    this.BookRelease = this.Book.released;
  }

  test(){
    console.log("click!")
  }

  goToBookDetail(){
    this.navCtrl.push(BookDetailPage,{
      book: this.Book
    });
}

}
