import { __decorate, __extends } from "tslib";
import { Injectable } from "@angular/core";
import { IntlHelper, MessageRef } from "@co.mmons/js-intl";
var IntlService = /** @class */ (function (_super) {
    __extends(IntlService, _super);
    function IntlService() {
        return _super.call(this, undefined) || this;
    }
    /**
     * Returns the language code name from the browser, e.g. "de"
     *
     * @returns string
     */
    IntlService.getBrowserLang = function () {
        if (typeof window === 'undefined' || typeof window.navigator === 'undefined') {
            return undefined;
        }
        var browserLang = window.navigator["languages"] ? window.navigator["languages"][0] : undefined;
        browserLang = browserLang || window.navigator.language || window.navigator["browserLanguage"] || window.navigator["userLanguage"] || INTL_DEFAULT_LOCALE;
        if (browserLang.indexOf('-') !== -1) {
            browserLang = browserLang.split('-')[0];
        }
        if (browserLang.indexOf('_') !== -1) {
            browserLang = browserLang.split('_')[0];
        }
        return browserLang;
    };
    /**
     * Returns the culture language code name from the browser, e.g. "de-DE"
     *
     * @returns string
     */
    IntlService.getBrowserLocale = function () {
        if (typeof window === 'undefined' || typeof window.navigator === 'undefined') {
            return INTL_DEFAULT_LOCALE;
        }
        var browserCultureLang = window.navigator["languages"] ? window.navigator["languages"][0] : undefined;
        browserCultureLang = browserCultureLang || window.navigator.language || window.navigator["browserLanguage"] || window.navigator["userLanguage"];
        return browserCultureLang || INTL_DEFAULT_LOCALE;
    };
    IntlService.prototype.validationErrorMessage = function (control) {
        if (control.errors) {
            var anyError = false;
            var error = void 0;
            for (var code in control.errors) {
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
    };
    IntlService = __decorate([
        Injectable()
    ], IntlService);
    return IntlService;
}(IntlHelper));
export { IntlService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjby5tbW9ucy9hbmd1bGFyLWludGwvIiwic291cmNlcyI6WyJzZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRXpDLE9BQU8sRUFBQyxVQUFVLEVBQUUsVUFBVSxFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFLekQ7SUFBaUMsK0JBQVU7SUE0Q3ZDO2VBQ0ksa0JBQU0sU0FBUyxDQUFDO0lBQ3BCLENBQUM7SUE1Q0Q7Ozs7T0FJRztJQUNJLDBCQUFjLEdBQXJCO1FBRUksSUFBSSxPQUFPLE1BQU0sS0FBSyxXQUFXLElBQUksT0FBTyxNQUFNLENBQUMsU0FBUyxLQUFLLFdBQVcsRUFBRTtZQUMxRSxPQUFPLFNBQVMsQ0FBQztTQUNwQjtRQUVELElBQUksV0FBVyxHQUFRLE1BQU0sQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUNwRyxXQUFXLEdBQUcsV0FBVyxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsaUJBQWlCLENBQUMsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxJQUFJLG1CQUFtQixDQUFDO1FBRXpKLElBQUksV0FBVyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtZQUNqQyxXQUFXLEdBQUcsV0FBVyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUMzQztRQUVELElBQUksV0FBVyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtZQUNqQyxXQUFXLEdBQUcsV0FBVyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUMzQztRQUVELE9BQU8sV0FBVyxDQUFDO0lBQ3ZCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksNEJBQWdCLEdBQXZCO1FBRUksSUFBSSxPQUFPLE1BQU0sS0FBSyxXQUFXLElBQUksT0FBTyxNQUFNLENBQUMsU0FBUyxLQUFLLFdBQVcsRUFBRTtZQUMxRSxPQUFPLG1CQUFtQixDQUFDO1NBQzlCO1FBRUQsSUFBSSxrQkFBa0IsR0FBUSxNQUFNLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDM0csa0JBQWtCLEdBQUcsa0JBQWtCLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxRQUFRLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLENBQUM7UUFFaEosT0FBTyxrQkFBa0IsSUFBSSxtQkFBbUIsQ0FBQztJQUNyRCxDQUFDO0lBTU0sNENBQXNCLEdBQTdCLFVBQThCLE9BQXdCO1FBRWxELElBQUksT0FBTyxDQUFDLE1BQU0sRUFBRTtZQUVoQixJQUFJLFFBQVEsR0FBRyxLQUFLLENBQUM7WUFDckIsSUFBSSxLQUFLLFNBQUssQ0FBQztZQUVmLEtBQUssSUFBSSxJQUFJLElBQUksT0FBTyxDQUFDLE1BQU0sRUFBRTtnQkFDN0IsS0FBSyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBRTdCLElBQUksSUFBSSxJQUFJLFVBQVUsRUFBRTtvQkFDcEIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLGlEQUFpRCxDQUFDLENBQUM7aUJBRTFFO3FCQUFNLElBQUksSUFBSSxJQUFJLFdBQVcsRUFBRTtvQkFDNUIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLGtEQUFrRCxFQUFFLEVBQUMsTUFBTSxFQUFFLENBQUMsS0FBSyxJQUFJLEtBQUssQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQyxDQUFDO2lCQUUzSDtxQkFBTSxJQUFJLEtBQUssWUFBWSxLQUFLLElBQUksS0FBSyxDQUFDLE9BQU8sRUFBRTtvQkFFaEQsSUFBUyxLQUFLLENBQUMsT0FBTyxZQUFZLFVBQVUsRUFBRTt3QkFDMUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7cUJBQy9CO29CQUVELE9BQU8sS0FBSyxDQUFDLE9BQU8sQ0FBQztpQkFFeEI7cUJBQU0sSUFBSSxLQUFLLFlBQVksVUFBVSxFQUFFO29CQUNwQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBRTlCO3FCQUFNLElBQUksT0FBTyxLQUFLLElBQUksUUFBUSxFQUFFO29CQUNqQyxPQUFPLEtBQUssQ0FBQztpQkFDaEI7Z0JBRUQsUUFBUSxHQUFHLElBQUksQ0FBQzthQUNuQjtZQUVELElBQUksUUFBUSxFQUFFO2dCQUNWLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxxREFBcUQsQ0FBQyxDQUFDO2FBQzlFO1NBQ0o7UUFFRCxPQUFPLFNBQVMsQ0FBQztJQUVyQixDQUFDO0lBekZRLFdBQVc7UUFEdkIsVUFBVSxFQUFFO09BQ0EsV0FBVyxDQTBGdkI7SUFBRCxrQkFBQztDQUFBLEFBMUZELENBQWlDLFVBQVUsR0EwRjFDO1NBMUZZLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge0Fic3RyYWN0Q29udHJvbH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQge0ludGxIZWxwZXIsIE1lc3NhZ2VSZWZ9IGZyb20gXCJAY28ubW1vbnMvanMtaW50bFwiO1xuXG5kZWNsYXJlIHZhciBJTlRMX0RFRkFVTFRfTE9DQUxFOiBzdHJpbmc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBJbnRsU2VydmljZSBleHRlbmRzIEludGxIZWxwZXIge1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgbGFuZ3VhZ2UgY29kZSBuYW1lIGZyb20gdGhlIGJyb3dzZXIsIGUuZy4gXCJkZVwiXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyBzdHJpbmdcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0QnJvd3NlckxhbmcoKTogc3RyaW5nIHtcblxuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIHdpbmRvdy5uYXZpZ2F0b3IgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGJyb3dzZXJMYW5nOiBhbnkgPSB3aW5kb3cubmF2aWdhdG9yW1wibGFuZ3VhZ2VzXCJdID8gd2luZG93Lm5hdmlnYXRvcltcImxhbmd1YWdlc1wiXVswXSA6IHVuZGVmaW5lZDtcbiAgICAgICAgYnJvd3NlckxhbmcgPSBicm93c2VyTGFuZyB8fCB3aW5kb3cubmF2aWdhdG9yLmxhbmd1YWdlIHx8IHdpbmRvdy5uYXZpZ2F0b3JbXCJicm93c2VyTGFuZ3VhZ2VcIl0gfHwgd2luZG93Lm5hdmlnYXRvcltcInVzZXJMYW5ndWFnZVwiXSB8fCBJTlRMX0RFRkFVTFRfTE9DQUxFO1xuXG4gICAgICAgIGlmIChicm93c2VyTGFuZy5pbmRleE9mKCctJykgIT09IC0xKSB7XG4gICAgICAgICAgICBicm93c2VyTGFuZyA9IGJyb3dzZXJMYW5nLnNwbGl0KCctJylbMF07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYnJvd3NlckxhbmcuaW5kZXhPZignXycpICE9PSAtMSkge1xuICAgICAgICAgICAgYnJvd3NlckxhbmcgPSBicm93c2VyTGFuZy5zcGxpdCgnXycpWzBdO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGJyb3dzZXJMYW5nO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGN1bHR1cmUgbGFuZ3VhZ2UgY29kZSBuYW1lIGZyb20gdGhlIGJyb3dzZXIsIGUuZy4gXCJkZS1ERVwiXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyBzdHJpbmdcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0QnJvd3NlckxvY2FsZSgpOiBzdHJpbmcge1xuXG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2Ygd2luZG93Lm5hdmlnYXRvciA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHJldHVybiBJTlRMX0RFRkFVTFRfTE9DQUxFO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGJyb3dzZXJDdWx0dXJlTGFuZzogYW55ID0gd2luZG93Lm5hdmlnYXRvcltcImxhbmd1YWdlc1wiXSA/IHdpbmRvdy5uYXZpZ2F0b3JbXCJsYW5ndWFnZXNcIl1bMF0gOiB1bmRlZmluZWQ7XG4gICAgICAgIGJyb3dzZXJDdWx0dXJlTGFuZyA9IGJyb3dzZXJDdWx0dXJlTGFuZyB8fCB3aW5kb3cubmF2aWdhdG9yLmxhbmd1YWdlIHx8IHdpbmRvdy5uYXZpZ2F0b3JbXCJicm93c2VyTGFuZ3VhZ2VcIl0gfHwgd2luZG93Lm5hdmlnYXRvcltcInVzZXJMYW5ndWFnZVwiXTtcblxuICAgICAgICByZXR1cm4gYnJvd3NlckN1bHR1cmVMYW5nIHx8IElOVExfREVGQVVMVF9MT0NBTEU7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKHVuZGVmaW5lZCk7XG4gICAgfVxuXG4gICAgcHVibGljIHZhbGlkYXRpb25FcnJvck1lc3NhZ2UoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogc3RyaW5nIHtcblxuICAgICAgICBpZiAoY29udHJvbC5lcnJvcnMpIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgbGV0IGFueUVycm9yID0gZmFsc2U7XG4gICAgICAgICAgICBsZXQgZXJyb3I6IGFueTtcblxuICAgICAgICAgICAgZm9yIChsZXQgY29kZSBpbiBjb250cm9sLmVycm9ycykge1xuICAgICAgICAgICAgICAgIGVycm9yID0gY29udHJvbC5lcnJvcnNbY29kZV07XG5cbiAgICAgICAgICAgICAgICBpZiAoY29kZSA9PSBcInJlcXVpcmVkXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubWVzc2FnZShcIkBjby5tbW9ucy9hbmd1bGFyLWludGwjdmFsaWRhdGlvbi9yZXF1aXJlZEVycm9yXCIpO1xuXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjb2RlID09IFwibWlubGVuZ3RoXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubWVzc2FnZShcIkBjby5tbW9ucy9hbmd1bGFyLWludGwjdmFsaWRhdGlvbi9taW5MZW5ndGhFcnJvclwiLCB7bGVuZ3RoOiAoZXJyb3IgJiYgZXJyb3IucmVxdWlyZWRMZW5ndGgpIHx8IDB9KTtcblxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvciAmJiBlcnJvci5tZXNzYWdlKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKDxhbnk+ZXJyb3IubWVzc2FnZSBpbnN0YW5jZW9mIE1lc3NhZ2VSZWYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWVzc2FnZShlcnJvci5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBlcnJvci5tZXNzYWdlO1xuXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChlcnJvciBpbnN0YW5jZW9mIE1lc3NhZ2VSZWYpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubWVzc2FnZShlcnJvcik7XG5cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBlcnJvciA9PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBhbnlFcnJvciA9IHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChhbnlFcnJvcikge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1lc3NhZ2UoXCJAY28ubW1vbnMvYW5ndWxhci1pbnRsI3ZhbGlkYXRpb24vaW52YWxpZFZhbHVlRXJyb3JcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuXG4gICAgfVxufVxuIl19