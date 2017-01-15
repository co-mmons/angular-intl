import { Injectable } from "@angular/core";
import IntlMessageFormat from "intl-messageformat";

declare var I18N_MESSAGES: {
    [locale: string]: {
        [key: string]: string
    }
};

if (!window["I18N_MESSAGES"]) {
    window["I18N_MESSAGES"] = {};
}

export abstract class I18nAbstractService {

    constructor(defaultNamespace?: string) {
        this.setLocale(getBrowserLocale());

        this.defaultNamespace = defaultNamespace;
    }

    private useCache: boolean = true;

    private defaultNamespace: string;

    public setDefaultNamespace(namespace: string) {
        this.defaultNamespace = namespace;
    }

    private namespaceAliases: {[alias: string]: string} = {};

    public addNamespaceAlias(namespace: string, alias: string) {
        this.namespaceAliases[alias] = namespace;
    }
    
    private formats: any = {};

    /**
     * Selected locale. By default it takes browser locale.
     */
    private locale: string;

    /**
     * Selected locale's segments
     */
    private locales: string[];

    private formatters: {[namespace: string]: {[key: string]: IntlMessageFormat}} = {};

    public setLocale(locale: string) {
        this.locale = locale;

        this.locales = [];

        let segments = locale.split("-");

        for (let i = segments.length - 1; i > 0; i--) {
            this.locales.push(segments.slice(0, i).join("-"));
        }

        this.formatters = {};
    }

    private findMessage(namespace: string, key: string) {

        for (let locale of this.locales) {
            if (I18N_MESSAGES && I18N_MESSAGES[namespace] && I18N_MESSAGES[namespace][locale] && I18N_MESSAGES[namespace][locale][key]) {
                return I18N_MESSAGES[namespace][locale][key];
            }
        }

        return "???";
    }

    private needsFormatter(message: string) {
        return message.indexOf("{") > -1 || message.indexOf("}") > -1;
    }

    private extractNamespaceAndKey(namespaceAndKey: string, useDefaultNamespace: boolean = true): {namespace: string, key: string} {

        let result = {namespace: undefined, key: undefined};

        if (namespaceAndKey[0] == ".") {
            result.namespace = useDefaultNamespace ? this.defaultNamespace : undefined;
            result.key = namespaceAndKey.substring(1);
        } else {
            let dot = namespaceAndKey.indexOf(".");
            if (dot > -1) {
                result.namespace = namespaceAndKey.substring(0, dot);
                result.key = namespaceAndKey.substring(dot + 1);
            } else {
                result.namespace = useDefaultNamespace ? this.defaultNamespace : undefined;
                result.key = namespaceAndKey;
            }
        }

        return result;
    }

    public message(key: string, values: any, formats?: any) {

        let namespaceAndKey = this.extractNamespaceAndKey(key);
        if (!namespaceAndKey.namespace) {
            throw "Undefined i18n messages namespace";
        }

        let formatter: IntlMessageFormat = (namespaceAndKey.namespace in this.formatters) ? this.formatters[namespaceAndKey.namespace][namespaceAndKey.key] : undefined;

        if (formatter && !formats) {
            return formatter.format(values);
        }

        let message = this.findMessage(namespaceAndKey.namespace, namespaceAndKey.key);

        if ((!(namespaceAndKey.namespace in this.formatters) || !(namespaceAndKey.key in this.formatters[namespaceAndKey.namespace])) && this.needsFormatter(message)) {
            formatter = new IntlMessageFormat(message, this.locale, Object.assign({}, this.formats, formats));
        }

        if (this.useCache) {
            if (!(namespaceAndKey.namespace in this.formatters)) this.formatters[namespaceAndKey.namespace] = {};
            this.formatters[namespaceAndKey.namespace][namespaceAndKey.key] = formatter;
        }

        if (formatter) {
            return formatter.format(values);
        } else {
            return message;
        }
    }

    public m(key: string, values?: any, formats?: any) {
        return this.message(key, values, formats);
    }

}

@Injectable()
export class I18nService extends I18nAbstractService {
}

/**
 * Returns the language code name from the browser, e.g. "de"
 *
 * @returns string
 */
function getBrowserLang(): string {

    if (typeof window === 'undefined' || typeof window.navigator === 'undefined') {
        return undefined;
    }

    let browserLang: any = window.navigator["languages"] ? window.navigator["languages"][0] : undefined;
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
function getBrowserLocale(): string {

    if (typeof window === 'undefined' || typeof window.navigator === 'undefined') {
        return undefined;
    }

    let browserCultureLang: any = window.navigator["languages"] ? window.navigator["languages"][0] : undefined;
    browserCultureLang = browserCultureLang || window.navigator.language || window.navigator["browserLanguage"] || window.navigator["userLanguage"];

    return browserCultureLang;
}