import { Injectable } from '@angular/core';
import { Food } from './myfridge';
import { Http, Response } from '@angular/http';

@Injectable()
export class MyfridgeService {
    private FoodsUrl = '/api/food';

    constructor (private http: Http) {}

    // get("/api/Foods")
    getFoods(): Promise<void | Food[]> {
      return this.http.get(this.FoodsUrl)
                 .toPromise()
                 .then(response => response.json() as Food[])
                 .catch(this.handleError);
    }

    // post("/api/Foods")
    createFood(newFood: Food): Promise<void | Food> {
      return this.http.post(this.FoodsUrl, newFood)
                 .toPromise()
                 .then(response => response.json() as Food)
                 .catch(this.handleError);
    }

    // get("/api/Foods/:id") endpoint not used by Angular app

    // delete("/api/Foods/:id")
    deleteFood(delFoodId: String): Promise<void | String> {
      return this.http.delete(this.FoodsUrl + '/' + delFoodId)
                 .toPromise()
                 .then(response => response.json() as String)
                 .catch(this.handleError);
    }

    // put("/api/Foods/:id")
    updateFood(putFood: Food): Promise<void | Food> {
      var putUrl = this.FoodsUrl + '/' + putFood._id;
      return this.http.put(putUrl, putFood)
                 .toPromise()
                 .then(response => response.json() as Food)
                 .catch(this.handleError);
    }

    private handleError (error: any) {
      let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
      console.error(errMsg); // log to console instead
    }
}