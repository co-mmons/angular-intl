import { Pipe } from "@angular/core";
import { IntlService } from "./service";
export var IntlTranslatePipe = (function () {
    function IntlTranslatePipe(service) {
        this.service = service;
    }
    IntlTranslatePipe.prototype.transform = function (key, values) {
        return this.service.message(key, values);
    };
    IntlTranslatePipe.decorators = [
        { type: Pipe, args: [{
                    name: "intlMessage"
                },] },
    ];
    /** @nocollapse */
    IntlTranslatePipe.ctorParameters = [
        { type: IntlService, },
    ];
    return IntlTranslatePipe;
}());
//# sourceMappingURL=translate-pipe.js.map