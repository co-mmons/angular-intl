import { __decorate, __metadata } from 'tslib';
import { Injectable, Pipe, NgModule } from '@angular/core';
import { IntlHelper, MessageRef } from '@co.mmons/js-intl';
export * from '@co.mmons/js-intl';

let IntlService = class IntlService extends IntlHelper {
    constructor() {
        super(undefined);
    }
    /**
     * Returns the language code name from the browser, e.g. "de"
     *
     * @returns string
     */
    static getBrowserLang() {
        if (typeof window === 'undefined' || typeof window.navigator === 'undefined') {
            return undefined;
        }
        let browserLang = window.navigator["languages"] ? window.navigator["languages"][0] : undefined;
        browserLang = browserLang || window.navigator.language || window.navigator["browserLanguage"] || window.navigator["userLanguage"] || INTL_DEFAULT_LOCALE;
        if (browserLang.indexOf('-') !== -1) {
            browserLang = browserLang.split('-')[0];
        }
        if (browserLang.indexOf('_') !== -1) {
            browserLang = browserLang.split('_')[0];
        }
        return browserLang;
    }
    /**
     * Returns the culture language code name from the browser, e.g. "de-DE"
     *
     * @returns string
     */
    static getBrowserLocale() {
        if (typeof window === 'undefined' || typeof window.navigator === 'undefined') {
            return INTL_DEFAULT_LOCALE;
        }
        let browserCultureLang = window.navigator["languages"] ? window.navigator["languages"][0] : undefined;
        browserCultureLang = browserCultureLang || window.navigator.language || window.navigator["browserLanguage"] || window.navigator["userLanguage"];
        return browserCultureLang || INTL_DEFAULT_LOCALE;
    }
    validationErrorMessage(control) {
        if (control.errors) {
            let anyError = false;
            let error;
            for (let code in control.errors) {
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
    }
};
IntlService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [])
], IntlService);

let IntlCurrencyFormatPipe = class IntlCurrencyFormatPipe {
    constructor(service) {
        this.service = service;
    }
    transform(value, predefinedOptionsOrOptions, additionalOptions) {
        if (typeof predefinedOptionsOrOptions == "string") {
            return this.service.currencyFormat(value, predefinedOptionsOrOptions, additionalOptions);
        }
        else {
            return this.service.currencyFormat(value, predefinedOptionsOrOptions);
        }
    }
};
IntlCurrencyFormatPipe.ctorParameters = () => [
    { type: IntlService }
];
IntlCurrencyFormatPipe = __decorate([
    Pipe({
        name: "intlCurrencyFormat"
    }),
    __metadata("design:paramtypes", [IntlService])
], IntlCurrencyFormatPipe);

let IntlDateTimeFormatPipe = class IntlDateTimeFormatPipe {
    constructor(service) {
        this.service = service;
    }
    transform(dateTime, options) {
        return this.service.dateTimeFormat(dateTime, options);
    }
};
IntlDateTimeFormatPipe.ctorParameters = () => [
    { type: IntlService }
];
IntlDateTimeFormatPipe = __decorate([
    Pipe({
        name: "intlDateTimeFormat"
    }),
    __metadata("design:paramtypes", [IntlService])
], IntlDateTimeFormatPipe);
let IntlDateFormatPipe = class IntlDateFormatPipe {
    constructor(service) {
        this.service = service;
    }
    transform(dateTime, options) {
        return this.service.dateFormat(dateTime, options);
    }
};
IntlDateFormatPipe.ctorParameters = () => [
    { type: IntlService }
];
IntlDateFormatPipe = __decorate([
    Pipe({
        name: "intlDateFormat"
    }),
    __metadata("design:paramtypes", [IntlService])
], IntlDateFormatPipe);
let IntlTimeFormatPipe = class IntlTimeFormatPipe {
    constructor(service) {
        this.service = service;
    }
    transform(dateTime, options) {
        return this.service.timeFormat(dateTime, options);
    }
};
IntlTimeFormatPipe.ctorParameters = () => [
    { type: IntlService }
];
IntlTimeFormatPipe = __decorate([
    Pipe({
        name: "intlTimeFormat"
    }),
    __metadata("design:paramtypes", [IntlService])
], IntlTimeFormatPipe);

let IntlDecimalFormatPipe = class IntlDecimalFormatPipe {
    constructor(service) {
        this.service = service;
    }
    transform(value, predefinedOptionsOrOptions, additionalOptions) {
        if (typeof predefinedOptionsOrOptions == "string") {
            return this.service.decimalFormat(value, predefinedOptionsOrOptions, additionalOptions);
        }
        else {
            return this.service.decimalFormat(value, predefinedOptionsOrOptions);
        }
    }
};
IntlDecimalFormatPipe.ctorParameters = () => [
    { type: IntlService }
];
IntlDecimalFormatPipe = __decorate([
    Pipe({
        name: "intlDecimalFormat"
    }),
    __metadata("design:paramtypes", [IntlService])
], IntlDecimalFormatPipe);

let IntlMessagePipe = class IntlMessagePipe {
    constructor(service) {
        this.service = service;
    }
    transform(key, values) {
        return this.service.message(key, values);
    }
};
IntlMessagePipe.ctorParameters = () => [
    { type: IntlService }
];
IntlMessagePipe = __decorate([
    Pipe({
        name: "intlMessage"
    }),
    __metadata("design:paramtypes", [IntlService])
], IntlMessagePipe);

let IntlPercentFormatPipe = class IntlPercentFormatPipe {
    constructor(service) {
        this.service = service;
    }
    transform(value, predefinedOptionsOrOptions, additionalOptions) {
        if (typeof predefinedOptionsOrOptions == "string") {
            return this.service.percentFormat(value, predefinedOptionsOrOptions, additionalOptions);
        }
        else {
            return this.service.percentFormat(value, predefinedOptionsOrOptions);
        }
    }
};
IntlPercentFormatPipe.ctorParameters = () => [
    { type: IntlService }
];
IntlPercentFormatPipe = __decorate([
    Pipe({
        name: "intlPercentFormat"
    }),
    __metadata("design:paramtypes", [IntlService])
], IntlPercentFormatPipe);

let IntlRelativeFormatStaticPipe = class IntlRelativeFormatStaticPipe {
    constructor(service) {
        this.service = service;
    }
    transform(dateTime, options) {
        return this.service.relativeFormat(dateTime, options);
    }
};
IntlRelativeFormatStaticPipe.ctorParameters = () => [
    { type: IntlService }
];
IntlRelativeFormatStaticPipe = __decorate([
    Pipe({
        name: "intlRelativeFormatStatic"
    }),
    __metadata("design:paramtypes", [IntlService])
], IntlRelativeFormatStaticPipe);
let IntlRelativeFormatPipe = class IntlRelativeFormatPipe {
    constructor(service) {
        this.service = service;
        this.callCount = 0;
    }
    transform(dateTime, cacheTimeOrOptions, options) {
        let now;
        let cacheTime;
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
        let result = this.service.relativeFormat(dateTime, options);
        if (cacheTime > 0) {
            this.callCount++;
            this.callTime = now;
            this.callResult = result;
        }
        return result;
    }
};
IntlRelativeFormatPipe.ctorParameters = () => [
    { type: IntlService }
];
IntlRelativeFormatPipe = __decorate([
    Pipe({
        name: "intlRelativeFormat",
        pure: false
    }),
    __metadata("design:paramtypes", [IntlService])
], IntlRelativeFormatPipe);

let IntlValidationErrorMessagePipe = class IntlValidationErrorMessagePipe {
    constructor(service) {
        this.service = service;
    }
    transform(control) {
        if (this.lastErrors === control.errors) {
            return this.lastMessage;
        }
        this.lastMessage = this.service.validationErrorMessage(control);
        this.lastErrors = control.errors;
        return this.lastMessage;
    }
    ngOnDestroy() {
        this.lastErrors = undefined;
        this.lastMessage = undefined;
    }
};
IntlValidationErrorMessagePipe.ctorParameters = () => [
    { type: IntlService }
];
IntlValidationErrorMessagePipe = __decorate([
    Pipe({
        name: "intlValidationErrorMessage",
        pure: false
    }),
    __metadata("design:paramtypes", [IntlService])
], IntlValidationErrorMessagePipe);

let IntlValuePipe = class IntlValuePipe {
    constructor(service) {
        this.service = service;
    }
    transform(value) {
        return this.service.value(value);
    }
};
IntlValuePipe.ctorParameters = () => [
    { type: IntlService }
];
IntlValuePipe = __decorate([
    Pipe({
        name: "intlValue"
    }),
    __metadata("design:paramtypes", [IntlService])
], IntlValuePipe);

var IntlModule_1;
let IntlModule = IntlModule_1 = class IntlModule {
    static forRoot() {
        return { ngModule: IntlModule_1, providers: [IntlService] };
    }
};
IntlModule = IntlModule_1 = __decorate([
    NgModule({
        declarations: [IntlValuePipe, IntlMessagePipe, IntlRelativeFormatStaticPipe, IntlRelativeFormatPipe, IntlDateTimeFormatPipe, IntlTimeFormatPipe, IntlDateFormatPipe, IntlCurrencyFormatPipe, IntlDecimalFormatPipe, IntlPercentFormatPipe, IntlValidationErrorMessagePipe],
        exports: [IntlValuePipe, IntlMessagePipe, IntlRelativeFormatStaticPipe, IntlRelativeFormatPipe, IntlDateTimeFormatPipe, IntlTimeFormatPipe, IntlDateFormatPipe, IntlCurrencyFormatPipe, IntlDecimalFormatPipe, IntlPercentFormatPipe, IntlValidationErrorMessagePipe]
    })
], IntlModule);

/**
 * Generated bundle index. Do not edit.
 */

export { IntlCurrencyFormatPipe, IntlDateFormatPipe, IntlDateTimeFormatPipe, IntlDecimalFormatPipe, IntlMessagePipe, IntlModule, IntlPercentFormatPipe, IntlRelativeFormatPipe, IntlRelativeFormatStaticPipe, IntlService, IntlTimeFormatPipe, IntlValidationErrorMessagePipe, IntlValuePipe };
//# sourceMappingURL=angular-intl.js.map
