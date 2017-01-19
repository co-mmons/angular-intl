var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { Injectable } from "@angular/core";
import IntlMessageFormat from "intl-messageformat";
import IntlRelativeFormat from "intl-relativeformat";
if (!window["INTL_MESSAGES"]) {
    window["INTL_MESSAGES"] = {};
}
export var IntlAbstractService = (function () {
    function IntlAbstractService(defaultNamespace) {
        this.useCache = true;
        this.namespaceAliases = {};
        this.formatters = {};
        this.formattersOptions = {};
        this.messsageFormats = {};
        /**
         * Cached instances of IntlMessageFormat
         */
        this.messageFormatters = {};
        this.relativeFormatters = {};
        this.setLocale(getBrowserLocale());
        this.defaultNamespace = defaultNamespace;
    }
    IntlAbstractService.prototype.setDefaultNamespace = function (namespace) {
        this.defaultNamespace = namespace;
    };
    IntlAbstractService.prototype.addNamespaceAlias = function (namespace, alias) {
        this.namespaceAliases[alias] = namespace;
    };
    IntlAbstractService.prototype.setLocale = function (locale) {
        this.locale = locale;
        this.locales = [];
        var segments = locale.split("-");
        for (var i = segments.length - 1; i > 0; i--) {
            this.locales.push(segments.slice(0, i).join("-"));
        }
        this.formatters = {};
        this.messageFormatters = {};
        this.relativeFormatters = {};
    };
    IntlAbstractService.prototype.formatterInstance = function (formatterConstructor, options) {
        var cacheKey = getCacheId([formatterConstructor.name, options]);
        var formatter = this.formatters[cacheKey];
        if (!formatter) {
            formatter = formatterConstructor.apply(null, [this.locales, options]);
            this.formatters[cacheKey] = formatter;
        }
        return formatter;
    };
    IntlAbstractService.prototype.addFormatterOptions = function (formatter, key, options) {
        if (!this.formattersOptions[formatter]) {
            this.formattersOptions[formatter] = {};
        }
        this.formattersOptions[formatter][key] = options;
    };
    IntlAbstractService.prototype.addDateTimePredefinedOptions = function (key, options) {
        this.addFormatterOptions(Intl.DateTimeFormat.name, key, options);
    };
    IntlAbstractService.prototype.findformatterOptions = function (formatter, key) {
        var formatterName = typeof formatter === "string" ? formatter : formatter.name;
        if (this.formattersOptions[formatterName]) {
            return this.formattersOptions[formatterName][key];
        }
        return undefined;
    };
    IntlAbstractService.prototype.findMessage = function (namespace, key) {
        for (var _i = 0, _a = this.locales; _i < _a.length; _i++) {
            var locale = _a[_i];
            if (INTL_MESSAGES && INTL_MESSAGES[namespace] && INTL_MESSAGES[namespace][locale] && INTL_MESSAGES[namespace][locale][key]) {
                return INTL_MESSAGES[namespace][locale][key];
            }
        }
        return "???";
    };
    IntlAbstractService.prototype.isMessageNeedsFormatter = function (message) {
        return message.indexOf("{") > -1 || message.indexOf("}") > -1;
    };
    IntlAbstractService.prototype.extractMessageNamespaceAndKey = function (namespaceAndKey, useDefaultNamespace) {
        if (useDefaultNamespace === void 0) { useDefaultNamespace = true; }
        var result = { namespace: undefined, key: undefined };
        if (namespaceAndKey[0] == ".") {
            result.namespace = useDefaultNamespace ? this.defaultNamespace : undefined;
            result.key = namespaceAndKey.substring(1);
        }
        else {
            var dot = namespaceAndKey.indexOf(".");
            if (dot > -1) {
                result.namespace = namespaceAndKey.substring(0, dot);
                result.key = namespaceAndKey.substring(dot + 1);
            }
            else {
                result.namespace = useDefaultNamespace ? this.defaultNamespace : undefined;
                result.key = namespaceAndKey;
            }
        }
        return result;
    };
    IntlAbstractService.prototype.message = function (key, values, formats) {
        var namespaceAndKey = this.extractMessageNamespaceAndKey(key);
        if (!namespaceAndKey.namespace) {
            throw "Undefined i18n messages namespace";
        }
        var formatter = (namespaceAndKey.namespace in this.messageFormatters) ? this.messageFormatters[namespaceAndKey.namespace][namespaceAndKey.key] : undefined;
        if (formatter && !formats) {
            return formatter.format(values);
        }
        var message = this.findMessage(namespaceAndKey.namespace, namespaceAndKey.key);
        if ((!(namespaceAndKey.namespace in this.messageFormatters) || !(namespaceAndKey.key in this.messageFormatters[namespaceAndKey.namespace])) && this.isMessageNeedsFormatter(message)) {
            formatter = new IntlMessageFormat(message, this.locale, Object.assign({}, this.messsageFormats, formats));
        }
        if (this.useCache) {
            if (!(namespaceAndKey.namespace in this.messageFormatters))
                this.messageFormatters[namespaceAndKey.namespace] = {};
            this.messageFormatters[namespaceAndKey.namespace][namespaceAndKey.key] = formatter;
        }
        if (formatter) {
            return formatter.format(values);
        }
        else {
            return message;
        }
    };
    IntlAbstractService.prototype.m = function (key, values, formats) {
        return this.message(key, values, formats);
    };
    IntlAbstractService.prototype.createRelativeFormatter = function (options) {
        // cache key ("style,units")
        var key = !options ? "default" : "," + (options.style ? options.style : "") + "," + (options.units ? options.units : "");
        if (!this.relativeFormatters[key]) {
            this.relativeFormatters[key] = new IntlRelativeFormat(this.locale, options);
        }
        return this.relativeFormatters[key];
    };
    IntlAbstractService.prototype.relative = function (dateTime, options) {
        return this.createRelativeFormatter(options).format(typeof dateTime == "number" ? new Date(dateTime) : dateTime, options);
    };
    IntlAbstractService.prototype.date = function (dateTime, predefinedOptionsOrOptions, options) {
        return this.dateTime0("date", dateTime, predefinedOptionsOrOptions, options);
    };
    IntlAbstractService.prototype.time = function (dateTime, predefinedOptionsOrOptions, options) {
        return this.dateTime0("time", dateTime, predefinedOptionsOrOptions, options);
    };
    IntlAbstractService.prototype.dateTime = function (dateTime, predefinedOptionsOrOptions, options) {
        return this.dateTime0("dateTime", dateTime, predefinedOptionsOrOptions, options);
    };
    IntlAbstractService.prototype.dateTime0 = function (mode, dateTime, predefinedOptionsOrOptions, options) {
        var predefinedOptions = typeof predefinedOptionsOrOptions === "string" ? this.findformatterOptions(Intl.DateTimeFormat.name, predefinedOptionsOrOptions) : predefinedOptionsOrOptions;
        if (options) {
            predefinedOptions = Object.assign({}, predefinedOptions, options);
        }
        if (mode == "time") {
            if (!predefinedOptions) {
                predefinedOptions = {};
            }
            predefinedOptions.year = undefined;
            predefinedOptions.month = undefined;
            predefinedOptions.day = undefined;
            predefinedOptions.weekday = undefined;
            predefinedOptions.era = undefined;
            if (!predefinedOptions.hour && !predefinedOptions.minute && !predefinedOptions.second && !predefinedOptions.timeZoneName) {
                predefinedOptions.hour = "2-digit";
                predefinedOptions.minute = "2-digit";
                predefinedOptions.second = "2-digit";
            }
        }
        else if (mode == "date") {
            if (!predefinedOptions) {
                predefinedOptions = {};
            }
            predefinedOptions.hour = undefined;
            predefinedOptions.minute = undefined;
            predefinedOptions.second = undefined;
            predefinedOptions.timeZoneName = undefined;
            if (!predefinedOptions.year && !predefinedOptions.month && !predefinedOptions.day && !predefinedOptions.weekday && !predefinedOptions.era) {
                predefinedOptions.year = "numeric";
                predefinedOptions.month = "numeric";
                predefinedOptions.day = "numeric";
            }
        }
        else {
            if (!predefinedOptions) {
                predefinedOptions = { year: "numeric", month: "numeric", day: "numeric", hour: "2-digit", minute: "2-digit", second: "2-digit" };
            }
        }
        var formatter = this.formatterInstance(Intl.DateTimeFormat, predefinedOptions);
        return formatter.format(dateTime);
    };
    return IntlAbstractService;
}());
export var IntlService = (function (_super) {
    __extends(IntlService, _super);
    function IntlService() {
        _super.apply(this, arguments);
    }
    IntlService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    IntlService.ctorParameters = [];
    return IntlService;
}(IntlAbstractService));
/**
 * Returns the language code name from the browser, e.g. "de"
 *
 * @returns string
 */
function getBrowserLang() {
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
}
/**
 * Returns the culture language code name from the browser, e.g. "de-DE"
 *
 * @returns string
 */
function getBrowserLocale() {
    if (typeof window === 'undefined' || typeof window.navigator === 'undefined') {
        return undefined;
    }
    var browserCultureLang = window.navigator["languages"] ? window.navigator["languages"][0] : undefined;
    browserCultureLang = browserCultureLang || window.navigator.language || window.navigator["browserLanguage"] || window.navigator["userLanguage"];
    return browserCultureLang;
}
function getCacheId(inputs) {
    var cacheId = [];
    var i, len, input;
    for (i = 0, len = inputs.length; i < len; i += 1) {
        input = inputs[i];
        if (input && typeof input === 'object') {
            cacheId.push(orderedProps(input));
        }
        else {
            cacheId.push(input);
        }
    }
    return JSON.stringify(cacheId);
}
function orderedProps(obj) {
    var props = [], keys = [];
    var key, i, len, prop;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) {
            keys.push(key);
        }
    }
    var orderedKeys = keys.sort();
    for (i = 0, len = orderedKeys.length; i < len; i += 1) {
        key = orderedKeys[i];
        prop = {};
        prop[key] = obj[key];
        props[i] = prop;
    }
    return props;
}
//# sourceMappingURL=service.js.map