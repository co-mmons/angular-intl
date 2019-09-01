import * as tslib_1 from "tslib";
import { Pipe } from "@angular/core";
import { IntlService } from "./service";
var IntlDateTimeFormatPipe = /** @class */ (function () {
    function IntlDateTimeFormatPipe(service) {
        this.service = service;
    }
    IntlDateTimeFormatPipe.prototype.transform = function (dateTime, options) {
        return this.service.dateTimeFormat(dateTime, options);
    };
    IntlDateTimeFormatPipe = tslib_1.__decorate([
        Pipe({
            name: "intlDateTimeFormat"
        }),
        tslib_1.__metadata("design:paramtypes", [IntlService])
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
    IntlDateFormatPipe = tslib_1.__decorate([
        Pipe({
            name: "intlDateFormat"
        }),
        tslib_1.__metadata("design:paramtypes", [IntlService])
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
    IntlTimeFormatPipe = tslib_1.__decorate([
        Pipe({
            name: "intlTimeFormat"
        }),
        tslib_1.__metadata("design:paramtypes", [IntlService])
    ], IntlTimeFormatPipe);
    return IntlTimeFormatPipe;
}());
export { IntlTimeFormatPipe };
//# sourceMappingURL=date-time-format-pipe.js.map