import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private baseUrl = 'https://api.edamam.com/api/recipes/v2';
  private app_key = '51360e3a2f2c71bcfc98131a0a7161e8';
  private app_id = '6d7aa4a9';

  private httpOptions = {
    headers: new HttpHeaders({
      accept: 'application/json',
      'Accept-Language': 'en',
    }),
  };

  constructor(private http: HttpClient) {}

  getRecipes(
    searchterm: string,
    dishType: string,
    gluten: string = '',
    vegetarian: string = '',
    nuts: string = ''
  ): Observable<any> {
    let url =
      this.baseUrl +
      '?type=public' +
      '&q=' +
      searchterm +
      '&app_id=' +
      this.app_id +
      '&app_key=' +
      this.app_key +
      '&dishType=' +
      dishType;

    if (gluten) {
      url += '&health=gluten-free';
    }

    if (vegetarian) {
      url += '&health=vegetarian';
    }

    if (nuts) {
      url += '&health=peanut-free';
    }
    console.log(url);
    return this.http.get<any>(url, this.httpOptions);
  }

  // getRandomRecipes(searchterm: string): Observable<any> {

  //   let random = true ;
  //   let url = this.baseUrl + "&q=" + searchterm + "&app_id=" + this.app_id + "&app_key=" + this.app_key + "&random=" + random;
  //   return this.http.get<any>(url, this.httpOptions)
  // }

  getRecipeById(id: string) {
    let url =
      this.baseUrl +
      '/' +
      id +
      '?type=public' +
      '&app_id=' +
      this.app_id +
      '&app_key=' +
      this.app_key;

    return this.http.get<any>(url, this.httpOptions);
  }
}
