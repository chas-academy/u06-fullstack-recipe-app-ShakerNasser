import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../services/recipe.service';
import { FilterComponent } from '../filter/filter.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FilterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  recipes?: any;

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.searchRecipe();
  }

  searchRecipe() {
    this.recipeService.getRecipes('').subscribe((res) => {
      
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
