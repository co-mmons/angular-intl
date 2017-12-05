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
var IntlRelativeFormatStaticPipe = /** @class */ (function () {
    function IntlRelativeFormatStaticPipe(service) {
        this.service = service;
    }
    IntlRelativeFormatStaticPipe.prototype.transform = function (dateTime, options) {
        return this.service.relativeFormat(dateTime, options);
    };
    IntlRelativeFormatStaticPipe = __decorate([
        Pipe({
            name: "intlRelativeFormatStatic"
        }),
        __metadata("design:paramtypes", [IntlService])
    ], IntlRelativeFormatStaticPipe);
    return IntlRelativeFormatStaticPipe;
}());
export { IntlRelativeFormatStaticPipe };
var IntlRelativeFormatPipe = /** @class */ (function () {
    function IntlRelativeFormatPipe(service) {
        this.service = service;
        this.callCount = 0;
    }
    IntlRelativeFormatPipe.prototype.transform = function (dateTime, cacheTimeOrOptions, options) {
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
        var result = this.service.relativeFormat(dateTime, options);
        if (cacheTime > 0) {
            this.callCount++;
            this.callTime = now;
            this.callResult = result;
        }
        return result;
    };
    IntlRelativeFormatPipe = __decorate([
        Pipe({
            name: "intlRelativeFormat",
            pure: false
        }),
        __metadata("design:paramtypes", [IntlService])
    ], IntlRelativeFormatPipe);
    return IntlRelativeFormatPipe;
}());
export { IntlRelativeFormatPipe };
//# sourceMappingURL=relative-format-pipe.js.map