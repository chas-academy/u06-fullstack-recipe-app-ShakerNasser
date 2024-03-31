import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private baseUrl = 'https://api.edamam.com/api/recipes/v2?type=public';
  private app_key = "51360e3a2f2c71bcfc98131a0a7161e8";
  private app_id = "6d7aa4a9";

  private httpOptions = {
    headers: new HttpHeaders({
      'accept': 'application/json',
      'Accept-Language': 'en'
    })
  }

  constructor(private http: HttpClient) { }

  getRecipes(searchterm: string): Observable<any> {

    let dishType = "Dinner";
    let url = this.baseUrl + "&q=" + searchterm + "&app_id=" + this.app_id + "&app_key=" + this.app_key + "&mealType=" + dishType;
    return this.http.get<any>(url, this.httpOptions)
  }
  
  getRandomRecipes(searchterm: string): Observable<any> {

    let random = true ;
    let url = this.baseUrl + "&q=" + searchterm + "&app_id=" + this.app_id + "&app_key=" + this.app_key + "&random=" + random;
    return this.http.get<any>(url, this.httpOptions)
  }


}

