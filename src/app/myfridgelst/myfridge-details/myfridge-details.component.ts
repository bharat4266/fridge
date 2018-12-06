import { Component, Input } from '@angular/core';
import { Food } from '../myfridge';
import { MyfridgeService } from '../myfridge.service';

@Component({
  selector: 'myfridge-details',
  templateUrl: './myfridge-details.component.html',
  styleUrls: ['./myfridge-details.component.css']
})

export class MyfridgeDetailsComponent {

  @Input()
  food: Food;
  @Input()
  createHandler: Function;
  @Input()
  updateHandler: Function;
  @Input()
  deleteHandler: Function;

  constructor (private foodService: MyfridgeService) {}

  createFood(food: Food) {
    this.foodService.createFood(food).then((newFood: Food) => {
      this.createHandler(newFood);
    });
  }

  updateFood(food: Food): void {
    this.foodService.updateFood(food).then((updatedFood: Food) => {
      this.updateHandler(updatedFood);
    });
  }

  deleteFood(foodId: String): void {
    this.foodService.deleteFood(foodId).then((deletedFoodId: String) => {
      this.deleteHandler(deletedFoodId);
    });
  }
}