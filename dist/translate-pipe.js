import { Pipe } from "@angular/core";
import { I18nService } from "./service";
export var I18nTranslatePipe = (function () {
    function I18nTranslatePipe(service) {
        this.service = service;
    }
    I18nTranslatePipe.prototype.transform = function (key, values) {
        return this.service.message(key, values);
    };
    I18nTranslatePipe.decorators = [
        { type: Pipe, args: [{
                    name: "i18nMessage"
                },] },
    ];
    /** @nocollapse */
    I18nTranslatePipe.ctorParameters = [
        { type: I18nService, },
    ];
    return I18nTranslatePipe;
}());
//# sourceMappingURL=translate-pipe.js.map