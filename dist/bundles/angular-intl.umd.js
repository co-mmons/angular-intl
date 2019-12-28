(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@co.mmons/js-intl')) :
    typeof define === 'function' && define.amd ? define('@co.mmons/angular-intl', ['exports', '@angular/core', '@co.mmons/js-intl'], factory) :
    (global = global || self, factory((global.co = global.co || {}, global.co.mmons = global.co.mmons || {}, global.co.mmons['angular-intl'] = {}), global.ng.core, global.jsIntl));
}(this, (function (exports, core, jsIntl) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

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
                        if (error.message instanceof jsIntl.MessageRef) {
                            this.message(error.message);
                        }
                        return error.message;
                    }
                    else if (error instanceof jsIntl.MessageRef) {
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
            core.Injectable()
        ], IntlService);
        return IntlService;
    }(jsIntl.IntlHelper));

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
            core.Pipe({
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
            core.Pipe({
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
            core.Pipe({
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
            core.Pipe({
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
            core.Pipe({
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
            core.Pipe({
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
            core.Pipe({
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
            core.Pipe({
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
            core.Pipe({
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
            core.Pipe({
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
            core.Pipe({
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
            core.NgModule({
                declarations: [IntlValuePipe, IntlMessagePipe, IntlRelativeFormatStaticPipe, IntlRelativeFormatPipe, IntlDateTimeFormatPipe, IntlTimeFormatPipe, IntlDateFormatPipe, IntlCurrencyFormatPipe, IntlDecimalFormatPipe, IntlPercentFormatPipe, IntlValidationErrorMessagePipe],
                exports: [IntlValuePipe, IntlMessagePipe, IntlRelativeFormatStaticPipe, IntlRelativeFormatPipe, IntlDateTimeFormatPipe, IntlTimeFormatPipe, IntlDateFormatPipe, IntlCurrencyFormatPipe, IntlDecimalFormatPipe, IntlPercentFormatPipe, IntlValidationErrorMessagePipe]
            })
        ], IntlModule);
        return IntlModule;
    }());

    Object.keys(jsIntl).forEach(function (k) {
        if (k !== 'default') Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () {
                return jsIntl[k];
            }
        });
    });
    exports.IntlCurrencyFormatPipe = IntlCurrencyFormatPipe;
    exports.IntlDateFormatPipe = IntlDateFormatPipe;
    exports.IntlDateTimeFormatPipe = IntlDateTimeFormatPipe;
    exports.IntlDecimalFormatPipe = IntlDecimalFormatPipe;
    exports.IntlMessagePipe = IntlMessagePipe;
    exports.IntlModule = IntlModule;
    exports.IntlPercentFormatPipe = IntlPercentFormatPipe;
    exports.IntlRelativeFormatPipe = IntlRelativeFormatPipe;
    exports.IntlRelativeFormatStaticPipe = IntlRelativeFormatStaticPipe;
    exports.IntlService = IntlService;
    exports.IntlTimeFormatPipe = IntlTimeFormatPipe;
    exports.IntlValidationErrorMessagePipe = IntlValidationErrorMessagePipe;
    exports.IntlValuePipe = IntlValuePipe;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=angular-intl.umd.js.map
