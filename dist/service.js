var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { Injectable } from "@angular/core";
import { IntlHelper } from "@co.mmons/js-intl";
var IntlService = (function (_super) {
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
        browserLang = browserLang || window.navigator.language || window.navigator["browserLanguage"] || window.navigator["userLanguage"];
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
            return undefined;
        }
        var browserCultureLang = window.navigator["languages"] ? window.navigator["languages"][0] : undefined;
        browserCultureLang = browserCultureLang || window.navigator.language || window.navigator["browserLanguage"] || window.navigator["userLanguage"];
        return browserCultureLang;
    };
    IntlService.prototype.validationErrorMessage = function (control) {
        if (control.errors) {
            var anyError = false;
            var error = void 0;
            for (var code in control.errors) {
                error = control.errors[code];
                if (code == "required") {
                    return "Pole jest wymagane.";
                }
                else if (code == "minlength") {
                    if (error && error.requiredLength > 0) {
                        return "Minimalna ilo\u015B\u0107 znak\u00F3w wynosi " + error.requiredLength + ".";
                    }
                    return "Wartość pola ma za mało znaków.";
                }
                else if (error instanceof Error && error.message) {
                    return error.message;
                }
                anyError = true;
            }
            if (anyError) {
                return "Wartość wygląda na nieprawidłową";
            }
        }
        return undefined;
    };
    IntlService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    IntlService.ctorParameters = function () { return []; };
    return IntlService;
}(IntlHelper));
export { IntlService };
//# sourceMappingURL=service.js.map