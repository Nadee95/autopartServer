webpackJsonp([0],{

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehiclePartsSelectPageModule", function() { return VehiclePartsSelectPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vehicle_parts_select__ = __webpack_require__(310);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var VehiclePartsSelectPageModule = /** @class */ (function () {
    function VehiclePartsSelectPageModule() {
    }
    VehiclePartsSelectPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__vehicle_parts_select__["a" /* VehiclePartsSelectPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__vehicle_parts_select__["a" /* VehiclePartsSelectPage */]),
            ],
        })
    ], VehiclePartsSelectPageModule);
    return VehiclePartsSelectPageModule;
}());

//# sourceMappingURL=vehicle-parts-select.module.js.map

/***/ }),

/***/ 300:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(7);
var map_1 = __webpack_require__(100);
Observable_1.Observable.prototype.map = map_1.map;
//# sourceMappingURL=map.js.map

/***/ }),

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VehiclePartsSelectPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the VehiclePartsSelectPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var VehiclePartsSelectPage = /** @class */ (function () {
    function VehiclePartsSelectPage(navCtrl, navParams, http, viewCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.viewCtrl = viewCtrl;
        this.selectedType = {};
        var localData = http.get('../../assets/json/vehicleParts.json').map(function (res) { return res.json(); });
        localData.subscribe(function (data) {
            _this.information = data;
            console.log(_this.information[0].vehiclePart);
        });
    }
    VehiclePartsSelectPage.prototype.toggleSection = function (i) {
        this.information[i].open = !this.information[i].open;
    };
    VehiclePartsSelectPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad VehiclePartsSelectPage');
    };
    VehiclePartsSelectPage.prototype.selectType = function (logo) {
        this.selectedType = logo;
        this.viewCtrl.dismiss(this.selectedType);
    };
    VehiclePartsSelectPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-vehicle-parts-select',template:/*ion-inline-start:"C:\Users\greshan\Documents\Freelance\Autoparts\project\autopartslk\src\pages\vehicle-parts-select\vehicle-parts-select.html"*/'<!--\n  Generated template for the VehiclePartsSelectPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Select Vehicle Part</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <ion-list class="accordion-list">\n    <!-- First Level -->\n    <ion-list-header *ngFor="let item of information; let i = index" no-lines no-padding>\n      <!-- Toggle Button -->\n      <button ion-item (click)="toggleSection(i)" detail-none [ngClass]="{\'section-active\': item.open, \'section\': !item.open}">\n        <ion-icon item-left name="arrow-forward" *ngIf="!item.open"></ion-icon>\n        <ion-icon item-left name="arrow-down" *ngIf="item.open"></ion-icon>\n        {{ item.vehiclePart }}\n      </button>\n\n      <ion-list *ngIf="item.vehicleSubPart && item.open" no-lines>\n        <!-- Second Level -->\n        <ion-list *ngFor="let child of item.vehicleSubPart; let j = index" no-padding>\n          <!-- Direct Add Button as Fallback -->\n          <ion-item *ngIf="!child.children" (click)="selectType(child)" ion-item detail-none class="child-item" text-wrap>\n            <h2>{{ child.name }}</h2>\n            \n\n          </ion-item>\n        </ion-list>\n      </ion-list>\n\n    </ion-list-header>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"C:\Users\greshan\Documents\Freelance\Autoparts\project\autopartslk\src\pages\vehicle-parts-select\vehicle-parts-select.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */]])
    ], VehiclePartsSelectPage);
    return VehiclePartsSelectPage;
}());

//# sourceMappingURL=vehicle-parts-select.js.map

/***/ })

});
//# sourceMappingURL=0.js.map