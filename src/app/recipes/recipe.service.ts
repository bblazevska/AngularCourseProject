import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";


export class RecipeService {
   recipeSelected = new EventEmitter<Recipe>();
   private recipes: Recipe[] = [
    new Recipe(
      'A test Recipe',
      'This is simply a test',
      'https://assets.bonappetit.com/photos/60a4022a248102a01bcfa0b6/1:1/w_2560%2Cc_limit/0621-Sheet-Pan-Gnocchi.jpg'
    ),
    new Recipe(
      'Another test Recipe',
      'This is simply another test',
      'https://assets.bonappetit.com/photos/60a4022a248102a01bcfa0b6/1:1/w_2560%2Cc_limit/0621-Sheet-Pan-Gnocchi.jpg'
    ),
   ];

   getRecipes() {
      return this.recipes.slice();
   }
}