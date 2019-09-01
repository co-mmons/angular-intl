import * as tslib_1 from "tslib";
import { Pipe } from "@angular/core";
import { IntlService } from "./service";
var IntlValuePipe = /** @class */ (function () {
    function IntlValuePipe(service) {
        this.service = service;
    }
    IntlValuePipe.prototype.transform = function (value) {
        return this.service.value(value);
    };
    IntlValuePipe = tslib_1.__decorate([
        Pipe({
            name: "intlValue"
        }),
        tslib_1.__metadata("design:paramtypes", [IntlService])
    ], IntlValuePipe);
    return IntlValuePipe;
}());
export { IntlValuePipe };
//# sourceMappingURL=value-pipe.js.map