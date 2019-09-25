import * as tslib_1 from "tslib";
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
IntlDateTimeFormatPipe = tslib_1.__decorate([
    Pipe({
        name: "intlDateTimeFormat"
    }),
    tslib_1.__metadata("design:paramtypes", [IntlService])
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
IntlDateFormatPipe = tslib_1.__decorate([
    Pipe({
        name: "intlDateFormat"
    }),
    tslib_1.__metadata("design:paramtypes", [IntlService])
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
IntlTimeFormatPipe = tslib_1.__decorate([
    Pipe({
        name: "intlTimeFormat"
    }),
    tslib_1.__metadata("design:paramtypes", [IntlService])
], IntlTimeFormatPipe);
export { IntlTimeFormatPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS10aW1lLWZvcm1hdC1waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvLm1tb25zL2FuZ3VsYXItaW50bC8iLCJzb3VyY2VzIjpbImRhdGUtdGltZS1mb3JtYXQtcGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLElBQUksRUFBZ0IsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLFdBQVcsQ0FBQztBQUt0QyxJQUFhLHNCQUFzQixHQUFuQyxNQUFhLHNCQUFzQjtJQUUvQixZQUFvQixPQUFvQjtRQUFwQixZQUFPLEdBQVAsT0FBTyxDQUFhO0lBQ3hDLENBQUM7SUFFRCxTQUFTLENBQUMsUUFBdUIsRUFBRSxPQUFhO1FBQzVDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzFELENBQUM7Q0FDSixDQUFBOztZQU5nQyxXQUFXOztBQUYvQixzQkFBc0I7SUFIbEMsSUFBSSxDQUFDO1FBQ0YsSUFBSSxFQUFFLG9CQUFvQjtLQUM3QixDQUFDOzZDQUcrQixXQUFXO0dBRi9CLHNCQUFzQixDQVFsQztTQVJZLHNCQUFzQjtBQWFuQyxJQUFhLGtCQUFrQixHQUEvQixNQUFhLGtCQUFrQjtJQUUzQixZQUFvQixPQUFvQjtRQUFwQixZQUFPLEdBQVAsT0FBTyxDQUFhO0lBQ3hDLENBQUM7SUFFRCxTQUFTLENBQUMsUUFBdUIsRUFBRSxPQUFhO1FBQzVDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3RELENBQUM7Q0FDSixDQUFBOztZQU5nQyxXQUFXOztBQUYvQixrQkFBa0I7SUFIOUIsSUFBSSxDQUFDO1FBQ0YsSUFBSSxFQUFFLGdCQUFnQjtLQUN6QixDQUFDOzZDQUcrQixXQUFXO0dBRi9CLGtCQUFrQixDQVE5QjtTQVJZLGtCQUFrQjtBQWEvQixJQUFhLGtCQUFrQixHQUEvQixNQUFhLGtCQUFrQjtJQUUzQixZQUFvQixPQUFvQjtRQUFwQixZQUFPLEdBQVAsT0FBTyxDQUFhO0lBQ3hDLENBQUM7SUFFRCxTQUFTLENBQUMsUUFBdUIsRUFBRSxPQUFhO1FBQzVDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3RELENBQUM7Q0FDSixDQUFBOztZQU5nQyxXQUFXOztBQUYvQixrQkFBa0I7SUFIOUIsSUFBSSxDQUFDO1FBQ0YsSUFBSSxFQUFFLGdCQUFnQjtLQUN6QixDQUFDOzZDQUcrQixXQUFXO0dBRi9CLGtCQUFrQixDQVE5QjtTQVJZLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UGlwZSwgUGlwZVRyYW5zZm9ybX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7SW50bFNlcnZpY2V9IGZyb20gXCIuL3NlcnZpY2VcIjtcblxuQFBpcGUoe1xuICAgIG5hbWU6IFwiaW50bERhdGVUaW1lRm9ybWF0XCJcbn0pXG5leHBvcnQgY2xhc3MgSW50bERhdGVUaW1lRm9ybWF0UGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBzZXJ2aWNlOiBJbnRsU2VydmljZSkge1xuICAgIH1cblxuICAgIHRyYW5zZm9ybShkYXRlVGltZTogbnVtYmVyIHwgRGF0ZSwgb3B0aW9ucz86IGFueSk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLnNlcnZpY2UuZGF0ZVRpbWVGb3JtYXQoZGF0ZVRpbWUsIG9wdGlvbnMpO1xuICAgIH1cbn1cblxuQFBpcGUoe1xuICAgIG5hbWU6IFwiaW50bERhdGVGb3JtYXRcIlxufSlcbmV4cG9ydCBjbGFzcyBJbnRsRGF0ZUZvcm1hdFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgc2VydmljZTogSW50bFNlcnZpY2UpIHtcbiAgICB9XG5cbiAgICB0cmFuc2Zvcm0oZGF0ZVRpbWU6IG51bWJlciB8IERhdGUsIG9wdGlvbnM/OiBhbnkpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXJ2aWNlLmRhdGVGb3JtYXQoZGF0ZVRpbWUsIG9wdGlvbnMpO1xuICAgIH1cbn1cblxuQFBpcGUoe1xuICAgIG5hbWU6IFwiaW50bFRpbWVGb3JtYXRcIlxufSlcbmV4cG9ydCBjbGFzcyBJbnRsVGltZUZvcm1hdFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgc2VydmljZTogSW50bFNlcnZpY2UpIHtcbiAgICB9XG5cbiAgICB0cmFuc2Zvcm0oZGF0ZVRpbWU6IG51bWJlciB8IERhdGUsIG9wdGlvbnM/OiBhbnkpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXJ2aWNlLnRpbWVGb3JtYXQoZGF0ZVRpbWUsIG9wdGlvbnMpO1xuICAgIH1cbn0iXX0=