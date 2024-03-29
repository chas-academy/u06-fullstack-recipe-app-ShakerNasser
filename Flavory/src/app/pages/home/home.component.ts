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

  recipes?: any[];

  constructor(private recipeService: RecipeService) { }

  searchRecipe() {
    this.recipeService.getRecipes("chicken").subscribe(res => {
      console.log(res);
      this.recipes = res;
    });
  }

}
