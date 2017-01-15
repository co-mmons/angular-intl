import { NgModule } from "@angular/core";
import { I18nService } from "./service";
import { I18nTranslatePipe } from "./translate-pipe";
export var I18nModule = (function () {
    function I18nModule() {
    }
    I18nModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [I18nTranslatePipe],
                    providers: [I18nService],
                    exports: [I18nTranslatePipe]
                },] },
    ];
    /** @nocollapse */
    I18nModule.ctorParameters = [];
    return I18nModule;
}());
//# sourceMappingURL=module.js.map