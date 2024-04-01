import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'app-starters',
  standalone: true,
  imports: [RouterLink, SearchComponent],
  templateUrl: './starters.component.html',
  styleUrl: './starters.component.css'
})
export class StartersComponent {

  dishType= "Starter";
    recipes?: any;
    
    ngOnInit(): void {
    }
  
    recieveRecipes(recipes: any[]) {
      this.recipes = recipes
    }

}
