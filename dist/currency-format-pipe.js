import { Pipe } from "@angular/core";
import { IntlService } from "./service";
var IntlCurrencyFormatPipe = (function () {
    function IntlCurrencyFormatPipe(service) {
        this.service = service;
    }
    IntlCurrencyFormatPipe.prototype.transform = function (value, predefinedOptionsOrOptions, additionalOptions) {
        if (typeof predefinedOptionsOrOptions == "string") {
            return this.service.currencyFormat(value, predefinedOptionsOrOptions, additionalOptions);
        }
        else {
            return this.service.currencyFormat(value, predefinedOptionsOrOptions);
        }
    };
    IntlCurrencyFormatPipe.decorators = [
        { type: Pipe, args: [{
                    name: "intlCurrencyFormat"
                },] },
    ];
    /** @nocollapse */
    IntlCurrencyFormatPipe.ctorParameters = function () { return [
        { type: IntlService, },
    ]; };
    return IntlCurrencyFormatPipe;
}());
export { IntlCurrencyFormatPipe };
//# sourceMappingURL=currency-format-pipe.js.map