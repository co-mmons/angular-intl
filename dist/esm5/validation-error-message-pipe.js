import { __decorate } from "tslib";
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
    IntlValidationErrorMessagePipe = __decorate([
        Pipe({
            name: "intlValidationErrorMessage",
            pure: false
        })
    ], IntlValidationErrorMessagePipe);
    return IntlValidationErrorMessagePipe;
}());
export { IntlValidationErrorMessagePipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGlvbi1lcnJvci1tZXNzYWdlLXBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY28ubW1vbnMvYW5ndWxhci1pbnRsLyIsInNvdXJjZXMiOlsidmFsaWRhdGlvbi1lcnJvci1tZXNzYWdlLXBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyxJQUFJLEVBQWdCLE1BQU0sZUFBZSxDQUFDO0FBRWxELE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxXQUFXLENBQUM7QUFNdEM7SUFFSSx3Q0FBb0IsT0FBb0I7UUFBcEIsWUFBTyxHQUFQLE9BQU8sQ0FBYTtJQUN4QyxDQUFDO0lBTUQsa0RBQVMsR0FBVCxVQUFVLE9BQXdCO1FBRTlCLElBQUksSUFBSSxDQUFDLFVBQVUsS0FBSyxPQUFPLENBQUMsTUFBTSxFQUFFO1lBQ3BDLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztTQUMzQjtRQUVELElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxzQkFBc0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNoRSxJQUFJLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUM7UUFFakMsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzVCLENBQUM7SUFFRCxvREFBVyxHQUFYO1FBQ0ksSUFBSSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7UUFDNUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxTQUFTLENBQUM7SUFDakMsQ0FBQzs7Z0JBdEI0QixXQUFXOztJQUYvQiw4QkFBOEI7UUFKMUMsSUFBSSxDQUFDO1lBQ0YsSUFBSSxFQUFFLDRCQUE0QjtZQUNsQyxJQUFJLEVBQUUsS0FBSztTQUNkLENBQUM7T0FDVyw4QkFBOEIsQ0F5QjFDO0lBQUQscUNBQUM7Q0FBQSxBQXpCRCxJQXlCQztTQXpCWSw4QkFBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1BpcGUsIFBpcGVUcmFuc2Zvcm19IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge0Fic3RyYWN0Q29udHJvbCwgVmFsaWRhdGlvbkVycm9yc30gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQge0ludGxTZXJ2aWNlfSBmcm9tIFwiLi9zZXJ2aWNlXCI7XG5cbkBQaXBlKHtcbiAgICBuYW1lOiBcImludGxWYWxpZGF0aW9uRXJyb3JNZXNzYWdlXCIsXG4gICAgcHVyZTogZmFsc2Vcbn0pXG5leHBvcnQgY2xhc3MgSW50bFZhbGlkYXRpb25FcnJvck1lc3NhZ2VQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNlcnZpY2U6IEludGxTZXJ2aWNlKSB7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBsYXN0TWVzc2FnZTogc3RyaW5nO1xuXG4gICAgcHJpdmF0ZSBsYXN0RXJyb3JzOiBWYWxpZGF0aW9uRXJyb3JzO1xuXG4gICAgdHJhbnNmb3JtKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IHN0cmluZyB7XG5cbiAgICAgICAgaWYgKHRoaXMubGFzdEVycm9ycyA9PT0gY29udHJvbC5lcnJvcnMpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmxhc3RNZXNzYWdlO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5sYXN0TWVzc2FnZSA9IHRoaXMuc2VydmljZS52YWxpZGF0aW9uRXJyb3JNZXNzYWdlKGNvbnRyb2wpO1xuICAgICAgICB0aGlzLmxhc3RFcnJvcnMgPSBjb250cm9sLmVycm9ycztcblxuICAgICAgICByZXR1cm4gdGhpcy5sYXN0TWVzc2FnZTtcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5sYXN0RXJyb3JzID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLmxhc3RNZXNzYWdlID0gdW5kZWZpbmVkO1xuICAgIH1cbn0iXX0=