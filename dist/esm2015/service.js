import { __decorate, __metadata } from "tslib";
import { Injectable } from "@angular/core";
import { IntlHelper, MessageRef } from "@co.mmons/js-intl";
let IntlService = class IntlService extends IntlHelper {
    /**
     * Returns the language code name from the browser, e.g. "de"
     *
     * @returns string
     */
    static getBrowserLang() {
        if (typeof window === 'undefined' || typeof window.navigator === 'undefined') {
            return undefined;
        }
        let browserLang = window.navigator["languages"] ? window.navigator["languages"][0] : undefined;
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
    static getBrowserLocale() {
        if (typeof window === 'undefined' || typeof window.navigator === 'undefined') {
            return INTL_DEFAULT_LOCALE;
        }
        let browserCultureLang = window.navigator["languages"] ? window.navigator["languages"][0] : undefined;
        browserCultureLang = browserCultureLang || window.navigator.language || window.navigator["browserLanguage"] || window.navigator["userLanguage"];
        return browserCultureLang || INTL_DEFAULT_LOCALE;
    }
    constructor() {
        super(undefined);
    }
    validationErrorMessage(control) {
        if (control.errors) {
            let anyError = false;
            let error;
            for (let code in control.errors) {
                error = control.errors[code];
                if (code == "required") {
                    return this.message("@co.mmons/angular-intl#validation/requiredError");
                }
                else if (code == "minlength") {
                    return this.message("@co.mmons/angular-intl#validation/minLengthError", { length: (error && error.requiredLength) || 0 });
                }
                else if (error instanceof Error && error.message) {
                    if (error.message instanceof MessageRef) {
                        this.message(error.message);
                    }
                    return error.message;
                }
                else if (error instanceof MessageRef) {
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
    }
};
IntlService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [])
], IntlService);
export { IntlService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjby5tbW9ucy9hbmd1bGFyLWludGwvIiwic291cmNlcyI6WyJzZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRXpDLE9BQU8sRUFBQyxVQUFVLEVBQUUsVUFBVSxFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFLekQsSUFBYSxXQUFXLEdBQXhCLE1BQWEsV0FBWSxTQUFRLFVBQVU7SUFFdkM7Ozs7T0FJRztJQUNILE1BQU0sQ0FBQyxjQUFjO1FBRWpCLElBQUksT0FBTyxNQUFNLEtBQUssV0FBVyxJQUFJLE9BQU8sTUFBTSxDQUFDLFNBQVMsS0FBSyxXQUFXLEVBQUU7WUFDMUUsT0FBTyxTQUFTLENBQUM7U0FDcEI7UUFFRCxJQUFJLFdBQVcsR0FBUSxNQUFNLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDcEcsV0FBVyxHQUFHLFdBQVcsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLGlCQUFpQixDQUFDLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsSUFBSSxtQkFBbUIsQ0FBQztRQUV6SixJQUFJLFdBQVcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7WUFDakMsV0FBVyxHQUFHLFdBQVcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDM0M7UUFFRCxJQUFJLFdBQVcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7WUFDakMsV0FBVyxHQUFHLFdBQVcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDM0M7UUFFRCxPQUFPLFdBQVcsQ0FBQztJQUN2QixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILE1BQU0sQ0FBQyxnQkFBZ0I7UUFFbkIsSUFBSSxPQUFPLE1BQU0sS0FBSyxXQUFXLElBQUksT0FBTyxNQUFNLENBQUMsU0FBUyxLQUFLLFdBQVcsRUFBRTtZQUMxRSxPQUFPLG1CQUFtQixDQUFDO1NBQzlCO1FBRUQsSUFBSSxrQkFBa0IsR0FBUSxNQUFNLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDM0csa0JBQWtCLEdBQUcsa0JBQWtCLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxRQUFRLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLENBQUM7UUFFaEosT0FBTyxrQkFBa0IsSUFBSSxtQkFBbUIsQ0FBQztJQUNyRCxDQUFDO0lBRUQ7UUFDSSxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDckIsQ0FBQztJQUVNLHNCQUFzQixDQUFDLE9BQXdCO1FBRWxELElBQUksT0FBTyxDQUFDLE1BQU0sRUFBRTtZQUVoQixJQUFJLFFBQVEsR0FBRyxLQUFLLENBQUM7WUFDckIsSUFBSSxLQUFVLENBQUM7WUFFZixLQUFLLElBQUksSUFBSSxJQUFJLE9BQU8sQ0FBQyxNQUFNLEVBQUU7Z0JBQzdCLEtBQUssR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUU3QixJQUFJLElBQUksSUFBSSxVQUFVLEVBQUU7b0JBQ3BCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxpREFBaUQsQ0FBQyxDQUFDO2lCQUUxRTtxQkFBTSxJQUFJLElBQUksSUFBSSxXQUFXLEVBQUU7b0JBQzVCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxrREFBa0QsRUFBRSxFQUFDLE1BQU0sRUFBRSxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUMsQ0FBQztpQkFFM0g7cUJBQU0sSUFBSSxLQUFLLFlBQVksS0FBSyxJQUFJLEtBQUssQ0FBQyxPQUFPLEVBQUU7b0JBRWhELElBQVMsS0FBSyxDQUFDLE9BQU8sWUFBWSxVQUFVLEVBQUU7d0JBQzFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO3FCQUMvQjtvQkFFRCxPQUFPLEtBQUssQ0FBQyxPQUFPLENBQUM7aUJBRXhCO3FCQUFNLElBQUksS0FBSyxZQUFZLFVBQVUsRUFBRTtvQkFDcEMsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO2lCQUU5QjtxQkFBTSxJQUFJLE9BQU8sS0FBSyxJQUFJLFFBQVEsRUFBRTtvQkFDakMsT0FBTyxLQUFLLENBQUM7aUJBQ2hCO2dCQUVELFFBQVEsR0FBRyxJQUFJLENBQUM7YUFDbkI7WUFFRCxJQUFJLFFBQVEsRUFBRTtnQkFDVixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMscURBQXFELENBQUMsQ0FBQzthQUM5RTtTQUNKO1FBRUQsT0FBTyxTQUFTLENBQUM7SUFFckIsQ0FBQztDQUNKLENBQUE7QUExRlksV0FBVztJQUR2QixVQUFVLEVBQUU7O0dBQ0EsV0FBVyxDQTBGdkI7U0ExRlksV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7QWJzdHJhY3RDb250cm9sfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7SW50bEhlbHBlciwgTWVzc2FnZVJlZn0gZnJvbSBcIkBjby5tbW9ucy9qcy1pbnRsXCI7XG5cbmRlY2xhcmUgdmFyIElOVExfREVGQVVMVF9MT0NBTEU6IHN0cmluZztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEludGxTZXJ2aWNlIGV4dGVuZHMgSW50bEhlbHBlciB7XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBsYW5ndWFnZSBjb2RlIG5hbWUgZnJvbSB0aGUgYnJvd3NlciwgZS5nLiBcImRlXCJcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHN0cmluZ1xuICAgICAqL1xuICAgIHN0YXRpYyBnZXRCcm93c2VyTGFuZygpOiBzdHJpbmcge1xuXG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2Ygd2luZG93Lm5hdmlnYXRvciA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgYnJvd3Nlckxhbmc6IGFueSA9IHdpbmRvdy5uYXZpZ2F0b3JbXCJsYW5ndWFnZXNcIl0gPyB3aW5kb3cubmF2aWdhdG9yW1wibGFuZ3VhZ2VzXCJdWzBdIDogdW5kZWZpbmVkO1xuICAgICAgICBicm93c2VyTGFuZyA9IGJyb3dzZXJMYW5nIHx8IHdpbmRvdy5uYXZpZ2F0b3IubGFuZ3VhZ2UgfHwgd2luZG93Lm5hdmlnYXRvcltcImJyb3dzZXJMYW5ndWFnZVwiXSB8fCB3aW5kb3cubmF2aWdhdG9yW1widXNlckxhbmd1YWdlXCJdIHx8IElOVExfREVGQVVMVF9MT0NBTEU7XG5cbiAgICAgICAgaWYgKGJyb3dzZXJMYW5nLmluZGV4T2YoJy0nKSAhPT0gLTEpIHtcbiAgICAgICAgICAgIGJyb3dzZXJMYW5nID0gYnJvd3Nlckxhbmcuc3BsaXQoJy0nKVswXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChicm93c2VyTGFuZy5pbmRleE9mKCdfJykgIT09IC0xKSB7XG4gICAgICAgICAgICBicm93c2VyTGFuZyA9IGJyb3dzZXJMYW5nLnNwbGl0KCdfJylbMF07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYnJvd3Nlckxhbmc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgY3VsdHVyZSBsYW5ndWFnZSBjb2RlIG5hbWUgZnJvbSB0aGUgYnJvd3NlciwgZS5nLiBcImRlLURFXCJcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHN0cmluZ1xuICAgICAqL1xuICAgIHN0YXRpYyBnZXRCcm93c2VyTG9jYWxlKCk6IHN0cmluZyB7XG5cbiAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiB3aW5kb3cubmF2aWdhdG9yID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgcmV0dXJuIElOVExfREVGQVVMVF9MT0NBTEU7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgYnJvd3NlckN1bHR1cmVMYW5nOiBhbnkgPSB3aW5kb3cubmF2aWdhdG9yW1wibGFuZ3VhZ2VzXCJdID8gd2luZG93Lm5hdmlnYXRvcltcImxhbmd1YWdlc1wiXVswXSA6IHVuZGVmaW5lZDtcbiAgICAgICAgYnJvd3NlckN1bHR1cmVMYW5nID0gYnJvd3NlckN1bHR1cmVMYW5nIHx8IHdpbmRvdy5uYXZpZ2F0b3IubGFuZ3VhZ2UgfHwgd2luZG93Lm5hdmlnYXRvcltcImJyb3dzZXJMYW5ndWFnZVwiXSB8fCB3aW5kb3cubmF2aWdhdG9yW1widXNlckxhbmd1YWdlXCJdO1xuXG4gICAgICAgIHJldHVybiBicm93c2VyQ3VsdHVyZUxhbmcgfHwgSU5UTF9ERUZBVUxUX0xPQ0FMRTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIodW5kZWZpbmVkKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdmFsaWRhdGlvbkVycm9yTWVzc2FnZShjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBzdHJpbmcge1xuXG4gICAgICAgIGlmIChjb250cm9sLmVycm9ycykge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBsZXQgYW55RXJyb3IgPSBmYWxzZTtcbiAgICAgICAgICAgIGxldCBlcnJvcjogYW55O1xuXG4gICAgICAgICAgICBmb3IgKGxldCBjb2RlIGluIGNvbnRyb2wuZXJyb3JzKSB7XG4gICAgICAgICAgICAgICAgZXJyb3IgPSBjb250cm9sLmVycm9yc1tjb2RlXTtcblxuICAgICAgICAgICAgICAgIGlmIChjb2RlID09IFwicmVxdWlyZWRcIikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tZXNzYWdlKFwiQGNvLm1tb25zL2FuZ3VsYXItaW50bCN2YWxpZGF0aW9uL3JlcXVpcmVkRXJyb3JcIik7XG5cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGNvZGUgPT0gXCJtaW5sZW5ndGhcIikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tZXNzYWdlKFwiQGNvLm1tb25zL2FuZ3VsYXItaW50bCN2YWxpZGF0aW9uL21pbkxlbmd0aEVycm9yXCIsIHtsZW5ndGg6IChlcnJvciAmJiBlcnJvci5yZXF1aXJlZExlbmd0aCkgfHwgMH0pO1xuXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yICYmIGVycm9yLm1lc3NhZ2UpIHtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoPGFueT5lcnJvci5tZXNzYWdlIGluc3RhbmNlb2YgTWVzc2FnZVJlZikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlKGVycm9yLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVycm9yLm1lc3NhZ2U7XG5cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGVycm9yIGluc3RhbmNlb2YgTWVzc2FnZVJlZikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tZXNzYWdlKGVycm9yKTtcblxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGVycm9yID09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGFueUVycm9yID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGFueUVycm9yKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubWVzc2FnZShcIkBjby5tbW9ucy9hbmd1bGFyLWludGwjdmFsaWRhdGlvbi9pbnZhbGlkVmFsdWVFcnJvclwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG5cbiAgICB9XG59XG4iXX0=