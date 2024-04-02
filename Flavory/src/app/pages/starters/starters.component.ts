import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { SearchComponent } from '../search/search.component';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-starters',
  standalone: true,
  imports: [RouterLink, SearchComponent],
  templateUrl: './starters.component.html',
  styleUrl: './starters.component.css'
})
export class StartersComponent {

  dishType= "starter";

  recipes?: any;

  constructor(private recipeService: RecipeService, private router: Router) {}


  recieveRecipes(recipes: any[]) {
    this.recipes = recipes
  }

  goToDetails(recipe:any){
    let startIndex = recipe.self.indexOf("/v2/") + 4; // Add 4 to include "/v2/"
    let endIndex = recipe.self.indexOf("?");
    
    let extractedId = recipe.self.substring(startIndex, endIndex);
    
    console.log(extractedId);
    this.router.navigate(['/recipe', extractedId]);
  }

}
