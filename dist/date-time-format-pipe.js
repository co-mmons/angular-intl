import { Pipe } from "@angular/core";
import { IntlService } from "./service";
var IntlDateTimeFormatPipe = /** @class */ (function () {
    function IntlDateTimeFormatPipe(service) {
        this.service = service;
    }
    IntlDateTimeFormatPipe.prototype.transform = function (dateTime, options) {
        return this.service.dateTimeFormat(dateTime, options);
    };
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
    return IntlTimeFormatPipe;
}());
export { IntlTimeFormatPipe };
//# sourceMappingURL=date-time-format-pipe.js.map