import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";
import { Recipe } from "./recipe.model";

export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      "Tasty Schnitzel",
      "A super-tasty schnitzel - just awesome",
      "https://live.staticflickr.com/3640/3407576901_cc7cd4ba1f_b.jpg",
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 10)
      ]
    ),
    new Recipe(
      "Chicken Burger",
      "This is simply a test",
      "https://images.pexels.com/photos/15076692/pexels-photo-15076692.jpeg",
      [
        new Ingredient('Chicken Breast', 1),
        new Ingredient('Buns', 2),
        new Ingredient('Pickles', 5),
      ]
    ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.getRecipes()[index];
  }
}
