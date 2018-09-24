webpackJsonp([3],{

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemInfoPageModule", function() { return ItemInfoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__item_info__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_launch_navigator__ = __webpack_require__(301);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ItemInfoPageModule = /** @class */ (function () {
    function ItemInfoPageModule() {
    }
    ItemInfoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__item_info__["a" /* ItemInfoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__item_info__["a" /* ItemInfoPage */]),
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_3__ionic_native_launch_navigator__["a" /* LaunchNavigator */]]
        })
    ], ItemInfoPageModule);
    return ItemInfoPageModule;
}());

//# sourceMappingURL=item-info.module.js.map

/***/ }),

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LaunchNavigator; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__ = __webpack_require__(102);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
 * @name Launch Navigator
 * @description
 * Requires Cordova plugin: uk.co.workingedge.phonegap.plugin.launchnavigator. For more info, please see the [LaunchNavigator plugin docs](https://github.com/dpa99c/phonegap-launch-navigator).
 *
 * @usage
 * Please refer to the plugin's repo for detailed usage. This docs page only explains the Native wrapper.
 *
 * ```typescript
 * import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator';
 *
 * constructor(private launchNavigator: LaunchNavigator) { }
 *
 * ...
 *
 * let options: LaunchNavigatorOptions = {
 *   start: 'London, ON',
 *   app: LaunchNavigator.APPS.UBER
 * };
 *
 * this.launchNavigator.navigate('Toronto, ON', options)
 *   .then(
 *     success => console.log('Launched navigator'),
 *     error => console.log('Error launching navigator', error)
 *   );
 * ```
 * @interfaces
 * LaunchNavigatorOptions
 * PromptsOptions
 * RememberChoiceOptions
 * AppSelectionOptions
 * UserChoice
 * UserPrompted
 * AppSelection
 */
var LaunchNavigator = (function (_super) {
    __extends(LaunchNavigator, _super);
    function LaunchNavigator() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.APP = {
            USER_SELECT: 'user_select',
            APPLE_MAPS: 'apple_maps',
            GOOGLE_MAPS: 'google_maps',
            WAZE: 'waze',
            CITYMAPPER: 'citymapper',
            NAVIGON: 'navigon',
            TRANSIT_APP: 'transit_app',
            YANDEX: 'yandex',
            UBER: 'uber',
            TOMTOM: 'tomtom',
            BING_MAPS: 'bing_maps',
            SYGIC: 'sygic',
            HERE_MAPS: 'here_maps',
            MOOVIT: 'moovit'
        };
        _this.TRANSPORT_MODE = {
            DRIVING: 'driving',
            WALKING: 'walking',
            BICYCLING: 'bicycling',
            TRANSIT: 'transit'
        };
        return _this;
    }
    /**
     * Launches navigator app
     * @param destination {string|number[]} Location name or coordinates (as string or array)
     * @param options {LaunchNavigatorOptions}
     * @returns {Promise<any>}
     */
    /**
       * Launches navigator app
       * @param destination {string|number[]} Location name or coordinates (as string or array)
       * @param options {LaunchNavigatorOptions}
       * @returns {Promise<any>}
       */
    LaunchNavigator.prototype.navigate = /**
       * Launches navigator app
       * @param destination {string|number[]} Location name or coordinates (as string or array)
       * @param options {LaunchNavigatorOptions}
       * @returns {Promise<any>}
       */
    function (destination, options) { return; };
    /**
     * Determines if the given app is installed and available on the current device.
     * @param app {string}
     * @returns {Promise<any>}
     */
    /**
       * Determines if the given app is installed and available on the current device.
       * @param app {string}
       * @returns {Promise<any>}
       */
    LaunchNavigator.prototype.isAppAvailable = /**
       * Determines if the given app is installed and available on the current device.
       * @param app {string}
       * @returns {Promise<any>}
       */
    function (app) { return; };
    /**
     * Returns a list indicating which apps are installed and available on the current device.
     * @returns {Promise<string[]>}
     */
    /**
       * Returns a list indicating which apps are installed and available on the current device.
       * @returns {Promise<string[]>}
       */
    LaunchNavigator.prototype.availableApps = /**
       * Returns a list indicating which apps are installed and available on the current device.
       * @returns {Promise<string[]>}
       */
    function () { return; };
    /**
     * Returns the display name of the specified app.
     * @param app {string}
     * @returns {string}
     */
    /**
       * Returns the display name of the specified app.
       * @param app {string}
       * @returns {string}
       */
    LaunchNavigator.prototype.getAppDisplayName = /**
       * Returns the display name of the specified app.
       * @param app {string}
       * @returns {string}
       */
    function (app) { return; };
    /**
     * Returns list of supported apps on a given platform.
     * @param platform {string}
     * @returns {string[]}
     */
    /**
       * Returns list of supported apps on a given platform.
       * @param platform {string}
       * @returns {string[]}
       */
    LaunchNavigator.prototype.getAppsForPlatform = /**
       * Returns list of supported apps on a given platform.
       * @param platform {string}
       * @returns {string[]}
       */
    function (platform) { return; };
    /**
     * Indicates if an app on a given platform supports specification of transport mode.
     * @param app {string} specified as a string, you can use one of the constants, e.g `LaunchNavigator.APP.GOOGLE_MAPS`
     * @param platform {string}
     * @returns {boolean}
     */
    /**
       * Indicates if an app on a given platform supports specification of transport mode.
       * @param app {string} specified as a string, you can use one of the constants, e.g `LaunchNavigator.APP.GOOGLE_MAPS`
       * @param platform {string}
       * @returns {boolean}
       */
    LaunchNavigator.prototype.supportsTransportMode = /**
       * Indicates if an app on a given platform supports specification of transport mode.
       * @param app {string} specified as a string, you can use one of the constants, e.g `LaunchNavigator.APP.GOOGLE_MAPS`
       * @param platform {string}
       * @returns {boolean}
       */
    function (app, platform) { return; };
    /**
     * Returns the list of transport modes supported by an app on a given platform.
     * @param app {string}
     * @param platform {string}
     * @returns {string[]}
     */
    /**
       * Returns the list of transport modes supported by an app on a given platform.
       * @param app {string}
       * @param platform {string}
       * @returns {string[]}
       */
    LaunchNavigator.prototype.getTransportModes = /**
       * Returns the list of transport modes supported by an app on a given platform.
       * @param app {string}
       * @param platform {string}
       * @returns {string[]}
       */
    function (app, platform) { return; };
    /**
     * @param app {string}
     * @param platform {string}
     * @returns {boolean}
     */
    /**
       * @param app {string}
       * @param platform {string}
       * @returns {boolean}
       */
    LaunchNavigator.prototype.supportsDestName = /**
       * @param app {string}
       * @param platform {string}
       * @returns {boolean}
       */
    function (app, platform) { return; };
    /**
     * Indicates if an app on a given platform supports specification of start location.
     * @param app {string}
     * @param platform {string}
     * @returns {boolean}
     */
    /**
       * Indicates if an app on a given platform supports specification of start location.
       * @param app {string}
       * @param platform {string}
       * @returns {boolean}
       */
    LaunchNavigator.prototype.supportsStart = /**
       * Indicates if an app on a given platform supports specification of start location.
       * @param app {string}
       * @param platform {string}
       * @returns {boolean}
       */
    function (app, platform) { return; };
    /**
     * @param app {string}
     * @param platform {string}
     * @returns {boolean}
     */
    /**
       * @param app {string}
       * @param platform {string}
       * @returns {boolean}
       */
    LaunchNavigator.prototype.supportsStartName = /**
       * @param app {string}
       * @param platform {string}
       * @returns {boolean}
       */
    function (app, platform) { return; };
    /**
     * Indicates if an app on a given platform supports specification of launch mode.
     * Note that currently only Google Maps on Android does.
     * @param app {string}
     * @param platform {string}
     * @returns {boolean}
     */
    /**
       * Indicates if an app on a given platform supports specification of launch mode.
       * Note that currently only Google Maps on Android does.
       * @param app {string}
       * @param platform {string}
       * @returns {boolean}
       */
    LaunchNavigator.prototype.supportsLaunchMode = /**
       * Indicates if an app on a given platform supports specification of launch mode.
       * Note that currently only Google Maps on Android does.
       * @param app {string}
       * @param platform {string}
       * @returns {boolean}
       */
    function (app, platform) { return; };
    /**
     * @param destination {string | number[]}
     * @param options {LaunchNavigatorOptions}
     */
    /**
       * @param destination {string | number[]}
       * @param options {LaunchNavigatorOptions}
       */
    LaunchNavigator.prototype.userSelect = /**
       * @param destination {string | number[]}
       * @param options {LaunchNavigatorOptions}
       */
    function (destination, options) { };
    LaunchNavigator.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */] },
    ];
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({
            successIndex: 2,
            errorIndex: 3
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", Promise)
    ], LaunchNavigator.prototype, "navigate", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Promise)
    ], LaunchNavigator.prototype, "isAppAvailable", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], LaunchNavigator.prototype, "availableApps", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", String)
    ], LaunchNavigator.prototype, "getAppDisplayName", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Array)
    ], LaunchNavigator.prototype, "getAppsForPlatform", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String]),
        __metadata("design:returntype", Boolean)
    ], LaunchNavigator.prototype, "supportsTransportMode", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String]),
        __metadata("design:returntype", Array)
    ], LaunchNavigator.prototype, "getTransportModes", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String]),
        __metadata("design:returntype", Boolean)
    ], LaunchNavigator.prototype, "supportsDestName", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String]),
        __metadata("design:returntype", Boolean)
    ], LaunchNavigator.prototype, "supportsStart", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String]),
        __metadata("design:returntype", Boolean)
    ], LaunchNavigator.prototype, "supportsStartName", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String]),
        __metadata("design:returntype", Boolean)
    ], LaunchNavigator.prototype, "supportsLaunchMode", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], LaunchNavigator.prototype, "userSelect", null);
    /**
     * @name Launch Navigator
     * @description
     * Requires Cordova plugin: uk.co.workingedge.phonegap.plugin.launchnavigator. For more info, please see the [LaunchNavigator plugin docs](https://github.com/dpa99c/phonegap-launch-navigator).
     *
     * @usage
     * Please refer to the plugin's repo for detailed usage. This docs page only explains the Native wrapper.
     *
     * ```typescript
     * import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator';
     *
     * constructor(private launchNavigator: LaunchNavigator) { }
     *
     * ...
     *
     * let options: LaunchNavigatorOptions = {
     *   start: 'London, ON',
     *   app: LaunchNavigator.APPS.UBER
     * };
     *
     * this.launchNavigator.navigate('Toronto, ON', options)
     *   .then(
     *     success => console.log('Launched navigator'),
     *     error => console.log('Error launching navigator', error)
     *   );
     * ```
     * @interfaces
     * LaunchNavigatorOptions
     * PromptsOptions
     * RememberChoiceOptions
     * AppSelectionOptions
     * UserChoice
     * UserPrompted
     * AppSelection
     */
    LaunchNavigator = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["d" /* Plugin */])({
            pluginName: 'LaunchNavigator',
            plugin: 'uk.co.workingedge.phonegap.plugin.launchnavigator',
            pluginRef: 'launchnavigator',
            repo: 'https://github.com/dpa99c/phonegap-launch-navigator',
            platforms: ['Android', 'iOS', 'Windows', 'Windows Phone 8']
        })
    ], LaunchNavigator);
    return LaunchNavigator;
}(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* IonicNativePlugin */]));

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemInfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_launch_navigator__ = __webpack_require__(301);
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
 * Generated class for the ItemInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ItemInfoPage = /** @class */ (function () {
    function ItemInfoPage(navCtrl, navParams, launchNavigator) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.launchNavigator = launchNavigator;
    }
    ItemInfoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ItemInfoPage');
    };
    ItemInfoPage.prototype.navigate = function () {
        this.launchNavigator.navigate([6.9108076, 79.8609294])
            .then(function (success) { return console.log('Launched navigator'); }, function (error) { return console.log('Error launching navigator', error); });
    };
    ItemInfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-item-info',template:/*ion-inline-start:"C:\Users\greshan\Documents\Freelance\Autoparts\project\autopartslk\src\pages\item-info\item-info.html"*/'<!--\n  Generated template for the ItemInfoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>item-info</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card>\n    <ion-slides pager>\n\n      <ion-slide style="background-color: green">\n        <img src="../../assets/imgs/fake/fake1.jpg" />\n      </ion-slide>\n\n      <ion-slide style="background-color: blue">\n        <img src="../../assets/imgs/fake/fake2.jpg" />\n      </ion-slide>\n\n      <ion-slide style="background-color: red">\n        <img src="../../assets/imgs/fake/fake3.jpg" />\n      </ion-slide>\n\n    </ion-slides>\n    <ion-card-content>\n      <ion-card-title>\n        ITem Title Here\n      </ion-card-title>\n      <p>\n        Description of the item (point form/ table)\n      </p>\n      <ion-row>\n        <ion-col>\n          Name :\n        </ion-col>\n        <ion-col>\n          Description\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          Name :\n        </ion-col>\n        <ion-col>\n          Description\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          Name :\n        </ion-col>\n        <ion-col>\n          Description\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          Name :\n        </ion-col>\n        <ion-col>\n          Description\n        </ion-col>\n      </ion-row>\n    </ion-card-content>\n\n  </ion-card>\n  <ion-card>\n\n      <ion-card-header>\n       Address and Contact info\n      </ion-card-header>\n    \n      <ion-card-content>\n        No 54,\n        Colombo Road,\n        Negombo.\n      </ion-card-content>\n      <ion-row>\n        <ion-col>\n          \n          <a ion-button outline href="tel:0771122334"><ion-icon name="call" item-start></ion-icon>0771122334</a>\n        </ion-col>\n        <ion-col>\n          <button ion-button (click)="navigate()"><ion-icon name="map"></ion-icon>Open in Maps</button>\n        </ion-col>\n      </ion-row>\n    </ion-card>\n</ion-content>'/*ion-inline-end:"C:\Users\greshan\Documents\Freelance\Autoparts\project\autopartslk\src\pages\item-info\item-info.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_launch_navigator__["a" /* LaunchNavigator */]])
    ], ItemInfoPage);
    return ItemInfoPage;
}());

//# sourceMappingURL=item-info.js.map

/***/ })

});
//# sourceMappingURL=3.js.map