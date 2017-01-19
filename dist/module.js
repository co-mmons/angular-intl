import { NgModule } from "@angular/core";
import { IntlService } from "./service";
import { IntlTranslatePipe } from "./translate-pipe";
import { IntlRelativePipe, IntlRelativeLivePipe } from "./relative-pipe";
import { IntlDateTimePipe, IntlTimePipe, IntlDatePipe } from "./datetime-pipe";
export var IntlModule = (function () {
    function IntlModule() {
    }
    IntlModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [IntlTranslatePipe, IntlRelativePipe, IntlRelativeLivePipe, IntlDateTimePipe, IntlTimePipe, IntlDatePipe],
                    providers: [IntlService],
                    exports: [IntlTranslatePipe, IntlRelativePipe, IntlRelativeLivePipe, IntlDateTimePipe, IntlTimePipe, IntlDatePipe]
                },] },
    ];
    /** @nocollapse */
    IntlModule.ctorParameters = [];
    return IntlModule;
}());
//# sourceMappingURL=module.js.map