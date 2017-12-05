import { Pipe } from "@angular/core";
import { IntlService } from "./service";
var IntlDecimalFormatPipe = /** @class */ (function () {
    function IntlDecimalFormatPipe(service) {
        this.service = service;
    }
    IntlDecimalFormatPipe.prototype.transform = function (value, predefinedOptionsOrOptions, additionalOptions) {
        if (typeof predefinedOptionsOrOptions == "string") {
            return this.service.decimalFormat(value, predefinedOptionsOrOptions, additionalOptions);
        }
        else {
            return this.service.decimalFormat(value, predefinedOptionsOrOptions);
        }
    };
    return IntlDecimalFormatPipe;
}());
export { IntlDecimalFormatPipe };
//# sourceMappingURL=decimal-format-pipe.js.map