import { Injectable } from "@angular/core";

import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {
  

  private recipes: Recipe[] = [
    new Recipe(
      'A test Recipe',
      'This is simply a test',
      'https://assets.bonappetit.com/photos/60a4022a248102a01bcfa0b6/1:1/w_2560%2Cc_limit/0621-Sheet-Pan-Gnocchi.jpg',
      [new Ingredient('Meat', 1), new Ingredient('French Fries', 20)]
    ),
    new Recipe(
      'Another test Recipe',
      'This is simply another test',
      'https://www.simplyrecipes.com/thmb/O-rhPnz2V3hdqKFPij8NlwZIKqs=/2376x1584/filters:fill(auto,1)/Simply-Recipes-Quesadilla-LEAD-5-55da42a2a306497c85b1328385e44d85.jpg',
      [new Ingredient('Buns', 2), new Ingredient('Meat', 1)]
    ),
  ];

  constructor(private slService: ShoppingListService) {}
  getRecipes() {
    return this.recipes.slice();
  }
  getRecipe(index: number) {
    return this.recipes[index];
  }
  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
