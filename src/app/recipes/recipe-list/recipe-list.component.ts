import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css',
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'this is simply a test',
      'https://easyweeknightrecipes.com/wp-content/uploads/2021/06/meatloaf-recipe-4-1140x1710.jpg'
    ),
  ];
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
