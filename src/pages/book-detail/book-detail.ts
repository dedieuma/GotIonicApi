import { Book } from './../../Models/Book';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BookDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-book-detail',
  templateUrl: 'book-detail.html',
})
export class BookDetailPage {

  book: Book;
  detailBook: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log("In book detail")
    console.log(navParams.get("book"));
    this.book = navParams.get("book");

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BookDetailPage');
  }



}
