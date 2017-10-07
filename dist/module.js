import { NgModule } from "@angular/core";
import { IntlService } from "./service";
import { IntlMessagePipe } from "./message-pipe";
import { IntlRelativeFormatStaticPipe, IntlRelativeFormatPipe } from "./relative-format-pipe";
import { IntlDateTimeFormatPipe, IntlTimeFormatPipe, IntlDateFormatPipe } from "./date-time-format-pipe";
import { IntlCurrencyFormatPipe } from "./currency-format-pipe";
import { IntlDecimalFormatPipe } from "./decimal-format-pipe";
import { IntlPercentFormatPipe } from "./percent-format-pipe";
import { IntlValidationErrorMessagePipe } from "./validation-error-message-pipe";
var IntlModule = (function () {
    function IntlModule() {
    }
    IntlModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [IntlMessagePipe, IntlRelativeFormatStaticPipe, IntlRelativeFormatPipe, IntlDateTimeFormatPipe, IntlTimeFormatPipe, IntlDateFormatPipe, IntlCurrencyFormatPipe, IntlDecimalFormatPipe, IntlPercentFormatPipe, IntlValidationErrorMessagePipe],
                    providers: [IntlService],
                    exports: [IntlMessagePipe, IntlRelativeFormatStaticPipe, IntlRelativeFormatPipe, IntlDateTimeFormatPipe, IntlTimeFormatPipe, IntlDateFormatPipe, IntlCurrencyFormatPipe, IntlDecimalFormatPipe, IntlPercentFormatPipe, IntlValidationErrorMessagePipe]
                },] },
    ];
    /** @nocollapse */
    IntlModule.ctorParameters = function () { return []; };
    return IntlModule;
}());
export { IntlModule };
//# sourceMappingURL=module.js.map