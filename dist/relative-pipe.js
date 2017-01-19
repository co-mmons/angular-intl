import { Pipe } from "@angular/core";
import { IntlService } from "./service";
export var IntlRelativeStaticPipe = (function () {
    function IntlRelativeStaticPipe(service) {
        this.service = service;
    }
    IntlRelativeStaticPipe.prototype.transform = function (dateTime, options) {
        return this.service.relative(dateTime, options);
    };
    IntlRelativeStaticPipe.decorators = [
        { type: Pipe, args: [{
                    name: "intlRelativeStatic"
                },] },
    ];
    /** @nocollapse */
    IntlRelativeStaticPipe.ctorParameters = [
        { type: IntlService, },
    ];
    return IntlRelativeStaticPipe;
}());
export var IntlRelativePipe = (function () {
    function IntlRelativePipe(service) {
        this.service = service;
        this.callCount = 0;
    }
    IntlRelativePipe.prototype.transform = function (dateTime, cacheTimeOrOptions, options) {
        var now;
        var cacheTime;
        if (typeof cacheTimeOrOptions == "number") {
            cacheTime = cacheTimeOrOptions;
        }
        else if (cacheTimeOrOptions && typeof cacheTimeOrOptions === "object") {
            options = cacheTimeOrOptions;
        }
        if (typeof cacheTime === "undefined") {
            cacheTime = (this.callCount || 1) * 10;
        }
        if (cacheTime > 0) {
            now = Date.now();
            if (this.callTime && this.callTime + (cacheTime * 1000) >= now) {
                return this.callResult;
            }
        }
        var result = this.service.relative(dateTime, options);
        if (cacheTime > 0) {
            this.callCount++;
            this.callTime = now;
            this.callResult = result;
        }
        return result;
    };
    IntlRelativePipe.decorators = [
        { type: Pipe, args: [{
                    name: "intlRelative",
                    pure: false
                },] },
    ];
    /** @nocollapse */
    IntlRelativePipe.ctorParameters = [
        { type: IntlService, },
    ];
    return IntlRelativePipe;
}());
//# sourceMappingURL=relative-pipe.js.map