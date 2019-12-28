import { __decorate } from "tslib";
import { Pipe } from "@angular/core";
import { IntlService } from "./service";
let IntlDateTimeFormatPipe = class IntlDateTimeFormatPipe {
    constructor(service) {
        this.service = service;
    }
    transform(dateTime, options) {
        return this.service.dateTimeFormat(dateTime, options);
    }
};
IntlDateTimeFormatPipe.ctorParameters = () => [
    { type: IntlService }
];
IntlDateTimeFormatPipe = __decorate([
    Pipe({
        name: "intlDateTimeFormat"
    })
], IntlDateTimeFormatPipe);
export { IntlDateTimeFormatPipe };
let IntlDateFormatPipe = class IntlDateFormatPipe {
    constructor(service) {
        this.service = service;
    }
    transform(dateTime, options) {
        return this.service.dateFormat(dateTime, options);
    }
};
IntlDateFormatPipe.ctorParameters = () => [
    { type: IntlService }
];
IntlDateFormatPipe = __decorate([
    Pipe({
        name: "intlDateFormat"
    })
], IntlDateFormatPipe);
export { IntlDateFormatPipe };
let IntlTimeFormatPipe = class IntlTimeFormatPipe {
    constructor(service) {
        this.service = service;
    }
    transform(dateTime, options) {
        return this.service.timeFormat(dateTime, options);
    }
};
IntlTimeFormatPipe.ctorParameters = () => [
    { type: IntlService }
];
IntlTimeFormatPipe = __decorate([
    Pipe({
        name: "intlTimeFormat"
    })
], IntlTimeFormatPipe);
export { IntlTimeFormatPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS10aW1lLWZvcm1hdC1waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvLm1tb25zL2FuZ3VsYXItaW50bC8iLCJzb3VyY2VzIjpbImRhdGUtdGltZS1mb3JtYXQtcGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLElBQUksRUFBZ0IsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLFdBQVcsQ0FBQztBQUt0QyxJQUFhLHNCQUFzQixHQUFuQyxNQUFhLHNCQUFzQjtJQUUvQixZQUFvQixPQUFvQjtRQUFwQixZQUFPLEdBQVAsT0FBTyxDQUFhO0lBQ3hDLENBQUM7SUFFRCxTQUFTLENBQUMsUUFBdUIsRUFBRSxPQUFhO1FBQzVDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzFELENBQUM7Q0FDSixDQUFBOztZQU5nQyxXQUFXOztBQUYvQixzQkFBc0I7SUFIbEMsSUFBSSxDQUFDO1FBQ0YsSUFBSSxFQUFFLG9CQUFvQjtLQUM3QixDQUFDO0dBQ1csc0JBQXNCLENBUWxDO1NBUlksc0JBQXNCO0FBYW5DLElBQWEsa0JBQWtCLEdBQS9CLE1BQWEsa0JBQWtCO0lBRTNCLFlBQW9CLE9BQW9CO1FBQXBCLFlBQU8sR0FBUCxPQUFPLENBQWE7SUFDeEMsQ0FBQztJQUVELFNBQVMsQ0FBQyxRQUF1QixFQUFFLE9BQWE7UUFDNUMsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDdEQsQ0FBQztDQUNKLENBQUE7O1lBTmdDLFdBQVc7O0FBRi9CLGtCQUFrQjtJQUg5QixJQUFJLENBQUM7UUFDRixJQUFJLEVBQUUsZ0JBQWdCO0tBQ3pCLENBQUM7R0FDVyxrQkFBa0IsQ0FROUI7U0FSWSxrQkFBa0I7QUFhL0IsSUFBYSxrQkFBa0IsR0FBL0IsTUFBYSxrQkFBa0I7SUFFM0IsWUFBb0IsT0FBb0I7UUFBcEIsWUFBTyxHQUFQLE9BQU8sQ0FBYTtJQUN4QyxDQUFDO0lBRUQsU0FBUyxDQUFDLFFBQXVCLEVBQUUsT0FBYTtRQUM1QyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUN0RCxDQUFDO0NBQ0osQ0FBQTs7WUFOZ0MsV0FBVzs7QUFGL0Isa0JBQWtCO0lBSDlCLElBQUksQ0FBQztRQUNGLElBQUksRUFBRSxnQkFBZ0I7S0FDekIsQ0FBQztHQUNXLGtCQUFrQixDQVE5QjtTQVJZLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UGlwZSwgUGlwZVRyYW5zZm9ybX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7SW50bFNlcnZpY2V9IGZyb20gXCIuL3NlcnZpY2VcIjtcblxuQFBpcGUoe1xuICAgIG5hbWU6IFwiaW50bERhdGVUaW1lRm9ybWF0XCJcbn0pXG5leHBvcnQgY2xhc3MgSW50bERhdGVUaW1lRm9ybWF0UGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBzZXJ2aWNlOiBJbnRsU2VydmljZSkge1xuICAgIH1cblxuICAgIHRyYW5zZm9ybShkYXRlVGltZTogbnVtYmVyIHwgRGF0ZSwgb3B0aW9ucz86IGFueSk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLnNlcnZpY2UuZGF0ZVRpbWVGb3JtYXQoZGF0ZVRpbWUsIG9wdGlvbnMpO1xuICAgIH1cbn1cblxuQFBpcGUoe1xuICAgIG5hbWU6IFwiaW50bERhdGVGb3JtYXRcIlxufSlcbmV4cG9ydCBjbGFzcyBJbnRsRGF0ZUZvcm1hdFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgc2VydmljZTogSW50bFNlcnZpY2UpIHtcbiAgICB9XG5cbiAgICB0cmFuc2Zvcm0oZGF0ZVRpbWU6IG51bWJlciB8IERhdGUsIG9wdGlvbnM/OiBhbnkpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXJ2aWNlLmRhdGVGb3JtYXQoZGF0ZVRpbWUsIG9wdGlvbnMpO1xuICAgIH1cbn1cblxuQFBpcGUoe1xuICAgIG5hbWU6IFwiaW50bFRpbWVGb3JtYXRcIlxufSlcbmV4cG9ydCBjbGFzcyBJbnRsVGltZUZvcm1hdFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgc2VydmljZTogSW50bFNlcnZpY2UpIHtcbiAgICB9XG5cbiAgICB0cmFuc2Zvcm0oZGF0ZVRpbWU6IG51bWJlciB8IERhdGUsIG9wdGlvbnM/OiBhbnkpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXJ2aWNlLnRpbWVGb3JtYXQoZGF0ZVRpbWUsIG9wdGlvbnMpO1xuICAgIH1cbn0iXX0=