import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipes.model";

export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe('Test Recipe', 'This is just a test', '../../assets/images/img.jpg'),
        new Recipe('Another Test Recipe', 'This is just another test', '../../assets/images/img.jpg')
    ];

    getRecipes(){
        return this.recipes.slice();
    }
}