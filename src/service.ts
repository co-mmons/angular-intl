import { Injectable, Type } from "@angular/core";

import IntlMessageFormat from "intl-messageformat";
import IntlRelativeFormat from "intl-relativeformat";

declare var INTL_MESSAGES: {
    [locale: string]: {
        [key: string]: string
    }
};

if (!window["INTL_MESSAGES"]) {
    window["INTL_MESSAGES"] = {};
}

type IntlFormatter = Intl.DateTimeFormat | Intl.NumberFormat | IntlMessageFormat | IntlRelativeFormat;

export abstract class IntlAbstractService {

    constructor(defaultNamespace?: string) {
        this.locale = getBrowserLocale();
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

    /**
     * Selected locale. By default it takes browser locale.
     */
    private _locale: string;

    public get locale(): string {
        return this._locale;
    }

    public set locale(locale: string) {
        this._locale = locale;

        this._locales = [];

        let segments = locale.split("-");

        for (let i = segments.length - 1; i > 0; i--) {
            this._locales.push(segments.slice(0, i).join("-"));
        }

        this.formatters = {};
    }

    public setLocale(locale: string): IntlAbstractService {
        this.locale = locale;
        return this;
    }

    /**
     * Selected locale's segments
     */
    private _locales: string[];

    public get locales(): string[] {

        if (this._locales) {
            return this._locales.slice();
        }

        return [];
    }


    private formatters: any = {};

    private formatterInstance<T extends IntlFormatter>(formatterConstructor: Type<T>, id: string, constructorArguments?: any[]): T {

        let cacheKey = id ? `${formatterConstructor.name}_${id}` : getCacheId([formatterConstructor.name].concat(constructorArguments));
        let formatter = this.formatters[cacheKey];

        if (!formatter && constructorArguments) {

            if (formatterConstructor === IntlMessageFormat && !this.isMessageNeedsFormatter(constructorArguments[0])) {
                formatter = IntlMessageFormat.default;
            } else if (formatterConstructor === IntlRelativeFormat) {
                formatter = new IntlRelativeFormat(this._locales, constructorArguments[0]);
            } else if (formatterConstructor === <any>Intl.DateTimeFormat) {
                formatter = new Intl.DateTimeFormat(this._locales, constructorArguments[0]);
            } else if (formatterConstructor === <any>Intl.NumberFormat) {
                formatter = new Intl.NumberFormat(this._locales, constructorArguments[0]);
            }
            
            this.formatters[cacheKey] = formatter;
        }

        return formatter;
    }

    private formatterInstanceExists<T extends IntlFormatter>(formatter: string | Type<T>, id: string): boolean {
        let formatterName = typeof formatter === "string" ? formatter : formatter.name;
        id = `${formatterName}_${id}`;
        return id in this.formatters[id];
    }

    private formattersOptions: any = {};

    private addFormatterPredefinedOptions<T extends IntlFormatter>(formatter: string | Type<T>, key: string, options: any) {

        let formatterName = typeof formatter === "string" ? formatter : formatter.name;

        if (!this.formattersOptions[formatterName]) {
            this.formattersOptions[formatterName] = {};
        }

        this.formattersOptions[formatterName][key] = options;
    }

    public addDateTimePredefinedOptions(key: string, options: Intl.DateTimeFormatOptions) {
        this.addFormatterPredefinedOptions(Intl.DateTimeFormat.name, key, options);
    }

    public findFormatterPredefinedOptions<T>(formatter: string | Type<T>, key: string) {

        let formatterName = typeof formatter === "string" ? formatter : formatter.name;

        if (this.formattersOptions[formatterName]) {
            return this.formattersOptions[formatterName][key];
        }

        return undefined;
    }


    private findMessage(namespace: string, key: string) {

        for (let locale of this._locales) {
            if (INTL_MESSAGES && INTL_MESSAGES[namespace] && INTL_MESSAGES[namespace][locale] && INTL_MESSAGES[namespace][locale][key]) {
                return INTL_MESSAGES[namespace][locale][key];
            }
        }

        return "???";
    }

    private isMessageNeedsFormatter(message: string) {
        return message.indexOf("{") > -1 || message.indexOf("}") > -1;
    }

    private extractMessageNamespaceAndKey(namespaceAndKey: string, useDefaultNamespace: boolean = true): {namespace: string, key: string} {

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

        let namespaceAndKey = this.extractMessageNamespaceAndKey(key);
        if (!namespaceAndKey.namespace) {
            throw "Undefined i18n messages namespace";
        }

        let formatter: IntlMessageFormat = this.formatterInstance(IntlMessageFormat, `${namespaceAndKey.namespace},${namespaceAndKey.key}`);

        if (formatter && formatter !== IntlMessageFormat.default && !formats) {
            return formatter.format(values);
        }

        let message = this.findMessage(namespaceAndKey.namespace, namespaceAndKey.key);
        
        formatter = this.formatterInstance(IntlMessageFormat, `${namespaceAndKey.namespace},${namespaceAndKey.key}`, [message]);

        if (formats && formatter !== IntlMessageFormat.default) {
            formatter = new IntlMessageFormat(message, this._locale, formats);
        }

        if (formatter && formatter !== IntlMessageFormat.default) {
            return formatter.format(values);
        } else {
            return message;
        }
    }

    public m(key: string, values?: any, formats?: any) {
        return this.message(key, values, formats);
    }

    
    public relative(dateTime: number | Date, options: any): string {
        return this.formatterInstance(IntlRelativeFormat, undefined, [options]).format(typeof dateTime == "number" ? new Date(dateTime) : dateTime, options);
    }


    public date(dateTime: number | Date, options?: Intl.DateTimeFormatOptions): string;

    public date(dateTime: number | Date, predefinedOptionsOrOptions?: string | Intl.DateTimeFormatOptions, options?: Intl.DateTimeFormatOptions): string {
        return this.dateTime0("date", dateTime, predefinedOptionsOrOptions, options);
    }

    public time(dateTime: number | Date, options?: Intl.DateTimeFormatOptions): string;

    public time(dateTime: number | Date, predefinedOptionsOrOptions?: string | Intl.DateTimeFormatOptions, options?: Intl.DateTimeFormatOptions): string {
        return this.dateTime0("time", dateTime, predefinedOptionsOrOptions, options);
    }

    public dateTime(dateTime: number | Date, options?: Intl.DateTimeFormatOptions): string;

    public dateTime(dateTime: number | Date, predefinedOptionsOrOptions?: string | Intl.DateTimeFormatOptions, options?: Intl.DateTimeFormatOptions): string {
        return this.dateTime0("dateTime", dateTime, predefinedOptionsOrOptions, options);
    }

    private dateTime0(mode: string, dateTime: number | Date, predefinedOptionsOrOptions?: string | Intl.DateTimeFormatOptions, options?: Intl.DateTimeFormatOptions): string {

        let predefinedOptions = typeof predefinedOptionsOrOptions === "string" ? this.findFormatterPredefinedOptions(Intl.DateTimeFormat.name, predefinedOptionsOrOptions) : predefinedOptionsOrOptions;
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

        } else if (mode == "date") {
            
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

        } else {

            if (!predefinedOptions) {
                predefinedOptions = {year: "numeric", month: "numeric", day: "numeric", hour: "2-digit", minute: "2-digit", second: "2-digit"};
            }

        }

        let formatter = this.formatterInstance(Intl.DateTimeFormat, undefined, [predefinedOptions]);
        return formatter.format(dateTime);
    }
}

@Injectable()
export class IntlService extends IntlAbstractService {
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

function getCacheId(inputs) {

    let cacheId = [];

    let i, len, input;

    for (i = 0, len = inputs.length; i < len; i += 1) {
        input = inputs[i];

        if (input && typeof input === 'object') {
            cacheId.push(orderedProps(input));
        } else {
            cacheId.push(input);
        }
    }

    return JSON.stringify(cacheId);
}

function orderedProps(obj) {
    let props = [],
        keys  = [];

    let key, i, len, prop;

    for (key in obj) {
        if (obj.hasOwnProperty(key)) {
            keys.push(key);
        }
    }

    let orderedKeys = keys.sort();

    for (i = 0, len = orderedKeys.length; i < len; i += 1) {
        key  = orderedKeys[i];
        prop = {};

        prop[key] = obj[key];
        props[i]  = prop;
    }

    return props;
}