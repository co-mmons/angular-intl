import { Pipe } from "@angular/core";
import { IntlService } from "./service";
export var IntlRelativePipe = (function () {
    function IntlRelativePipe(service) {
        this.service = service;
    }
    IntlRelativePipe.prototype.transform = function (dateTime, options) {
        return this.service.relative(dateTime, options);
    };
    IntlRelativePipe.decorators = [
        { type: Pipe, args: [{
                    name: "intlRelative"
                },] },
    ];
    /** @nocollapse */
    IntlRelativePipe.ctorParameters = [
        { type: IntlService, },
    ];
    return IntlRelativePipe;
}());
export var IntlRelativeLivePipe = (function () {
    function IntlRelativeLivePipe(service) {
        this.service = service;
    }
    IntlRelativeLivePipe.prototype.transform = function (dateTime, cacheTimeOrOptions, options) {
        var cacheTime = typeof cacheTimeOrOptions == "number" ? cacheTimeOrOptions : 0;
        var now;
        if (cacheTime > 0) {
            now = Date.now();
            if (this.lastCallTime && this.lastCallTime + (cacheTime * 1000) >= now) {
                return this.lastCallResult;
            }
        }
        var result = this.service.relative(dateTime, options);
        if (cacheTime > 0) {
            this.lastCallTime = now;
            this.lastCallResult = result;
        }
        return result;
    };
    IntlRelativeLivePipe.decorators = [
        { type: Pipe, args: [{
                    name: "intlRelativeLive",
                    pure: false
                },] },
    ];
    /** @nocollapse */
    IntlRelativeLivePipe.ctorParameters = [
        { type: IntlService, },
    ];
    return IntlRelativeLivePipe;
}());
//# sourceMappingURL=relative-pipe.js.map