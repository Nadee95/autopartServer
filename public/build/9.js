webpackJsonp([9],{

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddBusinessPageModule", function() { return AddBusinessPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_business__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AddBusinessPageModule = /** @class */ (function () {
    function AddBusinessPageModule() {
    }
    AddBusinessPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__add_business__["a" /* AddBusinessPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__add_business__["a" /* AddBusinessPage */]),
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* ReactiveFormsModule */]
            ],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_2__add_business__["a" /* AddBusinessPage */]]
        })
    ], AddBusinessPageModule);
    return AddBusinessPageModule;
}());

//# sourceMappingURL=add-business.module.js.map

/***/ }),

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddBusinessPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_data_service_data_service__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddBusinessPage = /** @class */ (function () {
    function AddBusinessPage(navCtrl, http, modalCtrl, LoadingCtrl, fb, dataService) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.modalCtrl = modalCtrl;
        this.LoadingCtrl = LoadingCtrl;
        this.fb = fb;
        this.dataService = dataService;
        /*   var  url='./assets/json/customer.json';
          this.http.get(url).subscribe(data => {
         this.items= this.customers = data.json();
                console.log(this.customers);
            });
     */
        this.businessForm = fb.group({
            'bName': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            'owner': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            'address': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            'nearestTown': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            'district': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            contacts: this.fb.array([this.createContact()]),
            'email': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            // 'pno':['',Validators.required],
            'location': fb.group({
                'lat': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                'lon': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]
            })
        });
    }
    AddBusinessPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddBusinessPage');
    };
    AddBusinessPage.prototype.createContact = function () {
        return this.fb.control('');
    };
    AddBusinessPage.prototype.addContact = function () {
        this.contacts = this.businessForm.get('contacts');
        this.contacts.push(this.createContact());
    };
    AddBusinessPage.prototype.removeContact = function (idc) {
        this.contacts.removeAt(idc);
    };
    AddBusinessPage.prototype.selDistrict = function () {
        var _this = this;
        var districtModal = this.modalCtrl.create('SelectDistrictPage');
        districtModal.onDidDismiss(function (data) {
            if (data) {
                _this.businessForm.controls['district'].setValue(data);
            }
        });
        districtModal.present();
    };
    AddBusinessPage.prototype.addBusiness = function () {
        this.dataService.addBusiness(this.businessForm.value).subscribe(function (data) {
            var d = data;
            console.log(d);
        });
    };
    AddBusinessPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-business',template:/*ion-inline-start:"C:\Users\greshan\Documents\Freelance\Autoparts\project\autopartslk\src\pages\add-business\add-business.html"*/'<ion-header>\n	<ion-navbar>\n		<ion-title>\n			Add Business\n		</ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content>\n	<ion-row justify-content-center>\n	<ion-card col-sm-12 col-md-6 >\n		<ion-card-title text-center> Add Business </ion-card-title>\n		<ion-card-content>\n			<form [formGroup]="businessForm" novalidate>\n				<ion-item>\n					<ion-label floating>Name of the Business:</ion-label>\n					<ion-input type="text" class="form-control" value="" formControlName="bName"></ion-input>\n				</ion-item>\n				<ion-item>\n					<ion-label floating>Owner/Manager:</ion-label>\n					<ion-input type="text" class="form-control" value="" formControlName="owner"></ion-input>\n				</ion-item>\n				<ion-item>\n					<ion-label floating>Address:</ion-label>\n					<ion-input type="text" class="form-control" value="" formControlName="address"></ion-input>\n				</ion-item>\n				<ion-item>\n					<ion-label floating>Nearest Town:</ion-label>\n					<ion-input type="text" class="form-control" value="" formControlName="nearestTown"> </ion-input>\n				</ion-item>\n				<button ion-item class="item-button" (click)="selDistrict()">{{businessForm.value[\'district\'] == \'\' ? \'District\' : businessForm.value[\'district\'] }}<ion-icon item-end name="arrow-dropdown"></ion-icon></button>\n				<div formArrayName="contacts" *ngFor="let contact of businessForm.get(\'contacts\').controls; let i = index;">\n					<ion-item [formControlName]="i">\n						<ion-label floating>Contact No <span *ngIf="businessForm.get(\'contacts\').length>1">{{i+1}}</span></ion-label>\n						<ion-input class="form-control"></ion-input>\n						<button item-end ion-button *ngIf="businessForm.get(\'contacts\').length>1" (click)="removeContact(i)">-</button>\n					</ion-item>\n				</div>\n				<ion-item>\n\n					<button ion-button item-end (click)="addContact()">Add</button>\n				</ion-item>\n				<ion-item>\n					<ion-label floating>E-mail:</ion-label>\n					<ion-input type="email" class="form-control" value="" formControlName="email"></ion-input>\n				</ion-item>\n				<!--\n				<ion-item>\n					<ion-label floating>Photo NO:</ion-label>\n					<ion-input type="text" class="form-control" value="" formControlName="pno"></ion-input>\n				</ion-item>\n				-->\n				<div formGroupName="location">\n					<ion-item>\n						<ion-label floating>GPS lat:</ion-label>\n						<ion-input type="text" class="form-control" value="" formControlName="lat"></ion-input>\n					</ion-item>\n					<ion-item>\n						<ion-label floating>GPS Lon:</ion-label>\n						<ion-input type="text" class="form-control" value="" formControlName="lon"></ion-input>\n					</ion-item>\n				</div>\n\n				<ion-item style="margin-bottom: 0.2rem">\n					<button ion-button block default large (click)="addBusiness()">Add</button>\n				</ion-item>\n			</form>\n		</ion-card-content>\n	</ion-card>\n</ion-row>\n{{businessForm.value | json}}\n\n</ion-content>'/*ion-inline-end:"C:\Users\greshan\Documents\Freelance\Autoparts\project\autopartslk\src\pages\add-business\add-business.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_4__providers_data_service_data_service__["a" /* DataServiceProvider */]])
    ], AddBusinessPage);
    return AddBusinessPage;
}());

//# sourceMappingURL=add-business.js.map

/***/ })

});
//# sourceMappingURL=9.js.map