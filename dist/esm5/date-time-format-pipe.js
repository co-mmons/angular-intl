import { __decorate } from "tslib";
import { Pipe } from "@angular/core";
import { IntlService } from "./service";
var IntlDateTimeFormatPipe = /** @class */ (function () {
    function IntlDateTimeFormatPipe(service) {
        this.service = service;
    }
    IntlDateTimeFormatPipe.prototype.transform = function (dateTime, options) {
        return this.service.dateTimeFormat(dateTime, options);
    };
    IntlDateTimeFormatPipe.ctorParameters = function () { return [
        { type: IntlService }
    ]; };
    IntlDateTimeFormatPipe = __decorate([
        Pipe({
            name: "intlDateTimeFormat"
        })
    ], IntlDateTimeFormatPipe);
    return IntlDateTimeFormatPipe;
}());
export { IntlDateTimeFormatPipe };
var IntlDateFormatPipe = /** @class */ (function () {
    function IntlDateFormatPipe(service) {
        this.service = service;
    }
    IntlDateFormatPipe.prototype.transform = function (dateTime, options) {
        return this.service.dateFormat(dateTime, options);
    };
    IntlDateFormatPipe.ctorParameters = function () { return [
        { type: IntlService }
    ]; };
    IntlDateFormatPipe = __decorate([
        Pipe({
            name: "intlDateFormat"
        })
    ], IntlDateFormatPipe);
    return IntlDateFormatPipe;
}());
export { IntlDateFormatPipe };
var IntlTimeFormatPipe = /** @class */ (function () {
    function IntlTimeFormatPipe(service) {
        this.service = service;
    }
    IntlTimeFormatPipe.prototype.transform = function (dateTime, options) {
        return this.service.timeFormat(dateTime, options);
    };
    IntlTimeFormatPipe.ctorParameters = function () { return [
        { type: IntlService }
    ]; };
    IntlTimeFormatPipe = __decorate([
        Pipe({
            name: "intlTimeFormat"
        })
    ], IntlTimeFormatPipe);
    return IntlTimeFormatPipe;
}());
export { IntlTimeFormatPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS10aW1lLWZvcm1hdC1waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvLm1tb25zL2FuZ3VsYXItaW50bC8iLCJzb3VyY2VzIjpbImRhdGUtdGltZS1mb3JtYXQtcGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLElBQUksRUFBZ0IsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLFdBQVcsQ0FBQztBQUt0QztJQUVJLGdDQUFvQixPQUFvQjtRQUFwQixZQUFPLEdBQVAsT0FBTyxDQUFhO0lBQ3hDLENBQUM7SUFFRCwwQ0FBUyxHQUFULFVBQVUsUUFBdUIsRUFBRSxPQUFhO1FBQzVDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzFELENBQUM7O2dCQUw0QixXQUFXOztJQUYvQixzQkFBc0I7UUFIbEMsSUFBSSxDQUFDO1lBQ0YsSUFBSSxFQUFFLG9CQUFvQjtTQUM3QixDQUFDO09BQ1csc0JBQXNCLENBUWxDO0lBQUQsNkJBQUM7Q0FBQSxBQVJELElBUUM7U0FSWSxzQkFBc0I7QUFhbkM7SUFFSSw0QkFBb0IsT0FBb0I7UUFBcEIsWUFBTyxHQUFQLE9BQU8sQ0FBYTtJQUN4QyxDQUFDO0lBRUQsc0NBQVMsR0FBVCxVQUFVLFFBQXVCLEVBQUUsT0FBYTtRQUM1QyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUN0RCxDQUFDOztnQkFMNEIsV0FBVzs7SUFGL0Isa0JBQWtCO1FBSDlCLElBQUksQ0FBQztZQUNGLElBQUksRUFBRSxnQkFBZ0I7U0FDekIsQ0FBQztPQUNXLGtCQUFrQixDQVE5QjtJQUFELHlCQUFDO0NBQUEsQUFSRCxJQVFDO1NBUlksa0JBQWtCO0FBYS9CO0lBRUksNEJBQW9CLE9BQW9CO1FBQXBCLFlBQU8sR0FBUCxPQUFPLENBQWE7SUFDeEMsQ0FBQztJQUVELHNDQUFTLEdBQVQsVUFBVSxRQUF1QixFQUFFLE9BQWE7UUFDNUMsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDdEQsQ0FBQzs7Z0JBTDRCLFdBQVc7O0lBRi9CLGtCQUFrQjtRQUg5QixJQUFJLENBQUM7WUFDRixJQUFJLEVBQUUsZ0JBQWdCO1NBQ3pCLENBQUM7T0FDVyxrQkFBa0IsQ0FROUI7SUFBRCx5QkFBQztDQUFBLEFBUkQsSUFRQztTQVJZLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UGlwZSwgUGlwZVRyYW5zZm9ybX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7SW50bFNlcnZpY2V9IGZyb20gXCIuL3NlcnZpY2VcIjtcblxuQFBpcGUoe1xuICAgIG5hbWU6IFwiaW50bERhdGVUaW1lRm9ybWF0XCJcbn0pXG5leHBvcnQgY2xhc3MgSW50bERhdGVUaW1lRm9ybWF0UGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBzZXJ2aWNlOiBJbnRsU2VydmljZSkge1xuICAgIH1cblxuICAgIHRyYW5zZm9ybShkYXRlVGltZTogbnVtYmVyIHwgRGF0ZSwgb3B0aW9ucz86IGFueSk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLnNlcnZpY2UuZGF0ZVRpbWVGb3JtYXQoZGF0ZVRpbWUsIG9wdGlvbnMpO1xuICAgIH1cbn1cblxuQFBpcGUoe1xuICAgIG5hbWU6IFwiaW50bERhdGVGb3JtYXRcIlxufSlcbmV4cG9ydCBjbGFzcyBJbnRsRGF0ZUZvcm1hdFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgc2VydmljZTogSW50bFNlcnZpY2UpIHtcbiAgICB9XG5cbiAgICB0cmFuc2Zvcm0oZGF0ZVRpbWU6IG51bWJlciB8IERhdGUsIG9wdGlvbnM/OiBhbnkpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXJ2aWNlLmRhdGVGb3JtYXQoZGF0ZVRpbWUsIG9wdGlvbnMpO1xuICAgIH1cbn1cblxuQFBpcGUoe1xuICAgIG5hbWU6IFwiaW50bFRpbWVGb3JtYXRcIlxufSlcbmV4cG9ydCBjbGFzcyBJbnRsVGltZUZvcm1hdFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgc2VydmljZTogSW50bFNlcnZpY2UpIHtcbiAgICB9XG5cbiAgICB0cmFuc2Zvcm0oZGF0ZVRpbWU6IG51bWJlciB8IERhdGUsIG9wdGlvbnM/OiBhbnkpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXJ2aWNlLnRpbWVGb3JtYXQoZGF0ZVRpbWUsIG9wdGlvbnMpO1xuICAgIH1cbn0iXX0=