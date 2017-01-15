var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { Injectable } from "@angular/core";
import IntlMessageFormat from "intl-messageformat";
if (!window["I18N_MESSAGES"]) {
    window["I18N_MESSAGES"] = {};
}
export var I18nAbstractService = (function () {
    function I18nAbstractService(defaultNamespace) {
        this.useCache = true;
        this.namespaceAliases = {};
        this.formats = {};
        this.formatters = {};
        this.setLocale(getBrowserLocale());
        this.defaultNamespace = defaultNamespace;
    }
    I18nAbstractService.prototype.setDefaultNamespace = function (namespace) {
        this.defaultNamespace = namespace;
    };
    I18nAbstractService.prototype.addNamespaceAlias = function (namespace, alias) {
        this.namespaceAliases[alias] = namespace;
    };
    I18nAbstractService.prototype.setLocale = function (locale) {
        this.locale = locale;
        this.locales = [];
        var segments = locale.split("-");
        for (var i = segments.length - 1; i > 0; i--) {
            this.locales.push(segments.slice(0, i).join("-"));
        }
        this.formatters = {};
    };
    I18nAbstractService.prototype.findMessage = function (namespace, key) {
        for (var _i = 0, _a = this.locales; _i < _a.length; _i++) {
            var locale = _a[_i];
            if (I18N_MESSAGES && I18N_MESSAGES[namespace] && I18N_MESSAGES[namespace][locale] && I18N_MESSAGES[namespace][locale][key]) {
                return I18N_MESSAGES[namespace][locale][key];
            }
        }
        return "???";
    };
    I18nAbstractService.prototype.needsFormatter = function (message) {
        return message.indexOf("{") > -1 || message.indexOf("}") > -1;
    };
    I18nAbstractService.prototype.extractNamespaceAndKey = function (namespaceAndKey, useDefaultNamespace) {
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
    I18nAbstractService.prototype.message = function (key, values, formats) {
        var namespaceAndKey = this.extractNamespaceAndKey(key);
        if (!namespaceAndKey.namespace) {
            throw "Undefined i18n messages namespace";
        }
        var formatter = (namespaceAndKey.namespace in this.formatters) ? this.formatters[namespaceAndKey.namespace][namespaceAndKey.key] : undefined;
        if (formatter && !formats) {
            return formatter.format(values);
        }
        var message = this.findMessage(namespaceAndKey.namespace, namespaceAndKey.key);
        if ((!(namespaceAndKey.namespace in this.formatters) || !(namespaceAndKey.key in this.formatters[namespaceAndKey.namespace])) && this.needsFormatter(message)) {
            formatter = new IntlMessageFormat(message, this.locale, Object.assign({}, this.formats, formats));
        }
        if (this.useCache) {
            if (!(namespaceAndKey.namespace in this.formatters))
                this.formatters[namespaceAndKey.namespace] = {};
            this.formatters[namespaceAndKey.namespace][namespaceAndKey.key] = formatter;
        }
        if (formatter) {
            return formatter.format(values);
        }
        else {
            return message;
        }
    };
    I18nAbstractService.prototype.m = function (key, values, formats) {
        return this.message(key, values, formats);
    };
    return I18nAbstractService;
}());
export var I18nService = (function (_super) {
    __extends(I18nService, _super);
    function I18nService() {
        _super.apply(this, arguments);
    }
    I18nService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    I18nService.ctorParameters = [];
    return I18nService;
}(I18nAbstractService));
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
//# sourceMappingURL=service.js.map