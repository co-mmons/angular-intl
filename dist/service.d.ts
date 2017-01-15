export declare abstract class I18nAbstractService {
    constructor(defaultNamespace?: string);
    private useCache;
    private defaultNamespace;
    setDefaultNamespace(namespace: string): void;
    private namespaceAliases;
    addNamespaceAlias(namespace: string, alias: string): void;
    private formats;
    /**
     * Selected locale. By default it takes browser locale.
     */
    private locale;
    /**
     * Selected locale's segments
     */
    private locales;
    private formatters;
    setLocale(locale: string): void;
    private findMessage(namespace, key);
    private needsFormatter(message);
    private extractNamespaceAndKey(namespaceAndKey, useDefaultNamespace?);
    message(key: string, values: any, formats?: any): any;
    m(key: string, values?: any, formats?: any): any;
}
export declare class I18nService extends I18nAbstractService {
}
