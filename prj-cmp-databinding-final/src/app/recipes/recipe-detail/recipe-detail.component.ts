import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { Ingredient } from "src/app/shared/ingredient.model";
import { ShoppingListService } from "src/app/shopping-list/shopping-list.service";

import { Recipe } from "../recipe.model";
import { RecipeService } from "../recipe.service";

@Component({
  selector: "app-recipe-detail",
  templateUrl: "./recipe-detail.component.html",
  styleUrls: ["./recipe-detail.component.css"],
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;

  constructor(
    private shoppingListService: ShoppingListService,
    private route: ActivatedRoute,
    private recipeService: RecipeService,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params["id"];
      this.recipe = this.recipeService.getRecipe(this.id);
    });
  }

  toShoppingList(ingredients: Ingredient[]) {
    ingredients.forEach((ingredient) =>
      this.shoppingListService.addIngredient(ingredient)
    );
  }

  onEditRecipe() {
    // this.router.navigate(['edit'], { relativeTo: this.route });
    // more complex navigation
    this.router.navigate(['../', this.id, 'edit'], { relativeTo: this.route });
  }
}
