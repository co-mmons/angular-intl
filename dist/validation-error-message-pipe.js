import { Pipe } from "@angular/core";
import { IntlService } from "./service";
var IntlValidationErrorMessagePipe = (function () {
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
    IntlValidationErrorMessagePipe.decorators = [
        { type: Pipe, args: [{
                    name: "intlValidationErrorMessage",
                    pure: false
                },] },
    ];
    /** @nocollapse */
    IntlValidationErrorMessagePipe.ctorParameters = function () { return [
        { type: IntlService, },
    ]; };
    return IntlValidationErrorMessagePipe;
}());
export { IntlValidationErrorMessagePipe };
//# sourceMappingURL=validation-error-message-pipe.js.map