var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from "@angular/core";
import { IntlService } from "./service";
import { IntlMessagePipe } from "./message-pipe";
import { IntlRelativeFormatStaticPipe, IntlRelativeFormatPipe } from "./relative-format-pipe";
import { IntlDateTimeFormatPipe, IntlTimeFormatPipe, IntlDateFormatPipe } from "./date-time-format-pipe";
import { IntlCurrencyFormatPipe } from "./currency-format-pipe";
import { IntlDecimalFormatPipe } from "./decimal-format-pipe";
import { IntlPercentFormatPipe } from "./percent-format-pipe";
import { IntlValidationErrorMessagePipe } from "./validation-error-message-pipe";
var IntlModule = /** @class */ (function () {
    function IntlModule() {
    }
    IntlModule = __decorate([
        NgModule({
            declarations: [IntlMessagePipe, IntlRelativeFormatStaticPipe, IntlRelativeFormatPipe, IntlDateTimeFormatPipe, IntlTimeFormatPipe, IntlDateFormatPipe, IntlCurrencyFormatPipe, IntlDecimalFormatPipe, IntlPercentFormatPipe, IntlValidationErrorMessagePipe],
            providers: [IntlService],
            exports: [IntlMessagePipe, IntlRelativeFormatStaticPipe, IntlRelativeFormatPipe, IntlDateTimeFormatPipe, IntlTimeFormatPipe, IntlDateFormatPipe, IntlCurrencyFormatPipe, IntlDecimalFormatPipe, IntlPercentFormatPipe, IntlValidationErrorMessagePipe]
        })
    ], IntlModule);
    return IntlModule;
}());
export { IntlModule };
//# sourceMappingURL=module.js.map