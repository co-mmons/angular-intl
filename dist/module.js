import { NgModule } from "@angular/core";
import { IntlService } from "./service";
import { IntlTranslatePipe } from "./translate-pipe";
import { IntlRelativeStaticPipe, IntlRelativePipe } from "./relative-pipe";
import { IntlDateTimePipe, IntlTimePipe, IntlDatePipe } from "./datetime-pipe";
export var IntlModule = (function () {
    function IntlModule() {
    }
    IntlModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [IntlTranslatePipe, IntlRelativeStaticPipe, IntlRelativePipe, IntlDateTimePipe, IntlTimePipe, IntlDatePipe],
                    providers: [IntlService],
                    exports: [IntlTranslatePipe, IntlRelativeStaticPipe, IntlRelativePipe, IntlDateTimePipe, IntlTimePipe, IntlDatePipe]
                },] },
    ];
    /** @nocollapse */
    IntlModule.ctorParameters = [];
    return IntlModule;
}());
//# sourceMappingURL=module.js.map