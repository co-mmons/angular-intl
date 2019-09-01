import * as tslib_1 from "tslib";
import { Pipe } from "@angular/core";
import { IntlService } from "./service";
var IntlMessagePipe = /** @class */ (function () {
    function IntlMessagePipe(service) {
        this.service = service;
    }
    IntlMessagePipe.prototype.transform = function (key, values) {
        return this.service.message(key, values);
    };
    IntlMessagePipe = tslib_1.__decorate([
        Pipe({
            name: "intlMessage"
        }),
        tslib_1.__metadata("design:paramtypes", [IntlService])
    ], IntlMessagePipe);
    return IntlMessagePipe;
}());
export { IntlMessagePipe };
//# sourceMappingURL=message-pipe.js.map