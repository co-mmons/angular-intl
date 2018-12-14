var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
    IntlModule = __decorate([
        NgModule({
            declarations: [IntlValuePipe, IntlMessagePipe, IntlRelativeFormatStaticPipe, IntlRelativeFormatPipe, IntlDateTimeFormatPipe, IntlTimeFormatPipe, IntlDateFormatPipe, IntlCurrencyFormatPipe, IntlDecimalFormatPipe, IntlPercentFormatPipe, IntlValidationErrorMessagePipe],
            providers: [IntlService],
            exports: [IntlService, IntlValuePipe, IntlMessagePipe, IntlRelativeFormatStaticPipe, IntlRelativeFormatPipe, IntlDateTimeFormatPipe, IntlTimeFormatPipe, IntlDateFormatPipe, IntlCurrencyFormatPipe, IntlDecimalFormatPipe, IntlPercentFormatPipe, IntlValidationErrorMessagePipe]
        })
    ], IntlModule);
    return IntlModule;
}());
export { IntlModule };
//# sourceMappingURL=module.js.map