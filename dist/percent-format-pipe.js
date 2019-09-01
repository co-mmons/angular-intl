import * as tslib_1 from "tslib";
import { Pipe } from "@angular/core";
import { IntlService } from "./service";
var IntlPercentFormatPipe = /** @class */ (function () {
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
    IntlPercentFormatPipe = tslib_1.__decorate([
        Pipe({
            name: "intlPercentFormat"
        }),
        tslib_1.__metadata("design:paramtypes", [IntlService])
    ], IntlPercentFormatPipe);
    return IntlPercentFormatPipe;
}());
export { IntlPercentFormatPipe };
//# sourceMappingURL=percent-format-pipe.js.map