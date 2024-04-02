import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule,],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit {
@Input() dishType = ""; // input för searchform
@Output() recipesEmitter: EventEmitter<any[]> = new EventEmitter<any[]>();

querySearch = '';
gluten = false;  // Switchbuttons som ger false värde by default
vegetarian = false;
nuts = false;
egg = false;

recipes: any

constructor(private recipeService: RecipeService) {}

onSearch (){

  const glutenQuery = this.gluten ? 'gluten-free' : ""
  const vegetarianQuery = this.vegetarian ? 'vegetarian' : ""
  const nutsQuery = this.nuts ? "peanut-free" : ""
  const eggQuery = this.egg ? "egg-free" : ""

  this.recipeService.getRecipes(this.querySearch, this.dishType, glutenQuery, vegetarianQuery, nutsQuery, eggQuery).subscribe((res) => {
      
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
    this.recipesEmitter.emit(this.recipes)
  });

}

getRecommendations(){

  this.recipeService.getRecipes('', this.dishType).subscribe((res) => {
      
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
    this.recipesEmitter.emit(this.recipes)
  });

}

  ngOnInit(): void {
    this.getRecommendations();
  }

}
