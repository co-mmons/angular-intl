var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Pipe } from "@angular/core";
import { IntlService } from "./service";
var IntlDateTimeFormatPipe = /** @class */ (function () {
    function IntlDateTimeFormatPipe(service) {
        this.service = service;
    }
    IntlDateTimeFormatPipe.prototype.transform = function (dateTime, options) {
        return this.service.dateTimeFormat(dateTime, options);
    };
    IntlDateTimeFormatPipe = __decorate([
        Pipe({
            name: "intlDateTimeFormat"
        }),
        __metadata("design:paramtypes", [IntlService])
    ], IntlDateTimeFormatPipe);
    return IntlDateTimeFormatPipe;
}());
export { IntlDateTimeFormatPipe };
var IntlDateFormatPipe = /** @class */ (function () {
    function IntlDateFormatPipe(service) {
        this.service = service;
    }
    IntlDateFormatPipe.prototype.transform = function (dateTime, options) {
        return this.service.dateFormat(dateTime, options);
    };
    IntlDateFormatPipe = __decorate([
        Pipe({
            name: "intlDateFormat"
        }),
        __metadata("design:paramtypes", [IntlService])
    ], IntlDateFormatPipe);
    return IntlDateFormatPipe;
}());
export { IntlDateFormatPipe };
var IntlTimeFormatPipe = /** @class */ (function () {
    function IntlTimeFormatPipe(service) {
        this.service = service;
    }
    IntlTimeFormatPipe.prototype.transform = function (dateTime, options) {
        return this.service.timeFormat(dateTime, options);
    };
    IntlTimeFormatPipe = __decorate([
        Pipe({
            name: "intlTimeFormat"
        }),
        __metadata("design:paramtypes", [IntlService])
    ], IntlTimeFormatPipe);
    return IntlTimeFormatPipe;
}());
export { IntlTimeFormatPipe };
//# sourceMappingURL=date-time-format-pipe.js.map