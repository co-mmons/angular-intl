var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { NgModule, Optional, SkipSelf } from "@angular/core";
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
    function IntlModule(parentModule) {
        if (parentModule) {
            throw new Error("IntlModule is already loaded. Import it in the app module only");
        }
    }
    IntlModule_1 = IntlModule;
    IntlModule.forRoot = function () {
        return { ngModule: IntlModule_1 };
    };
    IntlModule = IntlModule_1 = __decorate([
        NgModule({
            declarations: [IntlValuePipe, IntlMessagePipe, IntlRelativeFormatStaticPipe, IntlRelativeFormatPipe, IntlDateTimeFormatPipe, IntlTimeFormatPipe, IntlDateFormatPipe, IntlCurrencyFormatPipe, IntlDecimalFormatPipe, IntlPercentFormatPipe, IntlValidationErrorMessagePipe],
            providers: [IntlService],
            exports: [IntlValuePipe, IntlMessagePipe, IntlRelativeFormatStaticPipe, IntlRelativeFormatPipe, IntlDateTimeFormatPipe, IntlTimeFormatPipe, IntlDateFormatPipe, IntlCurrencyFormatPipe, IntlDecimalFormatPipe, IntlPercentFormatPipe, IntlValidationErrorMessagePipe]
        }),
        __param(0, Optional()), __param(0, SkipSelf()),
        __metadata("design:paramtypes", [IntlModule])
    ], IntlModule);
    return IntlModule;
    var IntlModule_1;
}());
export { IntlModule };
//# sourceMappingURL=module.js.map