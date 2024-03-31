import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../services/recipe.service';
import { FilterComponent } from '../filter/filter.component';

@Component({
  selector: 'app-desserts',
  standalone: true,
  imports: [FilterComponent],
  templateUrl: './desserts.component.html',
  styleUrl: './desserts.component.css'
})
export class DessertsComponent implements OnInit {

    recipes?: any;
  
    constructor(private recipeService: RecipeService) {}
  
    ngOnInit(): void {
      this.searchRecipe();
    }
  
    searchRecipe() {
      this.recipeService.getRecipes('dessert').subscribe((res) => {
        
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