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
    return IntlValidationErrorMessagePipe;
}());
export { IntlValidationErrorMessagePipe };
//# sourceMappingURL=validation-error-message-pipe.js.map