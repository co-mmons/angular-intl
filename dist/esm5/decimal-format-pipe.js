import * as tslib_1 from "tslib";
import { Pipe } from "@angular/core";
import { IntlService } from "./service";
var IntlDecimalFormatPipe = /** @class */ (function () {
    function IntlDecimalFormatPipe(service) {
        this.service = service;
    }
    IntlDecimalFormatPipe.prototype.transform = function (value, predefinedOptionsOrOptions, additionalOptions) {
        if (typeof predefinedOptionsOrOptions == "string") {
            return this.service.decimalFormat(value, predefinedOptionsOrOptions, additionalOptions);
        }
        else {
            return this.service.decimalFormat(value, predefinedOptionsOrOptions);
        }
    };
    IntlDecimalFormatPipe.ctorParameters = function () { return [
        { type: IntlService }
    ]; };
    IntlDecimalFormatPipe = tslib_1.__decorate([
        Pipe({
            name: "intlDecimalFormat"
        }),
        tslib_1.__metadata("design:paramtypes", [IntlService])
    ], IntlDecimalFormatPipe);
    return IntlDecimalFormatPipe;
}());
export { IntlDecimalFormatPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVjaW1hbC1mb3JtYXQtcGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjby5tbW9ucy9hbmd1bGFyLWludGwvIiwic291cmNlcyI6WyJkZWNpbWFsLWZvcm1hdC1waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsSUFBSSxFQUFnQixNQUFNLGVBQWUsQ0FBQztBQUdsRCxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sV0FBVyxDQUFDO0FBS3RDO0lBRUksK0JBQW9CLE9BQW9CO1FBQXBCLFlBQU8sR0FBUCxPQUFPLENBQWE7SUFDeEMsQ0FBQztJQUVELHlDQUFTLEdBQVQsVUFBVSxLQUF5QixFQUFFLDBCQUE4RCxFQUFFLGlCQUE0QztRQUM3SSxJQUFJLE9BQU8sMEJBQTBCLElBQUksUUFBUSxFQUFFO1lBQy9DLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLDBCQUEwQixFQUFFLGlCQUFpQixDQUFDLENBQUM7U0FDM0Y7YUFBTTtZQUNILE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLDBCQUEwQixDQUFDLENBQUM7U0FDeEU7SUFDTCxDQUFDOztnQkFUNEIsV0FBVzs7SUFGL0IscUJBQXFCO1FBSGpDLElBQUksQ0FBQztZQUNGLElBQUksRUFBRSxtQkFBbUI7U0FDNUIsQ0FBQztpREFHK0IsV0FBVztPQUYvQixxQkFBcUIsQ0FZakM7SUFBRCw0QkFBQztDQUFBLEFBWkQsSUFZQztTQVpZLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UGlwZSwgUGlwZVRyYW5zZm9ybX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7QmlnTnVtYmVyfSBmcm9tIFwiYmlnbnVtYmVyLmpzXCI7XG5cbmltcG9ydCB7SW50bFNlcnZpY2V9IGZyb20gXCIuL3NlcnZpY2VcIjtcblxuQFBpcGUoe1xuICAgIG5hbWU6IFwiaW50bERlY2ltYWxGb3JtYXRcIlxufSlcbmV4cG9ydCBjbGFzcyBJbnRsRGVjaW1hbEZvcm1hdFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgc2VydmljZTogSW50bFNlcnZpY2UpIHtcbiAgICB9XG5cbiAgICB0cmFuc2Zvcm0odmFsdWU6IG51bWJlciB8IEJpZ051bWJlciwgcHJlZGVmaW5lZE9wdGlvbnNPck9wdGlvbnM/OiBzdHJpbmcgfCBJbnRsLk51bWJlckZvcm1hdE9wdGlvbnMsIGFkZGl0aW9uYWxPcHRpb25zPzogSW50bC5OdW1iZXJGb3JtYXRPcHRpb25zKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKHR5cGVvZiBwcmVkZWZpbmVkT3B0aW9uc09yT3B0aW9ucyA9PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zZXJ2aWNlLmRlY2ltYWxGb3JtYXQodmFsdWUsIHByZWRlZmluZWRPcHRpb25zT3JPcHRpb25zLCBhZGRpdGlvbmFsT3B0aW9ucyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zZXJ2aWNlLmRlY2ltYWxGb3JtYXQodmFsdWUsIHByZWRlZmluZWRPcHRpb25zT3JPcHRpb25zKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==