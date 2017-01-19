import { Pipe } from "@angular/core";
import { IntlService } from "./service";
export var IntlDateTimePipe = (function () {
    function IntlDateTimePipe(service) {
        this.service = service;
    }
    IntlDateTimePipe.prototype.transform = function (dateTime, options) {
        return this.service.dateTime(dateTime, options);
    };
    IntlDateTimePipe.decorators = [
        { type: Pipe, args: [{
                    name: "intlDateTime"
                },] },
    ];
    /** @nocollapse */
    IntlDateTimePipe.ctorParameters = [
        { type: IntlService, },
    ];
    return IntlDateTimePipe;
}());
export var IntlDatePipe = (function () {
    function IntlDatePipe(service) {
        this.service = service;
    }
    IntlDatePipe.prototype.transform = function (dateTime, options) {
        return this.service.date(dateTime, options);
    };
    IntlDatePipe.decorators = [
        { type: Pipe, args: [{
                    name: "intlDate"
                },] },
    ];
    /** @nocollapse */
    IntlDatePipe.ctorParameters = [
        { type: IntlService, },
    ];
    return IntlDatePipe;
}());
export var IntlTimePipe = (function () {
    function IntlTimePipe(service) {
        this.service = service;
    }
    IntlTimePipe.prototype.transform = function (dateTime, options) {
        return this.service.time(dateTime, options);
    };
    IntlTimePipe.decorators = [
        { type: Pipe, args: [{
                    name: "intlTime"
                },] },
    ];
    /** @nocollapse */
    IntlTimePipe.ctorParameters = [
        { type: IntlService, },
    ];
    return IntlTimePipe;
}());
//# sourceMappingURL=datetime-pipe.js.map