import { Pipe } from "@angular/core";
import { IntlService } from "./service";
export var IntlMessagePipe = (function () {
    function IntlMessagePipe(service) {
        this.service = service;
    }
    IntlMessagePipe.prototype.transform = function (key, values) {
        return this.service.message(key, values);
    };
    IntlMessagePipe.decorators = [
        { type: Pipe, args: [{
                    name: "intlMessage"
                },] },
    ];
    /** @nocollapse */
    IntlMessagePipe.ctorParameters = function () { return [
        { type: IntlService, },
    ]; };
    return IntlMessagePipe;
}());
//# sourceMappingURL=message-pipe.js.map