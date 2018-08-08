import {Injectable} from "@angular/core";
import {AbstractControl} from "@angular/forms";
import {IntlHelper} from "@co.mmons/js-intl";

declare var INTL_DEFAULT_LOCALE: string;

@Injectable()
export class IntlService extends IntlHelper {

    /**
     * Returns the language code name from the browser, e.g. "de"
     *
     * @returns string
     */
    static getBrowserLang(): string {

        if (typeof window === 'undefined' || typeof window.navigator === 'undefined') {
            return undefined;
        }

        let browserLang: any = window.navigator["languages"] ? window.navigator["languages"][0] : undefined;
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
    static getBrowserLocale(): string {

        if (typeof window === 'undefined' || typeof window.navigator === 'undefined') {
            return INTL_DEFAULT_LOCALE;
        }

        let browserCultureLang: any = window.navigator["languages"] ? window.navigator["languages"][0] : undefined;
        browserCultureLang = browserCultureLang || window.navigator.language || window.navigator["browserLanguage"] || window.navigator["userLanguage"];

        return browserCultureLang || INTL_DEFAULT_LOCALE;
    }

    constructor() {
        super(undefined);
    }

    public validationErrorMessage(control: AbstractControl): string {

        if (control.errors) {
            
            let anyError = false;
            let error: any;

            for (let code in control.errors) {
                error = control.errors[code];

                if (code == "required") {
                    return "Pole jest wymagane.";

                } else if (code == "minlength") {
                    
                    if (error && error.requiredLength > 0) {
                        return `Minimalna ilość znaków wynosi ${error.requiredLength}.`;
                    } 

                    return "Wartość pola ma za mało znaków."

                } else if (error instanceof Error && error.message) {
                    return error.message;
                
                } else if (typeof error == "string") {
                    return error;
                }

                anyError = true;
            }

            if (anyError) {
                return "Wartość wygląda na nieprawidłową";
            }
        }

        return undefined;

    }
}