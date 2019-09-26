import * as tslib_1 from "tslib";
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
    IntlValidationErrorMessagePipe.ctorParameters = function () { return [
        { type: IntlService }
    ]; };
    IntlValidationErrorMessagePipe = tslib_1.__decorate([
        Pipe({
            name: "intlValidationErrorMessage",
            pure: false
        }),
        tslib_1.__metadata("design:paramtypes", [IntlService])
    ], IntlValidationErrorMessagePipe);
    return IntlValidationErrorMessagePipe;
}());
export { IntlValidationErrorMessagePipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGlvbi1lcnJvci1tZXNzYWdlLXBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY28ubW1vbnMvYW5ndWxhci1pbnRsLyIsInNvdXJjZXMiOlsidmFsaWRhdGlvbi1lcnJvci1tZXNzYWdlLXBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyxJQUFJLEVBQWdCLE1BQU0sZUFBZSxDQUFDO0FBRWxELE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxXQUFXLENBQUM7QUFNdEM7SUFFSSx3Q0FBb0IsT0FBb0I7UUFBcEIsWUFBTyxHQUFQLE9BQU8sQ0FBYTtJQUN4QyxDQUFDO0lBTUQsa0RBQVMsR0FBVCxVQUFVLE9BQXdCO1FBRTlCLElBQUksSUFBSSxDQUFDLFVBQVUsS0FBSyxPQUFPLENBQUMsTUFBTSxFQUFFO1lBQ3BDLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztTQUMzQjtRQUVELElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxzQkFBc0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNoRSxJQUFJLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUM7UUFFakMsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzVCLENBQUM7SUFFRCxvREFBVyxHQUFYO1FBQ0ksSUFBSSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7UUFDNUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxTQUFTLENBQUM7SUFDakMsQ0FBQzs7Z0JBdEI0QixXQUFXOztJQUYvQiw4QkFBOEI7UUFKMUMsSUFBSSxDQUFDO1lBQ0YsSUFBSSxFQUFFLDRCQUE0QjtZQUNsQyxJQUFJLEVBQUUsS0FBSztTQUNkLENBQUM7aURBRytCLFdBQVc7T0FGL0IsOEJBQThCLENBeUIxQztJQUFELHFDQUFDO0NBQUEsQUF6QkQsSUF5QkM7U0F6QlksOEJBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtQaXBlLCBQaXBlVHJhbnNmb3JtfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtBYnN0cmFjdENvbnRyb2wsIFZhbGlkYXRpb25FcnJvcnN9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHtJbnRsU2VydmljZX0gZnJvbSBcIi4vc2VydmljZVwiO1xuXG5AUGlwZSh7XG4gICAgbmFtZTogXCJpbnRsVmFsaWRhdGlvbkVycm9yTWVzc2FnZVwiLFxuICAgIHB1cmU6IGZhbHNlXG59KVxuZXhwb3J0IGNsYXNzIEludGxWYWxpZGF0aW9uRXJyb3JNZXNzYWdlUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBzZXJ2aWNlOiBJbnRsU2VydmljZSkge1xuICAgIH1cblxuICAgIHByaXZhdGUgbGFzdE1lc3NhZ2U6IHN0cmluZztcblxuICAgIHByaXZhdGUgbGFzdEVycm9yczogVmFsaWRhdGlvbkVycm9ycztcblxuICAgIHRyYW5zZm9ybShjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBzdHJpbmcge1xuXG4gICAgICAgIGlmICh0aGlzLmxhc3RFcnJvcnMgPT09IGNvbnRyb2wuZXJyb3JzKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5sYXN0TWVzc2FnZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubGFzdE1lc3NhZ2UgPSB0aGlzLnNlcnZpY2UudmFsaWRhdGlvbkVycm9yTWVzc2FnZShjb250cm9sKTtcbiAgICAgICAgdGhpcy5sYXN0RXJyb3JzID0gY29udHJvbC5lcnJvcnM7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMubGFzdE1lc3NhZ2U7XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMubGFzdEVycm9ycyA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5sYXN0TWVzc2FnZSA9IHVuZGVmaW5lZDtcbiAgICB9XG59Il19