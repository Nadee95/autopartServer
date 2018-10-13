webpackJsonp([7],{

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Modal1PageModule", function() { return Modal1PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal1__ = __webpack_require__(306);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Modal1PageModule = /** @class */ (function () {
    function Modal1PageModule() {
    }
    Modal1PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__modal1__["a" /* Modal1Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__modal1__["a" /* Modal1Page */]),
            ],
        })
    ], Modal1PageModule);
    return Modal1PageModule;
}());

//# sourceMappingURL=modal1.module.js.map

/***/ }),

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Modal1Page; });
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


/**
 * Generated class for the Modal1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Modal1Page = /** @class */ (function () {
    //private myModal:ModalController
    function Modal1Page(navCtrl, navParams, view, myModal) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.view = view;
        this.myModal = myModal;
    }
    Modal1Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Modal1Page');
        var getData = this.navParams.get('name');
        console.log(getData);
        this.headr = getData.vehicleType;
        this.items = getData.brands;
        this.temp = getData.brands; //tried to fix  toLowerCase() order prblm
    };
    Modal1Page.prototype.closeModal = function () {
        this.view.dismiss();
    };
    Modal1Page.prototype.initializeItems = function () {
        this.items = this.temp;
    };
    Modal1Page.prototype.getItems = function (ev) {
        // Reset items back to all of the items
        this.initializeItems();
        // set val to the value of the searchbar
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.items = this.items.filter(function (item) {
                return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
            console.log(this.items);
        }
    };
    Modal1Page.prototype.modal2 = function (name) {
        var modal = this.myModal.create("Modal2Page", { name: name });
        modal.present();
    };
    Modal1Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-modal1',template:/*ion-inline-start:"C:\Users\greshan\Documents\Freelance\Autoparts\project\autopartslk\src\pages\modal1\modal1.html"*/'<!--\n\n  Generated template for the Modal1Page page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n   \n\n    \n\n    <button ion-button  icon-only (click)=\'closeModal()\'>\n\n        <ion-icon name="arrow-back"></ion-icon>\n\n      </button>\n\n       <ion-title style="text-align:center;" >{{headr}}</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n	<!-- <ion-card>\n\n		 <ion-item  *ngFor="let brand of items">\n\n	    {{brand}}\n\n\n\n	  </ion-item>\n\n	</ion-card> -->\n\n	<ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n\n	<ion-list>\n\n	   <ion-item  *ngFor="let brand of items" (click)=\'modal2(items)\'>\n\n	    {{brand}}\n\n	  </ion-item>\n\n	</ion-list>\n\n\n\n\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"C:\Users\greshan\Documents\Freelance\Autoparts\project\autopartslk\src\pages\modal1\modal1.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]])
    ], Modal1Page);
    return Modal1Page;
}());

//# sourceMappingURL=modal1.js.map

/***/ })

});
//# sourceMappingURL=7.js.map