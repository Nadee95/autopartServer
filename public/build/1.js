webpackJsonp([1],{

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPartsToBusinessPageModule", function() { return AddPartsToBusinessPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_parts_to_business__ = __webpack_require__(303);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AddPartsToBusinessPageModule = /** @class */ (function () {
    function AddPartsToBusinessPageModule() {
    }
    AddPartsToBusinessPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__add_parts_to_business__["a" /* AddPartsToBusinessPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__add_parts_to_business__["a" /* AddPartsToBusinessPage */]),
            ],
        })
    ], AddPartsToBusinessPageModule);
    return AddPartsToBusinessPageModule;
}());

//# sourceMappingURL=add-parts-to-business.module.js.map

/***/ }),

/***/ 300:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(7);
var map_1 = __webpack_require__(100);
Observable_1.Observable.prototype.map = map_1.map;
//# sourceMappingURL=map.js.map

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddPartsToBusinessPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_data_service_data_service__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Subject__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Subject__);
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
 * Generated class for the AddPartsToBusinessPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddPartsToBusinessPage = /** @class */ (function () {
    function AddPartsToBusinessPage(navCtrl, fb, modalCtrl, dataService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.fb = fb;
        this.modalCtrl = modalCtrl;
        this.dataService = dataService;
        this.Business = null;
        this.searchTerm$ = new __WEBPACK_IMPORTED_MODULE_5_rxjs_Subject__["Subject"]();
        this.myForm = fb.group({
            vehicleType: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            vehicleBrand: this.fb.group({
                name: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
                code: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]
            }),
            condition: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            vehicleCat: this.fb.group({
                name: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
                code: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]
            }),
            parts: this.fb.array([])
        });
        this.myForm.get('vehicleType').valueChanges.subscribe(function (val) {
            _this.myForm.controls['vehicleBrand'].reset();
        });
        this.dataService.search(this.searchTerm$)
            .subscribe(function (results) {
            _this.results = results;
        });
    }
    AddPartsToBusinessPage.prototype.selectBusiness = function (result) {
        this.Business = result;
        this.results = null;
    };
    AddPartsToBusinessPage.prototype.createPart = function (code) {
        return this.fb.group({
            'name': [code.name, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            'code': [code.code, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]
        });
    };
    AddPartsToBusinessPage.prototype.addPart = function (code) {
        this.parts = this.myForm.get('parts');
        this.parts.push(this.createPart(code));
    };
    AddPartsToBusinessPage.prototype.setType = function (vehicle) {
        this.myForm.controls['vehicleType'].setValue(vehicle);
    };
    AddPartsToBusinessPage.prototype.setCond = function (cond) {
        this.myForm.controls['condition'].setValue(cond);
    };
    AddPartsToBusinessPage.prototype.selVehicleType = function (vehicleType) {
        var _this = this;
        var vehicleModal = this.modalCtrl.create('VehicleBrandsPage', { vType: vehicleType });
        vehicleModal.onDidDismiss(function (data) {
            if (data) {
                _this.myForm['controls'].vehicleBrand['controls'].name.setValue(data.name);
                _this.myForm['controls'].vehicleBrand['controls'].code.setValue(data.code);
            }
        });
        vehicleModal.present();
    };
    AddPartsToBusinessPage.prototype.selPartType = function () {
        var _this = this;
        var partModal = this.modalCtrl.create('VehiclePartsSelectPage');
        partModal.onDidDismiss(function (data) {
            if (data) {
                _this.addPart(data);
            }
        });
        partModal.present();
    };
    AddPartsToBusinessPage.prototype.selVehicleCat = function () {
        var _this = this;
        var partModal = this.modalCtrl.create('VehicleTypePage');
        partModal.onDidDismiss(function (data) {
            if (data) {
                _this.myForm['controls'].vehicleCat['controls'].name.setValue(data.name);
                _this.myForm['controls'].vehicleCat['controls'].code.setValue(data.code);
            }
        });
        partModal.present();
    };
    AddPartsToBusinessPage.prototype.generateCodes = function () {
        var _this = this;
        var pre = this.myForm.controls['vehicleType'].value + this.myForm['controls'].vehicleBrand['controls'].code.value + this.myForm.controls['condition'].value + this.myForm['controls'].vehicleCat['controls'].code.value;
        var codes = [];
        var parts = this.myForm.get('parts');
        for (var i = 0; i < parts.length; i++) {
            codes.push(pre + parts.at(i)['controls'].code.value);
        }
        this.dataService.addPartsToBusiness(this.Business._id, codes).subscribe(function (data) {
            var d = data;
            console.log(d);
            if (d.status == 200) {
                _this.myForm.reset();
            }
        });
    };
    AddPartsToBusinessPage.prototype.addDealer = function () {
        this.navCtrl.push('AddBusinessPage');
    };
    AddPartsToBusinessPage.prototype.selDistrict = function () {
        var _this = this;
        var districtModal = this.modalCtrl.create('SelectDistrictPage');
        districtModal.onDidDismiss(function (data) {
            if (data) {
                _this.myForm.controls['district'].setValue(data);
            }
        });
        districtModal.present();
    };
    AddPartsToBusinessPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-parts-to-business',template:/*ion-inline-start:"C:\Users\greshan\Documents\Freelance\Autoparts\project\autopartslk\src\pages\add-parts-to-business\add-parts-to-business.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Autopartslk\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h2 text-center full>Add Parts To a Business</h2>\n  <ion-grid>\n    <ion-row justify-content-center>\n      <ion-col col-xs-12 col-md-8 col-lg-6>\n        <!-- Search Bar-->\n        <div *ngIf="Business==null">\n          <ion-searchbar (ionInput)="searchTerm$.next($event.target.value)" placeholder="Search for a business" showCancelButton="true"></ion-searchbar>\n          <ion-list *ngIf="results">\n            <ion-item *ngFor="let result of results | slice:0:9" (click)="selectBusiness(result)">\n              {{ result.bName }}\n            </ion-item>\n          </ion-list>\n        </div>\n        <!-- //SearchBar-->\n        <!-- Add Parts-->\n        <div *ngIf="Business!=null">\n          <ion-card>\n           <ion-card-content>\n              <ion-row>\n                <ion-col>\n                  <ion-card-title style="display:inline-block !important;">{{Business.bName}}</ion-card-title>\n                </ion-col>\n              </ion-row>\n\n              <p><strong>Owner : </strong>{{Business.owner}}</p>\n              <p><strong>Address : </strong>{{Business.address}}</p></ion-card-content>\n              <ion-row>\n                 <button ion-button icon-start block outline (click)="Business=null">\n                  <ion-icon name="close"> </ion-icon> Remove\n                </button>\n              </ion-row>\n             \n            \n          </ion-card>\n\n          <ion-label stacked>Vehicle Type</ion-label>\n          <ion-row id="vtypeRow" ion-segment justify-content-around>\n            <div col text-center class="radiox" (click)="setType(\'C\')" [ngClass]="{\'radio-select\':myForm.value.vehicleType === \'C\'}">\n              <img img-responsive src="data:image/png;base64,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">\n            </div>\n            <div col text-center class="radiox" (click)="setType(\'B\')" [ngClass]="{\'radio-select\':myForm.value.vehicleType === \'B\'}">\n              <img src="data:image/png;base64,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">\n            </div>\n            <div col text-center class="radiox" (click)="setType(\'M\')" [ngClass]="{\'radio-select\':myForm.value.vehicleType === \'M\'}">\n              <img src="data:image/png;base64,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">\n            </div>\n          </ion-row>\n\n          <form [formGroup]="myForm">\n            <ion-list radio-group hidden [formControl]="myForm.controls[\'vehicleType\']">\n              <ion-item>\n                <ion-label>Vehicle</ion-label>\n                <ion-radio name="type" value="C"></ion-radio>\n              </ion-item>\n              <ion-item>\n                <ion-label>Motorbike</ion-label>\n                <ion-radio name="type" value="B"></ion-radio>\n              </ion-item>\n              <ion-item>\n                <ion-label>Machinery</ion-label>\n                <ion-radio name="type" value="M"></ion-radio>\n              </ion-item>\n            </ion-list>\n\n            <ion-list no-lines>\n              <button ion-item [disabled]="myForm.value[\'vehicleType\']==\'\'" class="item-button" (click)="selVehicleType(myForm.value[\'vehicleType\'])">{{myForm.controls.vehicleBrand.controls.name.value\n                == null ?\n                \'Vehicle Brand\' : myForm.controls.vehicleBrand.controls.name.value }}<ion-icon item-end name="arrow-dropdown"></ion-icon></button>\n\n              <button ion-item class="item-button" (click)="selVehicleCat()">{{myForm.controls.vehicleCat.controls.name.value\n                == \'\' ?\n                \'Vehicle Category\' : myForm.controls.vehicleCat.controls.name.value }}<ion-icon item-end name="arrow-dropdown"></ion-icon></button>\n\n              <ion-row id="vtypeRow" ion-segment justify-content-around>\n\n                <ion-col align-items-center text-center class="radioy" (click)="setCond(\'B\')" [ngClass]="{\'radioy-select\':myForm.value.condition === \'B\'}">\n                  <div align-self-center>Brand New</div>\n                </ion-col>\n                <ion-col align-items-center text-center class="radioy" (click)="setCond(\'R\')" [ngClass]="{\'radioy-select\':myForm.value.condition === \'R\'}">\n                  <div>Re-conditioned</div>\n                </ion-col>\n              </ion-row>\n              <div formArrayName="parts" *ngFor="let part of myForm.get(\'parts\').value; let i = index;">\n                <ion-item>\n                  <ion-label>{{part.name}}</ion-label>\n                  <button item-end ion-button (click)=" myForm.get(\'parts\').removeAt(i)">-</button>\n                </ion-item>\n              </div>\n              <button ion-item class="item-button" (click)="selPartType()">Select a part<ion-icon item-end name="arrow-dropdown"></ion-icon></button>\n            </ion-list>\n            <button id="btnSubmit" [disabled]="!myForm.valid" (click)="generateCodes()" padding ion-button full>submit</button>\n          </form>\n        </div>\n      </ion-col>\n\n    </ion-row>\n  </ion-grid>\n </ion-content>'/*ion-inline-end:"C:\Users\greshan\Documents\Freelance\Autoparts\project\autopartslk\src\pages\add-parts-to-business\add-parts-to-business.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* ModalController */], __WEBPACK_IMPORTED_MODULE_3__providers_data_service_data_service__["a" /* DataServiceProvider */]])
    ], AddPartsToBusinessPage);
    return AddPartsToBusinessPage;
}());

//# sourceMappingURL=add-parts-to-business.js.map

/***/ })

});
//# sourceMappingURL=1.js.map