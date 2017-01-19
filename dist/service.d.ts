import { Type } from "@angular/core";
export declare abstract class IntlAbstractService {
    constructor(defaultNamespace?: string);
    private useCache;
    private defaultNamespace;
    setDefaultNamespace(namespace: string): void;
    private namespaceAliases;
    addNamespaceAlias(namespace: string, alias: string): void;
    /**
     * Selected locale. By default it takes browser locale.
     */
    private locale;
    /**
     * Selected locale's segments
     */
    private locales;
    setLocale(locale: string): void;
    private formatters;
    private formatterInstance<T>(formatterConstructor, id, constructorArguments?);
    private formatterInstanceExists<T>(formatter, id);
    private formattersOptions;
    private addFormatterPredefinedOptions<T>(formatter, key, options);
    addDateTimePredefinedOptions(key: string, options: Intl.DateTimeFormatOptions): void;
    findFormatterPredefinedOptions<T>(formatter: string | Type<T>, key: string): any;
    private findMessage(namespace, key);
    private isMessageNeedsFormatter(message);
    private extractMessageNamespaceAndKey(namespaceAndKey, useDefaultNamespace?);
    message(key: string, values: any, formats?: any): any;
    m(key: string, values?: any, formats?: any): any;
    relative(dateTime: number | Date, options: any): string;
    date(dateTime: number | Date, options?: Intl.DateTimeFormatOptions): string;
    time(dateTime: number | Date, options?: Intl.DateTimeFormatOptions): string;
    dateTime(dateTime: number | Date, options?: Intl.DateTimeFormatOptions): string;
    private dateTime0(mode, dateTime, predefinedOptionsOrOptions?, options?);
}
export declare class IntlService extends IntlAbstractService {
}
