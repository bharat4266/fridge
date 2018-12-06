import { Component, OnInit } from '@angular/core';
import { Food } from '../myfridge';
import { MyfridgeService } from '../myfridge.service';
import { MyfridgeDetailsComponent } from '../myfridge-details/myfridge-details.component';

@Component({
  selector: 'myfridge-list',
  templateUrl: './myfridge-list.component.html',
  styleUrls: ['./myfridge-list.component.css'],
  providers: [MyfridgeService]
})

export class MyfridgeListComponent implements OnInit {


myfridgefood: Food[]
  selectedFood: Food

  constructor(private foodService: MyfridgeService) { }

  ngOnInit() {
	  
	  this.foodService
      .getFoods()
      .then((myfridgefood: Food[]) => {
        this.myfridgefood = myfridgefood.map((food) => {
          return food;
        });
      });
	  
  }
  
  
  private getIndexOfFood = (foodId: String) => {
    return this.myfridgefood.findIndex((food) => {
      return food._id === foodId;
    });
  }
  
  
  selectFood(food: Food) {
    this.selectedFood = food
  }
  
  
  createNewFood() {
    var food: Food = {
      name: '',
      date: '',
	  expiry: '',
	  left_overs:false,
	  quantity:parseInt('')
    };

    this.selectFood(food);
	
  }
  
  deleteFood = (foodId: String) => {
    var idx = this.getIndexOfFood(foodId);
    if (idx !== -1) {
      this.myfridgefood.splice(idx, 1);
      this.selectFood(null);
    }
    return this.myfridgefood;
  }
  
  addFood = (food: Food) => {
 
	if (food.name != '' && food.date != ''){
		this.myfridgefood.push(food);
    }
	this.selectFood(food);
    return this.myfridgefood;
  }
  
  updateFood = (food: Food) => {
    var idx = this.getIndexOfFood(food._id);
    if (idx !== -1) {
      this.myfridgefood[idx] = food;
      this.selectFood(food);
    }
    return this.myfridgefood;
  }

}
