import { BookDetailPage } from './../book-detail/book-detail';
import { Book } from '../../Models/Book';
import { ApiProvider } from './../../providers/api/api';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

/**
 * Generated class for the BooksPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-books',
  templateUrl: 'books.html',
})
export class BooksPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public apiProvider: ApiProvider, public loadingCtrl: LoadingController) {
    
  }

  books: Book[];

  async ionViewDidLoad() {
    console.log('ionViewDidLoad BooksPage');
    await this.loadBooks();
    
  }



  async loadBooks() {
    let loading = this.loadingCtrl.create({
      content: "Please wait..."
    });

    loading.present();
    this.books = await this.apiProvider.getBooks();
    loading.dismiss();
  }



}
