webpackJsonp([2],{

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleBrandsPageModule", function() { return VehicleBrandsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vehicle_brands__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__filter_pipe__ = __webpack_require__(309);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var VehicleBrandsPageModule = /** @class */ (function () {
    function VehicleBrandsPageModule() {
    }
    VehicleBrandsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__vehicle_brands__["a" /* VehicleBrandsPage */], __WEBPACK_IMPORTED_MODULE_3__filter_pipe__["a" /* FilterPipe */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__vehicle_brands__["a" /* VehicleBrandsPage */]),
            ],
        })
    ], VehicleBrandsPageModule);
    return VehicleBrandsPageModule;
}());

//# sourceMappingURL=vehicle-brands.module.js.map

/***/ }),

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VehicleBrandsPage; });
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



var VehicleBrandsPage = /** @class */ (function () {
    function VehicleBrandsPage(http, viewCtrl, navCtrl, navParams) {
        /*var  url='../../assets/json/VehicleBrandsbyType.json';
          this.http.get(url).map(res => res.json()).subscribe(data => {
          this.brands=data.brands;
        });*/
        this.http = http;
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.url = "../..assets/imgs/vehicle-brands/";
        this.brands = {
            "B": [
                {
                    "logo": "vehicle/BMW.png",
                    "name": "BMW",
                    "code": "AA"
                },
                {
                    "logo": "vehicle/Bajaj.png",
                    "name": "Bajaj",
                    "code": "AB"
                },
                {
                    "logo": "vehicle/Demak.png",
                    "name": "Demak",
                    "code": "AC"
                },
                {
                    "logo": "vehicle/Ducati.png",
                    "name": "Ducati",
                    "code": "AD"
                },
                {
                    "logo": "vehicle/Hero-Honda.png",
                    "name": "Hero-Honda",
                    "code": "AE"
                },
                {
                    "logo": "vehicle/Hero.png",
                    "name": "Hero",
                    "code": "AF"
                },
                {
                    "logo": "vehicle/Honda.png",
                    "name": "Honda",
                    "code": "AG"
                },
                {
                    "logo": "vehicle/Kawasaki.png",
                    "name": "Kawasaki",
                    "code": "AH"
                },
                {
                    "logo": "vehicle/Mahindra.png",
                    "name": "Mahindra",
                    "code": "AI"
                },
                {
                    "logo": "vehicle/Piaggio.png",
                    "name": "Piaggio",
                    "code": "AJ"
                },
                {
                    "logo": "vehicle/Suzuki.png",
                    "name": "Suzuki",
                    "code": "AK"
                },
                {
                    "logo": "vehicle/TVS.png",
                    "name": "TVS",
                    "code": "AL"
                },
                {
                    "logo": "vehicle/Yamaha.png",
                    "name": "Yamaha",
                    "code": "AM"
                }
            ],
            "C": [
                {
                    "logo": "vehicle/Acura.png",
                    "name": "Acura",
                    "code": "CA"
                },
                {
                    "logo": "vehicle/Ashok Leyland.png",
                    "name": "Ashok Leyland",
                    "code": "CB"
                },
                {
                    "logo": "vehicle/Audi.png",
                    "name": "Audi",
                    "code": "CC"
                },
                {
                    "logo": "vehicle/BMW.png",
                    "name": "BMW",
                    "code": "CD"
                },
                {
                    "logo": "vehicle/Buick.png",
                    "name": "Buick",
                    "code": "CE"
                },
                {
                    "logo": "vehicle/Chevrolet.png",
                    "name": "Chevrolet",
                    "code": "CF"
                },
                {
                    "logo": "vehicle/Dacia.png",
                    "name": "Dacia",
                    "code": "CG"
                },
                {
                    "logo": "vehicle/Daewoo.png",
                    "name": "Daewoo",
                    "code": "CH"
                },
                {
                    "logo": "vehicle/Daihatsu.png",
                    "name": "Daihatsu",
                    "code": "CI"
                },
                {
                    "logo": "vehicle/Dimo.png",
                    "name": "Dimo",
                    "code": "CJ"
                },
                {
                    "logo": "vehicle/Dodge.png",
                    "name": "Dodge",
                    "code": "CK"
                },
                {
                    "logo": "vehicle/Eicher.png",
                    "name": "Eicher",
                    "code": "CL"
                },
                {
                    "logo": "vehicle/Escort.png",
                    "name": "Escort",
                    "code": "CM"
                },
                {
                    "logo": "vehicle/Fiat.png",
                    "name": "Fiat",
                    "code": "CN"
                },
                {
                    "logo": "vehicle/Ford.png",
                    "name": "Ford",
                    "code": "CO"
                },
                {
                    "logo": "vehicle/Honda.png",
                    "name": "Honda",
                    "code": "CP"
                },
                {
                    "logo": "vehicle/Hyundai.png",
                    "name": "Hyundai",
                    "code": "CQ"
                },
                {
                    "logo": "vehicle/Isuzu.png",
                    "name": "Isuzu",
                    "code": "CR"
                },
                {
                    "logo": "vehicle/Iveco.png",
                    "name": "Iveco",
                    "code": "CS"
                },
                {
                    "logo": "vehicle/Jaguar.png",
                    "name": "Jaguar",
                    "code": "CT"
                },
                {
                    "logo": "vehicle/Jeep.png",
                    "name": "Jeep",
                    "code": "CU"
                },
                {
                    "logo": "vehicle/Kia.png",
                    "name": "Kia",
                    "code": "CV"
                },
                {
                    "logo": "vehicle/Land Rover.png",
                    "name": "Land Rover",
                    "code": "CW"
                },
                {
                    "logo": "vehicle/Leaf.png",
                    "name": "Leaf",
                    "code": "CX"
                },
                {
                    "logo": "vehicle/Lexus.png",
                    "name": "Lexus",
                    "code": "CY"
                },
                {
                    "logo": "vehicle/MG.png",
                    "name": "MG",
                    "code": "CZ"
                },
                {
                    "logo": "vehicle/Maruti.png",
                    "name": "Maruti",
                    "code": "DA"
                },
                {
                    "logo": "vehicle/Mazda.png",
                    "name": "Mazda",
                    "code": "DB"
                },
                {
                    "logo": "vehicle/Mercedes Benz.png",
                    "name": "Mercedes Benz",
                    "code": "DC"
                },
                {
                    "logo": "vehicle/Micro.png",
                    "name": "Micro",
                    "code": "DD"
                },
                {
                    "logo": "vehicle/Mini.png",
                    "name": "Mini",
                    "code": "DE"
                },
                {
                    "logo": "vehicle/Mitsubishi.png",
                    "name": "Mitsubishi",
                    "code": "DF"
                },
                {
                    "logo": "vehicle/Nissan.png",
                    "name": "Nissan",
                    "code": "DG"
                },
                {
                    "logo": "vehicle/Opel.png",
                    "name": "Opel",
                    "code": "DH"
                },
                {
                    "logo": "vehicle/Perodua.png",
                    "name": "Perodua",
                    "code": "DI"
                },
                {
                    "logo": "vehicle/Peugeot.png",
                    "name": "Peugeot",
                    "code": "DJ"
                },
                {
                    "logo": "vehicle/Porsche.png",
                    "name": "Porsche",
                    "code": "DK"
                },
                {
                    "logo": "vehicle/Proton.png",
                    "name": "Proton",
                    "code": "DL"
                },
                {
                    "logo": "vehicle/Renault.png",
                    "name": "Renault",
                    "code": "DM"
                },
                {
                    "logo": "vehicle/Saab.png",
                    "name": "Saab",
                    "code": "DN"
                },
                {
                    "logo": "vehicle/Scion.png",
                    "name": "Scion",
                    "code": "DO"
                },
                {
                    "logo": "vehicle/Seat.png",
                    "name": "Seat",
                    "code": "DP"
                },
                {
                    "logo": "vehicle/Skoda.png",
                    "name": "Skoda",
                    "code": "DQ"
                },
                {
                    "logo": "vehicle/SsangYong.png",
                    "name": "SsangYong",
                    "code": "DR"
                },
                {
                    "logo": "vehicle/Subaru.png",
                    "name": "Subaru",
                    "code": "DS"
                },
                {
                    "logo": "vehicle/Suzuki.png",
                    "name": "Suzuki",
                    "code": "DT"
                },
                {
                    "logo": "vehicle/TATA.png",
                    "name": "TATA",
                    "code": "DU"
                },
                {
                    "logo": "vehicle/TOYOTA.png",
                    "name": "TOYOTA",
                    "code": "DV"
                },
                {
                    "logo": "vehicle/Vauxhall.png",
                    "name": "Vauxhall",
                    "code": "DW"
                },
                {
                    "logo": "vehicle/Volkswagen.png",
                    "name": "Volkswagen",
                    "code": "DX"
                },
                {
                    "logo": "vehicle/Volvo.png",
                    "name": "Volvo",
                    "code": "DY"
                }
            ],
            "M": [
                {
                    "logo": "vehicle/AUSA.png",
                    "name": "AUSA",
                    "code": "EA"
                },
                {
                    "logo": "vehicle/Atlas Copco.png",
                    "name": "Atlas Copco",
                    "code": "EB"
                },
                {
                    "logo": "vehicle/BOMAG.png",
                    "name": "BOMAG",
                    "code": "EC"
                },
                {
                    "logo": "vehicle/BOSTITCH.png",
                    "name": "BOSTITCH",
                    "code": "ED"
                },
                {
                    "logo": "vehicle/CASE.png",
                    "name": "CASE",
                    "code": "EE"
                },
                {
                    "logo": "vehicle/CAT.png",
                    "name": "CAT",
                    "code": "EF"
                },
                {
                    "logo": "vehicle/CATERPILLAR.png",
                    "name": "CATERPILLAR",
                    "code": "EG"
                },
                {
                    "logo": "vehicle/CORMIDI.png",
                    "name": "CORMIDI",
                    "code": "EH"
                },
                {
                    "logo": "vehicle/Cummins.png",
                    "name": "Cummins",
                    "code": "EI"
                },
                {
                    "logo": "vehicle/DAEWOO.png",
                    "name": "DAEWOO",
                    "code": "EJ"
                },
                {
                    "logo": "vehicle/DOOSAN.png",
                    "name": "DOOSAN",
                    "code": "EK"
                },
                {
                    "logo": "vehicle/DeWALT.png",
                    "name": "DeWALT",
                    "code": "EL"
                },
                {
                    "logo": "vehicle/GENERAC.png",
                    "name": "GENERAC",
                    "code": "EM"
                },
                {
                    "logo": "vehicle/HILTI.png",
                    "name": "HILTI",
                    "code": "EN"
                },
                {
                    "logo": "vehicle/HONDA.png",
                    "name": "HONDA",
                    "code": "EO"
                },
                {
                    "logo": "vehicle/HYUNDAI.png",
                    "name": "HYUNDAI",
                    "code": "EP"
                },
                {
                    "logo": "vehicle/JCB.png",
                    "name": "JCB",
                    "code": "EQ"
                },
                {
                    "logo": "vehicle/John Deere.png",
                    "name": "John Deere",
                    "code": "ER"
                },
                {
                    "logo": "vehicle/KOMATSU.png",
                    "name": "KOMATSU",
                    "code": "ES"
                },
                {
                    "logo": "vehicle/LIEBHERR.png",
                    "name": "LIEBHERR",
                    "code": "ET"
                },
                {
                    "logo": "vehicle/MERLO.png",
                    "name": "MERLO",
                    "code": "EU"
                },
                {
                    "logo": "vehicle/Massey Ferguson.png",
                    "name": "Massey Ferguson",
                    "code": "EV"
                },
                {
                    "logo": "vehicle/Mitsubishi.png",
                    "name": "Mitsubishi",
                    "code": "EW"
                },
                {
                    "logo": "vehicle/New Holland.png",
                    "name": "New Holland",
                    "code": "EX"
                },
                {
                    "logo": "vehicle/OZTEC.png",
                    "name": "OZTEC",
                    "code": "EY"
                },
                {
                    "logo": "vehicle/REMINGTON.png",
                    "name": "REMINGTON",
                    "code": "EZ"
                },
                {
                    "logo": "vehicle/SENCO.png",
                    "name": "SENCO",
                    "code": "FA"
                },
                {
                    "logo": "vehicle/STIHL.png",
                    "name": "STIHL",
                    "code": "FB"
                },
                {
                    "logo": "vehicle/TEREX.png",
                    "name": "TEREX",
                    "code": "FC"
                },
                {
                    "logo": "vehicle/Tafe.png",
                    "name": "Tafe",
                    "code": "FD"
                },
                {
                    "logo": "vehicle/Thwaites.png",
                    "name": "Thwaites",
                    "code": "FE"
                },
                {
                    "logo": "vehicle/VOLVO.png",
                    "name": "VOLVO",
                    "code": "FF"
                },
                {
                    "logo": "vehicle/YANMAR.png",
                    "name": "YANMAR",
                    "code": "FG"
                },
                {
                    "logo": "vehicle/kubota.png",
                    "name": "kubota",
                    "code": "FH"
                },
                {
                    "logo": "vehicle/takeuchi.png",
                    "name": "takeuchi",
                    "code": "FI"
                }
            ]
        };
        this.type = this.navParams.get('vType');
        console.log(this.navParams.get('vType'));
    }
    VehicleBrandsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad VehicleBrandsPage');
    };
    VehicleBrandsPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss(this.selectedLogo);
    };
    VehicleBrandsPage.prototype.selectBrand = function (logo) {
        this.selectedLogo = logo;
        this.viewCtrl.dismiss(this.selectedLogo);
    };
    VehicleBrandsPage.prototype.getSrc = function (logo) {
        return this.url + logo;
    };
    VehicleBrandsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-vehicle-brands',template:/*ion-inline-start:"C:\Users\greshan\Documents\Freelance\Autoparts\project\autopartslk\src\pages\vehicle-brands\vehicle-brands.html"*/'<!--\n  Generated template for the VehicleBrandsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-buttons>\n      <button navPop item-end>\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Select Vehicle Brand</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-searchbar [(ngModel)]="searchText" [showCancelButton]="shouldShowCancel">\n  </ion-searchbar>\n  <ion-list>\n    <ion-item *ngFor="let brand of brands[type] | filter : searchText" (click)="selectBrand(brand)">\n      {{brand.name}}\n      <div item-start class="vehicle-thumb" [ngStyle]="{\'background-image\':\'url(./assets/imgs/\'+brand.logo+\')\'}"></div>\n    </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"C:\Users\greshan\Documents\Freelance\Autoparts\project\autopartslk\src\pages\vehicle-brands\vehicle-brands.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], VehicleBrandsPage);
    return VehicleBrandsPage;
}());

//# sourceMappingURL=vehicle-brands.js.map

/***/ }),

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterPipe = /** @class */ (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (items, searchText) {
        if (!items)
            return [];
        if (!searchText)
            return items;
        searchText = searchText.toLowerCase();
        return items.filter(function (it) {
            return (it.name.toLowerCase().includes(searchText));
        });
    };
    FilterPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'filter'
        })
    ], FilterPipe);
    return FilterPipe;
}());

//# sourceMappingURL=filter.pipe.js.map

/***/ })

});
//# sourceMappingURL=2.js.map