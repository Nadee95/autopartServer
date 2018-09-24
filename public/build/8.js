webpackJsonp([8],{

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnterItemsPageModule", function() { return EnterItemsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__enter_items__ = __webpack_require__(304);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EnterItemsPageModule = /** @class */ (function () {
    function EnterItemsPageModule() {
    }
    EnterItemsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__enter_items__["a" /* EnterItemsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__enter_items__["a" /* EnterItemsPage */]),
            ],
        })
    ], EnterItemsPageModule);
    return EnterItemsPageModule;
}());

//# sourceMappingURL=enter-items.module.js.map

/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnterItemsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(200);
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
 * Generated class for the EnterItemsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EnterItemsPage = /** @class */ (function () {
    function EnterItemsPage(navCtrl, navParams, http, LoadingCtrl, view, myModal) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.LoadingCtrl = LoadingCtrl;
        this.view = view;
        this.myModal = myModal;
        this.searchQuery = '';
        var url = './assets/json/.json';
        this.http.get(url).subscribe(function (data) {
            _this.items = _this.customers = data.json();
            console.log(_this.customers);
        });
    }
    EnterItemsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EnterItemsPage');
    };
    EnterItemsPage.prototype.initializeItems = function () {
        this.items = this.customers;
    };
    /* getItems(ev: any) {
      // Reset items back to all of the items
      this.initializeItems();
  
      // set val to the value of the searchbar
      const val = ev.target.value;
  
      // if the value is an empty string don't filter the items
      if (val && val.trim() != '') {
  
        this.items = this.items.filter((item) => {
          return (item.indexOf(val.toLowerCase()) > -1);
        })
        console.log(this.items);
   }
    } */
    EnterItemsPage.prototype.btnClick = function () {
        //this.navCtrl.push(VehicleTypePage)
        var modal = this.myModal.create("VehicleTypePage");
        modal.present();
    };
    EnterItemsPage.prototype.refreshFields = function () {
        /* document.getElementById('textField1').requiredField = '';
         document.getElementById('textField2').setAdjacentHTML('beforeend','');
         document.getElementById('textField3').insertAdjacentHTML('beforeend','');
         document.getElementById('textField4').insertAdjacentHTML('beforeend','');
         document.getElementById('textField5').insertAdjacentHTML('beforeend','');
         document.getElementById('textField6').insertAdjacentHTML('beforeend','');
         document.getElementById('textField7').insertAdjacentHTML('beforeend','');
         document.getElementById('textField8').insertAdjacentHTML('beforeend','');
         document.getElementById('textField9').insertAdjacentHTML('beforeend','');
         document.getElementById('textField10').insertAdjacentHTML('beforeend','');
         document.getElementById('textField11').insertAdjacentHTML('beforeend','');*/
    };
    EnterItemsPage.prototype.loadDetail = function (Customer) {
        ///console.log(Customer.district);
        this.refreshFields();
        document.getElementById('textField1').insertAdjacentHTML('beforeend', Customer.business);
        document.getElementById('textField2').insertAdjacentHTML('beforeend', Customer.name);
        document.getElementById('textField3').insertAdjacentHTML('beforeend', Customer.address);
        document.getElementById('textField4').insertAdjacentHTML('beforeend', Customer.nearestTown);
        document.getElementById('textField5').insertAdjacentHTML('beforeend', Customer.district);
        document.getElementById('textField6').insertAdjacentHTML('beforeend', Customer.contactNumber);
        document.getElementById('textField7').insertAdjacentHTML('beforeend', Customer.hp);
        document.getElementById('textField8').insertAdjacentHTML('beforeend', Customer.email);
        document.getElementById('textField9').insertAdjacentHTML('beforeend', Customer.photo_no);
        document.getElementById('textField10').insertAdjacentHTML('beforeend', Customer.lat);
        document.getElementById('textField11').insertAdjacentHTML('beforeend', Customer.Lon);
    };
    EnterItemsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-enter-items',template:/*ion-inline-start:"C:\Users\greshan\Documents\Freelance\Autoparts\project\autopartslk\src\pages\enter-items\enter-items.html"*/'<!--\n  Generated template for the EnterItemsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>enterItems</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-card>\n\n        <ion-card-header> Customer Details </ion-card-header>\n    \n        <ion-row>\n    \n          <ion-col col-10>\n    \n            <ion-searchbar [(ngModel)]="searchText"></ion-searchbar>\n    \n            <ion-list>\n    \n              <ion-item *ngFor="let Customer of customers | filter: searchText">\n                <strong>{{ Customer.name }}</strong> - {{Customer.nearestTown}}\n              </ion-item>\n            </ion-list>\n          </ion-col>\n          <ion-col>\n          </ion-col>\n    \n        </ion-row>\n    \n        <ion-card-content>\n    \n          <ion-item>\n    \n            <ion-label floating>Name of thBusiness:</ion-label>\n    \n            <ion-input type="text" id="textField1"></ion-input>\n    \n          </ion-item>\n    \n          <ion-item>\n    \n            <ion-label floating>Owner/Manager:</ion-label>\n    \n            <ion-input type="text" id="textField2"></ion-input>\n    \n          </ion-item>\n    \n          <ion-item>\n    \n            <ion-label floating>Address:</ion-label>\n    \n            <ion-input type="text" id="textField3"></ion-input>\n    \n          </ion-item>\n    \n          <ion-item>\n    \n            <ion-label floating>Nearest Town:</ion-label>\n    \n            <ion-input type="text" id="textField4"> </ion-input>\n    \n          </ion-item>\n    \n          <ion-item>\n    \n            <ion-label floating>District:</ion-label>\n    \n            <ion-input type="text" id="textField5"></ion-input>\n    \n          </ion-item>\n    \n          <ion-item>\n    \n            <ion-label floating>Contact Number:LP:</ion-label>\n    \n            <ion-input type="text" id="textField6"></ion-input>\n    \n          </ion-item>\n    \n          <ion-item>\n    \n            <ion-label floating>Contact Number:HP:</ion-label>\n    \n            <ion-input type="text" id="textField7"></ion-input>\n    \n          </ion-item>\n    \n          <ion-item>\n    \n            <ion-label floating>E-mail:</ion-label>\n    \n            <ion-input type="text" id="textField8"></ion-input>\n    \n          </ion-item>\n    \n          <ion-item>\n    \n            <ion-label floating>Photo NO:</ion-label>\n    \n            <ion-input type="text" id="textField9"></ion-input>\n    \n          </ion-item>\n    \n    \n    \n          <ion-item>\n    \n            <ion-label floating>GPS lat:</ion-label>\n    \n            <ion-input type="text" id="textField10"></ion-input>\n    \n          </ion-item>\n    \n          <ion-item>\n    \n            <ion-label floating>GPS Lon:</ion-label>\n    \n            <ion-input type="text" id="textField11"></ion-input>\n    \n          </ion-item>\n    \n          <ion-item style="margin-bottom: 0.2rem">\n    \n            <button style="background-color: #cc0000;" ion-button item-end (click)="btnClick()" large>Next</button>\n    \n          </ion-item>\n    \n    \n    \n        </ion-card-content>\n    \n      </ion-card>\n    \n</ion-content>\n'/*ion-inline-end:"C:\Users\greshan\Documents\Freelance\Autoparts\project\autopartslk\src\pages\enter-items\enter-items.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]])
    ], EnterItemsPage);
    return EnterItemsPage;
}());

//# sourceMappingURL=enter-items.js.map

/***/ })

});
//# sourceMappingURL=8.js.map