import { __decorate } from "tslib";
import { Pipe } from "@angular/core";
import { IntlService } from "./service";
let IntlPercentFormatPipe = class IntlPercentFormatPipe {
    constructor(service) {
        this.service = service;
    }
    transform(value, predefinedOptionsOrOptions, additionalOptions) {
        if (typeof predefinedOptionsOrOptions == "string") {
            return this.service.percentFormat(value, predefinedOptionsOrOptions, additionalOptions);
        }
        else {
            return this.service.percentFormat(value, predefinedOptionsOrOptions);
        }
    }
};
IntlPercentFormatPipe.ctorParameters = () => [
    { type: IntlService }
];
IntlPercentFormatPipe = __decorate([
    Pipe({
        name: "intlPercentFormat"
    })
], IntlPercentFormatPipe);
export { IntlPercentFormatPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyY2VudC1mb3JtYXQtcGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjby5tbW9ucy9hbmd1bGFyLWludGwvIiwic291cmNlcyI6WyJwZXJjZW50LWZvcm1hdC1waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsSUFBSSxFQUFnQixNQUFNLGVBQWUsQ0FBQztBQUdsRCxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sV0FBVyxDQUFDO0FBS3RDLElBQWEscUJBQXFCLEdBQWxDLE1BQWEscUJBQXFCO0lBRTlCLFlBQW9CLE9BQW9CO1FBQXBCLFlBQU8sR0FBUCxPQUFPLENBQWE7SUFDeEMsQ0FBQztJQUVELFNBQVMsQ0FBQyxLQUF5QixFQUFFLDBCQUE4RCxFQUFFLGlCQUE0QztRQUM3SSxJQUFJLE9BQU8sMEJBQTBCLElBQUksUUFBUSxFQUFFO1lBQy9DLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLDBCQUEwQixFQUFFLGlCQUFpQixDQUFDLENBQUM7U0FDM0Y7YUFBTTtZQUNILE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLDBCQUEwQixDQUFDLENBQUM7U0FDeEU7SUFDTCxDQUFDO0NBQ0osQ0FBQTs7WUFWZ0MsV0FBVzs7QUFGL0IscUJBQXFCO0lBSGpDLElBQUksQ0FBQztRQUNGLElBQUksRUFBRSxtQkFBbUI7S0FDNUIsQ0FBQztHQUNXLHFCQUFxQixDQVlqQztTQVpZLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UGlwZSwgUGlwZVRyYW5zZm9ybX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7QmlnTnVtYmVyfSBmcm9tIFwiYmlnbnVtYmVyLmpzXCI7XG5cbmltcG9ydCB7SW50bFNlcnZpY2V9IGZyb20gXCIuL3NlcnZpY2VcIjtcblxuQFBpcGUoe1xuICAgIG5hbWU6IFwiaW50bFBlcmNlbnRGb3JtYXRcIlxufSlcbmV4cG9ydCBjbGFzcyBJbnRsUGVyY2VudEZvcm1hdFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgc2VydmljZTogSW50bFNlcnZpY2UpIHtcbiAgICB9XG5cbiAgICB0cmFuc2Zvcm0odmFsdWU6IG51bWJlciB8IEJpZ051bWJlciwgcHJlZGVmaW5lZE9wdGlvbnNPck9wdGlvbnM/OiBzdHJpbmcgfCBJbnRsLk51bWJlckZvcm1hdE9wdGlvbnMsIGFkZGl0aW9uYWxPcHRpb25zPzogSW50bC5OdW1iZXJGb3JtYXRPcHRpb25zKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKHR5cGVvZiBwcmVkZWZpbmVkT3B0aW9uc09yT3B0aW9ucyA9PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zZXJ2aWNlLnBlcmNlbnRGb3JtYXQodmFsdWUsIHByZWRlZmluZWRPcHRpb25zT3JPcHRpb25zLCBhZGRpdGlvbmFsT3B0aW9ucyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zZXJ2aWNlLnBlcmNlbnRGb3JtYXQodmFsdWUsIHByZWRlZmluZWRPcHRpb25zT3JPcHRpb25zKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==