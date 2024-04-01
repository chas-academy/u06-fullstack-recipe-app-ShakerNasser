import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../services/recipe.service';
import { SearchComponent } from '../search/search.component';
import { MainsComponent } from '../mains/mains.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-desserts',
  standalone: true,
  imports: [SearchComponent, MainsComponent],
  templateUrl: './desserts.component.html',
  styleUrl: './desserts.component.css'
})
export class DessertsComponent implements OnInit {

  dishType= "Desserts";
    recipes?: any;
  
    constructor(private recipeService: RecipeService, private router: Router) {}
  
    ngOnInit(): void {
    }
  
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