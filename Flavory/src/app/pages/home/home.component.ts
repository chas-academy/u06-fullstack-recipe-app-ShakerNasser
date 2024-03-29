import { Component } from '@angular/core';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  recipes?: any;

  constructor(private recipeService: RecipeService) {}

  searchRecipe() {
    this.recipeService.getRecipes('').subscribe((res) => {
      console.log(res);
      
      let recipeArray: any[];
      recipeArray = res.hits;
    
      let recipes = recipeArray.map(item => {
          return {
            self: item._links.self.href,
            label: item.recipe.label,
            image: item.recipe.image,
            totalTime: item.recipe.totalTime,
            ingredientLines: item.recipe.ingredientLines
          }
      });
    
      this.recipes = recipes;
    });

  }
}
