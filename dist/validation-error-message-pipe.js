var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Pipe } from "@angular/core";
import { IntlService } from "./service";
var IntlValidationErrorMessagePipe = /** @class */ (function () {
    function IntlValidationErrorMessagePipe(service) {
        this.service = service;
    }
    IntlValidationErrorMessagePipe.prototype.transform = function (control) {
        if (this.lastErrors === control.errors) {
            return this.lastMessage;
        }
        this.lastMessage = this.service.validationErrorMessage(control);
        this.lastErrors = control.errors;
        return this.lastMessage;
    };
    IntlValidationErrorMessagePipe.prototype.ngOnDestroy = function () {
        this.lastErrors = undefined;
        this.lastMessage = undefined;
    };
    IntlValidationErrorMessagePipe = __decorate([
        Pipe({
            name: "intlValidationErrorMessage",
            pure: false
        }),
        __metadata("design:paramtypes", [IntlService])
    ], IntlValidationErrorMessagePipe);
    return IntlValidationErrorMessagePipe;
}());
export { IntlValidationErrorMessagePipe };
//# sourceMappingURL=validation-error-message-pipe.js.map