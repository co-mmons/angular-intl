import { Pipe } from "@angular/core";
import { IntlService } from "./service";
var IntlMessagePipe = /** @class */ (function () {
    function IntlMessagePipe(service) {
        this.service = service;
    }
    IntlMessagePipe.prototype.transform = function (key, values) {
        return this.service.message(key, values);
    };
    return IntlMessagePipe;
}());
export { IntlMessagePipe };
//# sourceMappingURL=message-pipe.js.map