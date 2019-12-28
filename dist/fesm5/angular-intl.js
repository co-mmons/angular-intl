import { __extends, __decorate } from 'tslib';
import { Injectable, Pipe, NgModule } from '@angular/core';
import { MessageRef, IntlHelper } from '@co.mmons/js-intl';
export * from '@co.mmons/js-intl';

var IntlService = /** @class */ (function (_super) {
    __extends(IntlService, _super);
    function IntlService() {
        return _super.call(this, undefined) || this;
    }
    /**
     * Returns the language code name from the browser, e.g. "de"
     *
     * @returns string
     */
    IntlService.getBrowserLang = function () {
        if (typeof window === 'undefined' || typeof window.navigator === 'undefined') {
            return undefined;
        }
        var browserLang = window.navigator["languages"] ? window.navigator["languages"][0] : undefined;
        browserLang = browserLang || window.navigator.language || window.navigator["browserLanguage"] || window.navigator["userLanguage"] || INTL_DEFAULT_LOCALE;
        if (browserLang.indexOf('-') !== -1) {
            browserLang = browserLang.split('-')[0];
        }
        if (browserLang.indexOf('_') !== -1) {
            browserLang = browserLang.split('_')[0];
        }
        return browserLang;
    };
    /**
     * Returns the culture language code name from the browser, e.g. "de-DE"
     *
     * @returns string
     */
    IntlService.getBrowserLocale = function () {
        if (typeof window === 'undefined' || typeof window.navigator === 'undefined') {
            return INTL_DEFAULT_LOCALE;
        }
        var browserCultureLang = window.navigator["languages"] ? window.navigator["languages"][0] : undefined;
        browserCultureLang = browserCultureLang || window.navigator.language || window.navigator["browserLanguage"] || window.navigator["userLanguage"];
        return browserCultureLang || INTL_DEFAULT_LOCALE;
    };
    IntlService.prototype.validationErrorMessage = function (control) {
        if (control.errors) {
            var anyError = false;
            var error = void 0;
            for (var code in control.errors) {
                error = control.errors[code];
                if (code == "required") {
                    return this.message("@co.mmons/angular-intl#validation/requiredError");
                }
                else if (code == "minlength") {
                    return this.message("@co.mmons/angular-intl#validation/minLengthError", { length: (error && error.requiredLength) || 0 });
                }
                else if (error instanceof Error && error.message) {
                    if (error.message instanceof MessageRef) {
                        this.message(error.message);
                    }
                    return error.message;
                }
                else if (error instanceof MessageRef) {
                    return this.message(error);
                }
                else if (typeof error == "string") {
                    return error;
                }
                anyError = true;
            }
            if (anyError) {
                return this.message("@co.mmons/angular-intl#validation/invalidValueError");
            }
        }
        return undefined;
    };
    IntlService = __decorate([
        Injectable()
    ], IntlService);
    return IntlService;
}(IntlHelper));

var IntlCurrencyFormatPipe = /** @class */ (function () {
    function IntlCurrencyFormatPipe(service) {
        this.service = service;
    }
    IntlCurrencyFormatPipe.prototype.transform = function (value, predefinedOptionsOrOptions, additionalOptions) {
        if (typeof predefinedOptionsOrOptions == "string") {
            return this.service.currencyFormat(value, predefinedOptionsOrOptions, additionalOptions);
        }
        else {
            return this.service.currencyFormat(value, predefinedOptionsOrOptions);
        }
    };
    IntlCurrencyFormatPipe.ctorParameters = function () { return [
        { type: IntlService }
    ]; };
    IntlCurrencyFormatPipe = __decorate([
        Pipe({
            name: "intlCurrencyFormat"
        })
    ], IntlCurrencyFormatPipe);
    return IntlCurrencyFormatPipe;
}());

var IntlDateTimeFormatPipe = /** @class */ (function () {
    function IntlDateTimeFormatPipe(service) {
        this.service = service;
    }
    IntlDateTimeFormatPipe.prototype.transform = function (dateTime, options) {
        return this.service.dateTimeFormat(dateTime, options);
    };
    IntlDateTimeFormatPipe.ctorParameters = function () { return [
        { type: IntlService }
    ]; };
    IntlDateTimeFormatPipe = __decorate([
        Pipe({
            name: "intlDateTimeFormat"
        })
    ], IntlDateTimeFormatPipe);
    return IntlDateTimeFormatPipe;
}());
var IntlDateFormatPipe = /** @class */ (function () {
    function IntlDateFormatPipe(service) {
        this.service = service;
    }
    IntlDateFormatPipe.prototype.transform = function (dateTime, options) {
        return this.service.dateFormat(dateTime, options);
    };
    IntlDateFormatPipe.ctorParameters = function () { return [
        { type: IntlService }
    ]; };
    IntlDateFormatPipe = __decorate([
        Pipe({
            name: "intlDateFormat"
        })
    ], IntlDateFormatPipe);
    return IntlDateFormatPipe;
}());
var IntlTimeFormatPipe = /** @class */ (function () {
    function IntlTimeFormatPipe(service) {
        this.service = service;
    }
    IntlTimeFormatPipe.prototype.transform = function (dateTime, options) {
        return this.service.timeFormat(dateTime, options);
    };
    IntlTimeFormatPipe.ctorParameters = function () { return [
        { type: IntlService }
    ]; };
    IntlTimeFormatPipe = __decorate([
        Pipe({
            name: "intlTimeFormat"
        })
    ], IntlTimeFormatPipe);
    return IntlTimeFormatPipe;
}());

var IntlDecimalFormatPipe = /** @class */ (function () {
    function IntlDecimalFormatPipe(service) {
        this.service = service;
    }
    IntlDecimalFormatPipe.prototype.transform = function (value, predefinedOptionsOrOptions, additionalOptions) {
        if (typeof predefinedOptionsOrOptions == "string") {
            return this.service.decimalFormat(value, predefinedOptionsOrOptions, additionalOptions);
        }
        else {
            return this.service.decimalFormat(value, predefinedOptionsOrOptions);
        }
    };
    IntlDecimalFormatPipe.ctorParameters = function () { return [
        { type: IntlService }
    ]; };
    IntlDecimalFormatPipe = __decorate([
        Pipe({
            name: "intlDecimalFormat"
        })
    ], IntlDecimalFormatPipe);
    return IntlDecimalFormatPipe;
}());

var IntlMessagePipe = /** @class */ (function () {
    function IntlMessagePipe(service) {
        this.service = service;
    }
    IntlMessagePipe.prototype.transform = function (key, values) {
        return this.service.message(key, values);
    };
    IntlMessagePipe.ctorParameters = function () { return [
        { type: IntlService }
    ]; };
    IntlMessagePipe = __decorate([
        Pipe({
            name: "intlMessage"
        })
    ], IntlMessagePipe);
    return IntlMessagePipe;
}());

var IntlPercentFormatPipe = /** @class */ (function () {
    function IntlPercentFormatPipe(service) {
        this.service = service;
    }
    IntlPercentFormatPipe.prototype.transform = function (value, predefinedOptionsOrOptions, additionalOptions) {
        if (typeof predefinedOptionsOrOptions == "string") {
            return this.service.percentFormat(value, predefinedOptionsOrOptions, additionalOptions);
        }
        else {
            return this.service.percentFormat(value, predefinedOptionsOrOptions);
        }
    };
    IntlPercentFormatPipe.ctorParameters = function () { return [
        { type: IntlService }
    ]; };
    IntlPercentFormatPipe = __decorate([
        Pipe({
            name: "intlPercentFormat"
        })
    ], IntlPercentFormatPipe);
    return IntlPercentFormatPipe;
}());

var IntlRelativeFormatStaticPipe = /** @class */ (function () {
    function IntlRelativeFormatStaticPipe(service) {
        this.service = service;
    }
    IntlRelativeFormatStaticPipe.prototype.transform = function (dateTime, options) {
        return this.service.relativeFormat(dateTime, options);
    };
    IntlRelativeFormatStaticPipe.ctorParameters = function () { return [
        { type: IntlService }
    ]; };
    IntlRelativeFormatStaticPipe = __decorate([
        Pipe({
            name: "intlRelativeFormatStatic"
        })
    ], IntlRelativeFormatStaticPipe);
    return IntlRelativeFormatStaticPipe;
}());
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
    IntlRelativeFormatPipe.ctorParameters = function () { return [
        { type: IntlService }
    ]; };
    IntlRelativeFormatPipe = __decorate([
        Pipe({
            name: "intlRelativeFormat",
            pure: false
        })
    ], IntlRelativeFormatPipe);
    return IntlRelativeFormatPipe;
}());

var IntlValidationErrorMessagePipe = /** @class */ (function () {
    function IntlValidationErrorMessagePipe(service) {
        this.service = service;
    }
    IntlValidationErrorMessagePipe.prototype.transform = function (control) {
        if (this.lastErrors === control.errors) {
            return this.lastMessage;
        }
        this.lastMessage = this.service.validationErrorMessage(control);
        this.lastErrors = control.errors;
        return this.lastMessage;
    };
    IntlValidationErrorMessagePipe.prototype.ngOnDestroy = function () {
        this.lastErrors = undefined;
        this.lastMessage = undefined;
    };
    IntlValidationErrorMessagePipe.ctorParameters = function () { return [
        { type: IntlService }
    ]; };
    IntlValidationErrorMessagePipe = __decorate([
        Pipe({
            name: "intlValidationErrorMessage",
            pure: false
        })
    ], IntlValidationErrorMessagePipe);
    return IntlValidationErrorMessagePipe;
}());

var IntlValuePipe = /** @class */ (function () {
    function IntlValuePipe(service) {
        this.service = service;
    }
    IntlValuePipe.prototype.transform = function (value) {
        return this.service.value(value);
    };
    IntlValuePipe.ctorParameters = function () { return [
        { type: IntlService }
    ]; };
    IntlValuePipe = __decorate([
        Pipe({
            name: "intlValue"
        })
    ], IntlValuePipe);
    return IntlValuePipe;
}());

var IntlModule = /** @class */ (function () {
    function IntlModule() {
    }
    IntlModule_1 = IntlModule;
    IntlModule.forRoot = function () {
        return { ngModule: IntlModule_1, providers: [IntlService] };
    };
    var IntlModule_1;
    IntlModule = IntlModule_1 = __decorate([
        NgModule({
            declarations: [IntlValuePipe, IntlMessagePipe, IntlRelativeFormatStaticPipe, IntlRelativeFormatPipe, IntlDateTimeFormatPipe, IntlTimeFormatPipe, IntlDateFormatPipe, IntlCurrencyFormatPipe, IntlDecimalFormatPipe, IntlPercentFormatPipe, IntlValidationErrorMessagePipe],
            exports: [IntlValuePipe, IntlMessagePipe, IntlRelativeFormatStaticPipe, IntlRelativeFormatPipe, IntlDateTimeFormatPipe, IntlTimeFormatPipe, IntlDateFormatPipe, IntlCurrencyFormatPipe, IntlDecimalFormatPipe, IntlPercentFormatPipe, IntlValidationErrorMessagePipe]
        })
    ], IntlModule);
    return IntlModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { IntlCurrencyFormatPipe, IntlDateFormatPipe, IntlDateTimeFormatPipe, IntlDecimalFormatPipe, IntlMessagePipe, IntlModule, IntlPercentFormatPipe, IntlRelativeFormatPipe, IntlRelativeFormatStaticPipe, IntlService, IntlTimeFormatPipe, IntlValidationErrorMessagePipe, IntlValuePipe };
//# sourceMappingURL=angular-intl.js.map
