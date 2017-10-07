import { Pipe } from "@angular/core";
import { IntlService } from "./service";
var IntlPercentFormatPipe = (function () {
    function IntlPercentFormatPipe(service) {
        this.service = service;
    }
    IntlPercentFormatPipe.prototype.transform = function (value, predefinedOptionsOrOptions, additionalOptions) {
        if (typeof predefinedOptionsOrOptions == "string") {
            return this.service.percentFormat(value, predefinedOptionsOrOptions, additionalOptions);
        }
        else {
            return this.service.percentFormat(value, predefinedOptionsOrOptions);
        }
    };
    IntlPercentFormatPipe.decorators = [
        { type: Pipe, args: [{
                    name: "intlPercentFormat"
                },] },
    ];
    /** @nocollapse */
    IntlPercentFormatPipe.ctorParameters = function () { return [
        { type: IntlService, },
    ]; };
    return IntlPercentFormatPipe;
}());
export { IntlPercentFormatPipe };
//# sourceMappingURL=percent-format-pipe.js.map