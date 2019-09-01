import * as tslib_1 from "tslib";
import { NgModule } from "@angular/core";
import { IntlCurrencyFormatPipe } from "./currency-format-pipe";
import { IntlDateFormatPipe, IntlDateTimeFormatPipe, IntlTimeFormatPipe } from "./date-time-format-pipe";
import { IntlDecimalFormatPipe } from "./decimal-format-pipe";
import { IntlMessagePipe } from "./message-pipe";
import { IntlPercentFormatPipe } from "./percent-format-pipe";
import { IntlRelativeFormatPipe, IntlRelativeFormatStaticPipe } from "./relative-format-pipe";
import { IntlService } from "./service";
import { IntlValidationErrorMessagePipe } from "./validation-error-message-pipe";
import { IntlValuePipe } from "./value-pipe";
var IntlModule = /** @class */ (function () {
    function IntlModule() {
    }
    IntlModule_1 = IntlModule;
    IntlModule.forRoot = function () {
        return { ngModule: IntlModule_1, providers: [IntlService] };
    };
    var IntlModule_1;
    IntlModule = IntlModule_1 = tslib_1.__decorate([
        NgModule({
            declarations: [IntlValuePipe, IntlMessagePipe, IntlRelativeFormatStaticPipe, IntlRelativeFormatPipe, IntlDateTimeFormatPipe, IntlTimeFormatPipe, IntlDateFormatPipe, IntlCurrencyFormatPipe, IntlDecimalFormatPipe, IntlPercentFormatPipe, IntlValidationErrorMessagePipe],
            exports: [IntlValuePipe, IntlMessagePipe, IntlRelativeFormatStaticPipe, IntlRelativeFormatPipe, IntlDateTimeFormatPipe, IntlTimeFormatPipe, IntlDateFormatPipe, IntlCurrencyFormatPipe, IntlDecimalFormatPipe, IntlPercentFormatPipe, IntlValidationErrorMessagePipe]
        })
    ], IntlModule);
    return IntlModule;
}());
export { IntlModule };
//# sourceMappingURL=module.js.map