import { Pipe } from "@angular/core";
import { IntlService } from "./service";
export var IntlDateTimeFormatPipe = (function () {
    function IntlDateTimeFormatPipe(service) {
        this.service = service;
    }
    IntlDateTimeFormatPipe.prototype.transform = function (dateTime, options) {
        return this.service.dateTimeFormat(dateTime, options);
    };
    IntlDateTimeFormatPipe.decorators = [
        { type: Pipe, args: [{
                    name: "intlDateTimeFormat"
                },] },
    ];
    /** @nocollapse */
    IntlDateTimeFormatPipe.ctorParameters = function () { return [
        { type: IntlService, },
    ]; };
    return IntlDateTimeFormatPipe;
}());
export var IntlDateFormatPipe = (function () {
    function IntlDateFormatPipe(service) {
        this.service = service;
    }
    IntlDateFormatPipe.prototype.transform = function (dateTime, options) {
        return this.service.dateFormat(dateTime, options);
    };
    IntlDateFormatPipe.decorators = [
        { type: Pipe, args: [{
                    name: "intlDateFormat"
                },] },
    ];
    /** @nocollapse */
    IntlDateFormatPipe.ctorParameters = function () { return [
        { type: IntlService, },
    ]; };
    return IntlDateFormatPipe;
}());
export var IntlTimeFormatPipe = (function () {
    function IntlTimeFormatPipe(service) {
        this.service = service;
    }
    IntlTimeFormatPipe.prototype.transform = function (dateTime, options) {
        return this.service.timeFormat(dateTime, options);
    };
    IntlTimeFormatPipe.decorators = [
        { type: Pipe, args: [{
                    name: "intlTimeFormat"
                },] },
    ];
    /** @nocollapse */
    IntlTimeFormatPipe.ctorParameters = function () { return [
        { type: IntlService, },
    ]; };
    return IntlTimeFormatPipe;
}());
//# sourceMappingURL=date-time-format-pipe.js.map