import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../services/recipe.service';
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'app-desserts',
  standalone: true,
  imports: [SearchComponent],
  templateUrl: './desserts.component.html',
  styleUrl: './desserts.component.css'
})
export class DessertsComponent implements OnInit {

  dishType= "Desserts";
    recipes?: any;
  
    constructor(private recipeService: RecipeService) {}
  
    ngOnInit(): void {
    }
  
    recieveRecipes(recipes: any[]) {
      this.recipes = recipes
    }
  }