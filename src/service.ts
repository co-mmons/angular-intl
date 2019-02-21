import {Injectable} from "@angular/core";
import {AbstractControl} from "@angular/forms";
import {IntlHelper, MessageRef} from "@co.mmons/js-intl";

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
                    return this.message("@co.mmons/angular-intl#validation/requiredError");

                } else if (code == "minlength") {
                    return this.message("@co.mmons/angular-intl#validation/minLengthError", {length: (error && error.requiredLength) || 0});

                } else if (error instanceof Error && error.message) {

                    if (<any>error.message instanceof MessageRef) {
                        this.message(error.message);
                    }

                    return error.message;

                } else if (error instanceof MessageRef) {
                    return this.message(error);

                } else if (typeof error == "string") {
                    return error;
                }

                anyError = true;
            }

            if (anyError) {
                return this.message("@co.mmons/angular-intl#validation/invalidValueError");
            }
        }

        return undefined;

    }
}
