import { __decorate, __extends, __metadata } from "tslib";
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
        Injectable(),
        __metadata("design:paramtypes", [])
    ], IntlService);
    return IntlService;
}(IntlHelper));
export { IntlService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjby5tbW9ucy9hbmd1bGFyLWludGwvIiwic291cmNlcyI6WyJzZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRXpDLE9BQU8sRUFBQyxVQUFVLEVBQUUsVUFBVSxFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFLekQ7SUFBaUMsK0JBQVU7SUE0Q3ZDO2VBQ0ksa0JBQU0sU0FBUyxDQUFDO0lBQ3BCLENBQUM7SUE1Q0Q7Ozs7T0FJRztJQUNJLDBCQUFjLEdBQXJCO1FBRUksSUFBSSxPQUFPLE1BQU0sS0FBSyxXQUFXLElBQUksT0FBTyxNQUFNLENBQUMsU0FBUyxLQUFLLFdBQVcsRUFBRTtZQUMxRSxPQUFPLFNBQVMsQ0FBQztTQUNwQjtRQUVELElBQUksV0FBVyxHQUFRLE1BQU0sQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUNwRyxXQUFXLEdBQUcsV0FBVyxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsaUJBQWlCLENBQUMsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxJQUFJLG1CQUFtQixDQUFDO1FBRXpKLElBQUksV0FBVyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtZQUNqQyxXQUFXLEdBQUcsV0FBVyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUMzQztRQUVELElBQUksV0FBVyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtZQUNqQyxXQUFXLEdBQUcsV0FBVyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUMzQztRQUVELE9BQU8sV0FBVyxDQUFDO0lBQ3ZCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksNEJBQWdCLEdBQXZCO1FBRUksSUFBSSxPQUFPLE1BQU0sS0FBSyxXQUFXLElBQUksT0FBTyxNQUFNLENBQUMsU0FBUyxLQUFLLFdBQVcsRUFBRTtZQUMxRSxPQUFPLG1CQUFtQixDQUFDO1NBQzlCO1FBRUQsSUFBSSxrQkFBa0IsR0FBUSxNQUFNLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDM0csa0JBQWtCLEdBQUcsa0JBQWtCLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxRQUFRLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLENBQUM7UUFFaEosT0FBTyxrQkFBa0IsSUFBSSxtQkFBbUIsQ0FBQztJQUNyRCxDQUFDO0lBTU0sNENBQXNCLEdBQTdCLFVBQThCLE9BQXdCO1FBRWxELElBQUksT0FBTyxDQUFDLE1BQU0sRUFBRTtZQUVoQixJQUFJLFFBQVEsR0FBRyxLQUFLLENBQUM7WUFDckIsSUFBSSxLQUFLLFNBQUssQ0FBQztZQUVmLEtBQUssSUFBSSxJQUFJLElBQUksT0FBTyxDQUFDLE1BQU0sRUFBRTtnQkFDN0IsS0FBSyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBRTdCLElBQUksSUFBSSxJQUFJLFVBQVUsRUFBRTtvQkFDcEIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLGlEQUFpRCxDQUFDLENBQUM7aUJBRTFFO3FCQUFNLElBQUksSUFBSSxJQUFJLFdBQVcsRUFBRTtvQkFDNUIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLGtEQUFrRCxFQUFFLEVBQUMsTUFBTSxFQUFFLENBQUMsS0FBSyxJQUFJLEtBQUssQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQyxDQUFDO2lCQUUzSDtxQkFBTSxJQUFJLEtBQUssWUFBWSxLQUFLLElBQUksS0FBSyxDQUFDLE9BQU8sRUFBRTtvQkFFaEQsSUFBUyxLQUFLLENBQUMsT0FBTyxZQUFZLFVBQVUsRUFBRTt3QkFDMUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7cUJBQy9CO29CQUVELE9BQU8sS0FBSyxDQUFDLE9BQU8sQ0FBQztpQkFFeEI7cUJBQU0sSUFBSSxLQUFLLFlBQVksVUFBVSxFQUFFO29CQUNwQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBRTlCO3FCQUFNLElBQUksT0FBTyxLQUFLLElBQUksUUFBUSxFQUFFO29CQUNqQyxPQUFPLEtBQUssQ0FBQztpQkFDaEI7Z0JBRUQsUUFBUSxHQUFHLElBQUksQ0FBQzthQUNuQjtZQUVELElBQUksUUFBUSxFQUFFO2dCQUNWLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxxREFBcUQsQ0FBQyxDQUFDO2FBQzlFO1NBQ0o7UUFFRCxPQUFPLFNBQVMsQ0FBQztJQUVyQixDQUFDO0lBekZRLFdBQVc7UUFEdkIsVUFBVSxFQUFFOztPQUNBLFdBQVcsQ0EwRnZCO0lBQUQsa0JBQUM7Q0FBQSxBQTFGRCxDQUFpQyxVQUFVLEdBMEYxQztTQTFGWSxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtBYnN0cmFjdENvbnRyb2x9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHtJbnRsSGVscGVyLCBNZXNzYWdlUmVmfSBmcm9tIFwiQGNvLm1tb25zL2pzLWludGxcIjtcblxuZGVjbGFyZSB2YXIgSU5UTF9ERUZBVUxUX0xPQ0FMRTogc3RyaW5nO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSW50bFNlcnZpY2UgZXh0ZW5kcyBJbnRsSGVscGVyIHtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGxhbmd1YWdlIGNvZGUgbmFtZSBmcm9tIHRoZSBicm93c2VyLCBlLmcuIFwiZGVcIlxuICAgICAqXG4gICAgICogQHJldHVybnMgc3RyaW5nXG4gICAgICovXG4gICAgc3RhdGljIGdldEJyb3dzZXJMYW5nKCk6IHN0cmluZyB7XG5cbiAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiB3aW5kb3cubmF2aWdhdG9yID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBicm93c2VyTGFuZzogYW55ID0gd2luZG93Lm5hdmlnYXRvcltcImxhbmd1YWdlc1wiXSA/IHdpbmRvdy5uYXZpZ2F0b3JbXCJsYW5ndWFnZXNcIl1bMF0gOiB1bmRlZmluZWQ7XG4gICAgICAgIGJyb3dzZXJMYW5nID0gYnJvd3NlckxhbmcgfHwgd2luZG93Lm5hdmlnYXRvci5sYW5ndWFnZSB8fCB3aW5kb3cubmF2aWdhdG9yW1wiYnJvd3Nlckxhbmd1YWdlXCJdIHx8IHdpbmRvdy5uYXZpZ2F0b3JbXCJ1c2VyTGFuZ3VhZ2VcIl0gfHwgSU5UTF9ERUZBVUxUX0xPQ0FMRTtcblxuICAgICAgICBpZiAoYnJvd3NlckxhbmcuaW5kZXhPZignLScpICE9PSAtMSkge1xuICAgICAgICAgICAgYnJvd3NlckxhbmcgPSBicm93c2VyTGFuZy5zcGxpdCgnLScpWzBdO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGJyb3dzZXJMYW5nLmluZGV4T2YoJ18nKSAhPT0gLTEpIHtcbiAgICAgICAgICAgIGJyb3dzZXJMYW5nID0gYnJvd3Nlckxhbmcuc3BsaXQoJ18nKVswXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBicm93c2VyTGFuZztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBjdWx0dXJlIGxhbmd1YWdlIGNvZGUgbmFtZSBmcm9tIHRoZSBicm93c2VyLCBlLmcuIFwiZGUtREVcIlxuICAgICAqXG4gICAgICogQHJldHVybnMgc3RyaW5nXG4gICAgICovXG4gICAgc3RhdGljIGdldEJyb3dzZXJMb2NhbGUoKTogc3RyaW5nIHtcblxuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIHdpbmRvdy5uYXZpZ2F0b3IgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICByZXR1cm4gSU5UTF9ERUZBVUxUX0xPQ0FMRTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBicm93c2VyQ3VsdHVyZUxhbmc6IGFueSA9IHdpbmRvdy5uYXZpZ2F0b3JbXCJsYW5ndWFnZXNcIl0gPyB3aW5kb3cubmF2aWdhdG9yW1wibGFuZ3VhZ2VzXCJdWzBdIDogdW5kZWZpbmVkO1xuICAgICAgICBicm93c2VyQ3VsdHVyZUxhbmcgPSBicm93c2VyQ3VsdHVyZUxhbmcgfHwgd2luZG93Lm5hdmlnYXRvci5sYW5ndWFnZSB8fCB3aW5kb3cubmF2aWdhdG9yW1wiYnJvd3Nlckxhbmd1YWdlXCJdIHx8IHdpbmRvdy5uYXZpZ2F0b3JbXCJ1c2VyTGFuZ3VhZ2VcIl07XG5cbiAgICAgICAgcmV0dXJuIGJyb3dzZXJDdWx0dXJlTGFuZyB8fCBJTlRMX0RFRkFVTFRfTE9DQUxFO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcih1bmRlZmluZWQpO1xuICAgIH1cblxuICAgIHB1YmxpYyB2YWxpZGF0aW9uRXJyb3JNZXNzYWdlKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IHN0cmluZyB7XG5cbiAgICAgICAgaWYgKGNvbnRyb2wuZXJyb3JzKSB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGxldCBhbnlFcnJvciA9IGZhbHNlO1xuICAgICAgICAgICAgbGV0IGVycm9yOiBhbnk7XG5cbiAgICAgICAgICAgIGZvciAobGV0IGNvZGUgaW4gY29udHJvbC5lcnJvcnMpIHtcbiAgICAgICAgICAgICAgICBlcnJvciA9IGNvbnRyb2wuZXJyb3JzW2NvZGVdO1xuXG4gICAgICAgICAgICAgICAgaWYgKGNvZGUgPT0gXCJyZXF1aXJlZFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1lc3NhZ2UoXCJAY28ubW1vbnMvYW5ndWxhci1pbnRsI3ZhbGlkYXRpb24vcmVxdWlyZWRFcnJvclwiKTtcblxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY29kZSA9PSBcIm1pbmxlbmd0aFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1lc3NhZ2UoXCJAY28ubW1vbnMvYW5ndWxhci1pbnRsI3ZhbGlkYXRpb24vbWluTGVuZ3RoRXJyb3JcIiwge2xlbmd0aDogKGVycm9yICYmIGVycm9yLnJlcXVpcmVkTGVuZ3RoKSB8fCAwfSk7XG5cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IgJiYgZXJyb3IubWVzc2FnZSkge1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICg8YW55PmVycm9yLm1lc3NhZ2UgaW5zdGFuY2VvZiBNZXNzYWdlUmVmKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2UoZXJyb3IubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZXJyb3IubWVzc2FnZTtcblxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZXJyb3IgaW5zdGFuY2VvZiBNZXNzYWdlUmVmKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1lc3NhZ2UoZXJyb3IpO1xuXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgZXJyb3IgPT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgYW55RXJyb3IgPSB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoYW55RXJyb3IpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tZXNzYWdlKFwiQGNvLm1tb25zL2FuZ3VsYXItaW50bCN2YWxpZGF0aW9uL2ludmFsaWRWYWx1ZUVycm9yXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcblxuICAgIH1cbn1cbiJdfQ==