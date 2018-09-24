webpackJsonp([5],{

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleTypePageModule", function() { return VehicleTypePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vehicle_type__ = __webpack_require__(311);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var VehicleTypePageModule = /** @class */ (function () {
    function VehicleTypePageModule() {
    }
    VehicleTypePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__vehicle_type__["a" /* VehicleTypePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__vehicle_type__["a" /* VehicleTypePage */]),
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__vehicle_type__["a" /* VehicleTypePage */]
            ]
        })
    ], VehicleTypePageModule);
    return VehicleTypePageModule;
}());

//# sourceMappingURL=vehicle-type.module.js.map

/***/ }),

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VehicleTypePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VehicleTypePage = /** @class */ (function () {
    function VehicleTypePage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.searchQuery = '';
        this.vTypes = {
            "C": [
                {
                    "name": "Car",
                    "code": "CR"
                },
                {
                    "name": "Van",
                    "code": "VN"
                },
                {
                    "name": "Jeep",
                    "code": "JP"
                },
                {
                    "name": "Crew Cab",
                    "code": "CC"
                },
                {
                    "name": "Pickup",
                    "code": "PU"
                },
                {
                    "name": "Bus",
                    "code": "BS"
                },
                {
                    "name": "Lorry",
                    "code": "LR"
                },
                {
                    "name": "Truck",
                    "code": "TK"
                },
                {
                    "name": "Three Wheel",
                    "code": "TW"
                },
                {
                    "name": "Tractor",
                    "code": "TR"
                },
                {
                    "name": "Heavy-duty",
                    "code": "HD"
                },
                {
                    "name": "Motor Bikes",
                    "code": "MB"
                },
                {
                    "name": "Hybrid",
                    "code": "HB"
                },
                {
                    "name": "Electric",
                    "code": "EL"
                }
            ]
        };
        this.selectedType = {};
    }
    VehicleTypePage.prototype.dismiss = function () {
        this.viewCtrl.dismiss(this.selectedType);
    };
    VehicleTypePage.prototype.selectType = function (logo) {
        this.selectedType = logo;
        this.viewCtrl.dismiss(this.selectedType);
    };
    VehicleTypePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-vehicle-type',template:/*ion-inline-start:"C:\Users\greshan\Documents\Freelance\Autoparts\project\autopartslk\src\pages\vehicle-type\vehicle-type.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n    	 <button ion-button  icon-only (click)=\'closeModal()\'>\n\n        <ion-icon name="arrow-back"></ion-icon>\n\n      </button>\n\n     Vehicle Types\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n 	<ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n\n	<ion-list>\n\n	  <ion-item  *ngFor="let vehicle of vTypes[\'C\']" (click)="selectType(vehicle)">\n\n       <!-- <ion-thumbnail item-start>\n\n            <img [src]="\'../../assets/imgs/categories/\'+vehicle.logo">\n\n        </ion-thumbnail>-->\n\n	    {{vehicle.name}}\n\n	  </ion-item>\n\n	</ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\greshan\Documents\Freelance\Autoparts\project\autopartslk\src\pages\vehicle-type\vehicle-type.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */]])
    ], VehicleTypePage);
    return VehicleTypePage;
}());

//# sourceMappingURL=vehicle-type.js.map

/***/ })

});
//# sourceMappingURL=5.js.map