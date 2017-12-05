import { Pipe } from "@angular/core";
import { IntlService } from "./service";
var IntlCurrencyFormatPipe = /** @class */ (function () {
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
    return IntlCurrencyFormatPipe;
}());
export { IntlCurrencyFormatPipe };
//# sourceMappingURL=currency-format-pipe.js.map