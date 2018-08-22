import { Book } from '../../Models/Book';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { consts } from "../../constants/const";
import { Observable } from 'rxjs/Observable';
import "rxjs/add/operator/map";

/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiProvider {

  constructor(public http: HttpClient) {

  }

  // getBooks() : Observable<Books[]> {
  //   return this.http.get<Books[]>(consts.baseUrl+consts.books);
  // }

  async getBooks() : Promise<Book[]> {
    const response = await this.http.get<Book[]>(consts.baseUrl + consts.books);
    return response.toPromise();

  }

}
