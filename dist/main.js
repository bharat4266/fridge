(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <myfridge-list></myfridge-list>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'MyfridgeList';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _myfridgelst_myfridge_details_myfridge_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./myfridgelst/myfridge-details/myfridge-details.component */ "./src/app/myfridgelst/myfridge-details/myfridge-details.component.ts");
/* harmony import */ var _myfridgelst_myfridge_list_myfridge_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./myfridgelst/myfridge-list/myfridge-list.component */ "./src/app/myfridgelst/myfridge-list/myfridge-list.component.ts");









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _myfridgelst_myfridge_details_myfridge_details_component__WEBPACK_IMPORTED_MODULE_7__["MyfridgeDetailsComponent"],
                _myfridgelst_myfridge_list_myfridge_list_component__WEBPACK_IMPORTED_MODULE_8__["MyfridgeListComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_4__["HttpModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/myfridgelst/myfridge-details/myfridge-details.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/myfridgelst/myfridge-details/myfridge-details.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL215ZnJpZGdlbHN0L215ZnJpZGdlLWRldGFpbHMvbXlmcmlkZ2UtZGV0YWlscy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/myfridgelst/myfridge-details/myfridge-details.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/myfridgelst/myfridge-details/myfridge-details.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"food\" class=\"row\">\n  <div class=\"col-md-12\">\n    <h2 *ngIf=\"food._id\">Food Details</h2>\n    <h2 *ngIf=\"!food._id\">New Food Details</h2>\n  </div>\n</div>\n<div *ngIf=\"food\" class=\"row\">\n  <form class=\"col-md-12\">\n    <div class=\"form-group\">\n      <label for=\"food-name\">Name</label>\n      <input class=\"form-control\" name=\"food-name\" [(ngModel)]=\"food.name\" placeholder=\"Name\"/>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"food-date\">Date</label>\n      <input class=\"form-control\" name=\"food-date\" [(ngModel)]=\"food.date\" placeholder=\"Date\"/>\n    </div>\n      <div class=\"form-group\">\n      <label for=\"food-expiry\">Expiry</label>\n      <input class=\"form-control\" name=\"food-expiry\" [(ngModel)]=\"food.expiry\" placeholder=\"Expiry\"/>\n    </div>\n      <div class=\"form-group\">\n      <label for=\"food-left-overs\">Left-overs</label>\n      <input class=\"form-control\" name=\"food-left-overs\" [(ngModel)]=\"food.left_overs\" placeholder=\"left-overs\"/>\n    </div>\n      <div class=\"form-group\">\n      <label for=\"food-quantity\">Quantity</label>\n      <input class=\"form-control\" name=\"food-quantity\" [(ngModel)]=\"food.quantity\" placeholder=\"Quantity\"/>\n    </div>\n    <button class=\"btn btn-primary\" *ngIf=\"!food._id\" (click)=\"createFood(food)\">Create</button>\n    <button class=\"btn btn-info\" *ngIf=\"food._id\" (click)=\"updateFood(food)\">Update</button>\n    <button class=\"btn btn-danger\" *ngIf=\"food._id\" (click)=\"deleteFood(food._id)\">Delete</button>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/myfridgelst/myfridge-details/myfridge-details.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/myfridgelst/myfridge-details/myfridge-details.component.ts ***!
  \****************************************************************************/
/*! exports provided: MyfridgeDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyfridgeDetailsComponent", function() { return MyfridgeDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _myfridge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../myfridge */ "./src/app/myfridgelst/myfridge.ts");
/* harmony import */ var _myfridge_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../myfridge.service */ "./src/app/myfridgelst/myfridge.service.ts");




var MyfridgeDetailsComponent = /** @class */ (function () {
    function MyfridgeDetailsComponent(foodService) {
        this.foodService = foodService;
    }
    MyfridgeDetailsComponent.prototype.createFood = function (food) {
        var _this = this;
        this.foodService.createFood(food).then(function (newFood) {
            _this.createHandler(newFood);
        });
    };
    MyfridgeDetailsComponent.prototype.updateFood = function (food) {
        var _this = this;
        this.foodService.updateFood(food).then(function (updatedFood) {
            _this.updateHandler(updatedFood);
        });
    };
    MyfridgeDetailsComponent.prototype.deleteFood = function (foodId) {
        var _this = this;
        this.foodService.deleteFood(foodId).then(function (deletedFoodId) {
            _this.deleteHandler(deletedFoodId);
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _myfridge__WEBPACK_IMPORTED_MODULE_2__["Food"])
    ], MyfridgeDetailsComponent.prototype, "food", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function)
    ], MyfridgeDetailsComponent.prototype, "createHandler", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function)
    ], MyfridgeDetailsComponent.prototype, "updateHandler", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function)
    ], MyfridgeDetailsComponent.prototype, "deleteHandler", void 0);
    MyfridgeDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'myfridge-details',
            template: __webpack_require__(/*! ./myfridge-details.component.html */ "./src/app/myfridgelst/myfridge-details/myfridge-details.component.html"),
            styles: [__webpack_require__(/*! ./myfridge-details.component.css */ "./src/app/myfridgelst/myfridge-details/myfridge-details.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_myfridge_service__WEBPACK_IMPORTED_MODULE_3__["MyfridgeService"]])
    ], MyfridgeDetailsComponent);
    return MyfridgeDetailsComponent;
}());



/***/ }),

/***/ "./src/app/myfridgelst/myfridge-list/myfridge-list.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/myfridgelst/myfridge-list/myfridge-list.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL215ZnJpZGdlbHN0L215ZnJpZGdlLWxpc3QvbXlmcmlkZ2UtbGlzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/myfridgelst/myfridge-list/myfridge-list.component.html":
/*!************************************************************************!*\
  !*** ./src/app/myfridgelst/myfridge-list/myfridge-list.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-5\">\n    <h2>Myfridge</h2>\n    <ul class=\"list-group\">\n      <li class=\"list-group-item\"\n        *ngFor=\"let food of myfridgefood\"\n        (click)=\"selectFood(food)\"\n        [class.active]=\"food === selectedFood\">\n        {{food.name}}\n      </li>\n    </ul>\n    <button class=\"btn btn-warning\" (click)=\"createNewFood()\">New</button>\n  </div>\n  <div class=\"col-md-5 col-md-offset-2\">\n    <myfridge-details\n      [food]=\"selectedFood\"\n      [createHandler]=\"addFood\"\n      [updateHandler]=\"updateFood\"\n      [deleteHandler]=\"deleteFood\">\n    </myfridge-details>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/myfridgelst/myfridge-list/myfridge-list.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/myfridgelst/myfridge-list/myfridge-list.component.ts ***!
  \**********************************************************************/
/*! exports provided: MyfridgeListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyfridgeListComponent", function() { return MyfridgeListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _myfridge_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../myfridge.service */ "./src/app/myfridgelst/myfridge.service.ts");



var MyfridgeListComponent = /** @class */ (function () {
    function MyfridgeListComponent(foodService) {
        var _this = this;
        this.foodService = foodService;
        this.getIndexOfFood = function (foodId) {
            return _this.myfridgefood.findIndex(function (food) {
                return food._id === foodId;
            });
        };
        this.deleteFood = function (foodId) {
            var idx = _this.getIndexOfFood(foodId);
            if (idx !== -1) {
                _this.myfridgefood.splice(idx, 1);
                _this.selectFood(null);
            }
            return _this.myfridgefood;
        };
        this.addFood = function (food) {
            if (food.name != '' && food.date != '') {
                _this.myfridgefood.push(food);
            }
            _this.selectFood(food);
            return _this.myfridgefood;
        };
        this.updateFood = function (food) {
            var idx = _this.getIndexOfFood(food._id);
            if (idx !== -1) {
                _this.myfridgefood[idx] = food;
                _this.selectFood(food);
            }
            return _this.myfridgefood;
        };
    }
    MyfridgeListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.foodService
            .getFoods()
            .then(function (myfridgefood) {
            _this.myfridgefood = myfridgefood.map(function (food) {
                return food;
            });
        });
    };
    MyfridgeListComponent.prototype.selectFood = function (food) {
        this.selectedFood = food;
    };
    MyfridgeListComponent.prototype.createNewFood = function () {
        var food = {
            name: '',
            date: '',
            expiry: '',
            left_overs: false,
            quantity: parseInt('')
        };
        this.selectFood(food);
    };
    MyfridgeListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'myfridge-list',
            template: __webpack_require__(/*! ./myfridge-list.component.html */ "./src/app/myfridgelst/myfridge-list/myfridge-list.component.html"),
            providers: [_myfridge_service__WEBPACK_IMPORTED_MODULE_2__["MyfridgeService"]],
            styles: [__webpack_require__(/*! ./myfridge-list.component.css */ "./src/app/myfridgelst/myfridge-list/myfridge-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_myfridge_service__WEBPACK_IMPORTED_MODULE_2__["MyfridgeService"]])
    ], MyfridgeListComponent);
    return MyfridgeListComponent;
}());



/***/ }),

/***/ "./src/app/myfridgelst/myfridge.service.ts":
/*!*************************************************!*\
  !*** ./src/app/myfridgelst/myfridge.service.ts ***!
  \*************************************************/
/*! exports provided: MyfridgeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyfridgeService", function() { return MyfridgeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");



var MyfridgeService = /** @class */ (function () {
    function MyfridgeService(http) {
        this.http = http;
        this.FoodsUrl = '/api/food';
    }
    // get("/api/Foods")
    MyfridgeService.prototype.getFoods = function () {
        return this.http.get(this.FoodsUrl)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    // post("/api/Foods")
    MyfridgeService.prototype.createFood = function (newFood) {
        return this.http.post(this.FoodsUrl, newFood)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    // get("/api/Foods/:id") endpoint not used by Angular app
    // delete("/api/Foods/:id")
    MyfridgeService.prototype.deleteFood = function (delFoodId) {
        return this.http.delete(this.FoodsUrl + '/' + delFoodId)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    // put("/api/Foods/:id")
    MyfridgeService.prototype.updateFood = function (putFood) {
        var putUrl = this.FoodsUrl + '/' + putFood._id;
        return this.http.put(putUrl, putFood)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    MyfridgeService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
    };
    MyfridgeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], MyfridgeService);
    return MyfridgeService;
}());



/***/ }),

/***/ "./src/app/myfridgelst/myfridge.ts":
/*!*****************************************!*\
  !*** ./src/app/myfridgelst/myfridge.ts ***!
  \*****************************************/
/*! exports provided: Food */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Food", function() { return Food; });
var Food = /** @class */ (function () {
    function Food() {
    }
    return Food;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Bkashyap7747\Desktop\fridge\fridge\MyfridgeList\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map