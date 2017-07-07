import { IntlHelper } from "@co.mmons/js-intl";
export declare class IntlService extends IntlHelper {
    /**
     * Returns the language code name from the browser, e.g. "de"
     *
     * @returns string
     */
    static getBrowserLang(): string;
    /**
     * Returns the culture language code name from the browser, e.g. "de-DE"
     *
     * @returns string
     */
    static getBrowserLocale(): string;
    constructor();
}
