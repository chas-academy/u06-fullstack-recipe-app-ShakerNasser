import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-recipe',
  standalone: true,
  imports: [],
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.css'
})
export class RecipeComponent implements OnInit {

  id: string  = '';
  recipe: any;

  constructor(private route: ActivatedRoute, private recipeService: RecipeService){}

  ngOnInit(){
    this.route.params.subscribe((params) => {
      this.id = params['id'];
    });

    this.getRecipe()
  }

  getRecipe(){
    this.recipeService.getRecipeById(this.id).subscribe(result=> {
      console.log(result)
      this.recipe = result.recipe
    })
  }

}
