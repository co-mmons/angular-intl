import { __decorate, __metadata } from "tslib";
import { Pipe } from "@angular/core";
import { IntlService } from "./service";
var IntlMessagePipe = /** @class */ (function () {
    function IntlMessagePipe(service) {
        this.service = service;
    }
    IntlMessagePipe.prototype.transform = function (key, values) {
        return this.service.message(key, values);
    };
    IntlMessagePipe.ctorParameters = function () { return [
        { type: IntlService }
    ]; };
    IntlMessagePipe = __decorate([
        Pipe({
            name: "intlMessage"
        }),
        __metadata("design:paramtypes", [IntlService])
    ], IntlMessagePipe);
    return IntlMessagePipe;
}());
export { IntlMessagePipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZS1waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvLm1tb25zL2FuZ3VsYXItaW50bC8iLCJzb3VyY2VzIjpbIm1lc3NhZ2UtcGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLElBQUksRUFBZ0IsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLFdBQVcsQ0FBQztBQU10QztJQUVJLHlCQUFvQixPQUFvQjtRQUFwQixZQUFPLEdBQVAsT0FBTyxDQUFhO0lBQ3hDLENBQUM7SUFFRCxtQ0FBUyxHQUFULFVBQVUsR0FBd0IsRUFBRSxNQUFZO1FBQzVDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQzdDLENBQUM7O2dCQUw0QixXQUFXOztJQUYvQixlQUFlO1FBSDNCLElBQUksQ0FBQztZQUNGLElBQUksRUFBRSxhQUFhO1NBQ3RCLENBQUM7eUNBRytCLFdBQVc7T0FGL0IsZUFBZSxDQVEzQjtJQUFELHNCQUFDO0NBQUEsQUFSRCxJQVFDO1NBUlksZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UGlwZSwgUGlwZVRyYW5zZm9ybX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7SW50bFNlcnZpY2V9IGZyb20gXCIuL3NlcnZpY2VcIjtcbmltcG9ydCB7TWVzc2FnZVJlZn0gZnJvbSBcIkBjby5tbW9ucy9qcy1pbnRsXCI7XG5cbkBQaXBlKHtcbiAgICBuYW1lOiBcImludGxNZXNzYWdlXCJcbn0pXG5leHBvcnQgY2xhc3MgSW50bE1lc3NhZ2VQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNlcnZpY2U6IEludGxTZXJ2aWNlKSB7XG4gICAgfVxuXG4gICAgdHJhbnNmb3JtKGtleTogc3RyaW5nIHwgTWVzc2FnZVJlZiwgdmFsdWVzPzogYW55KTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VydmljZS5tZXNzYWdlKGtleSwgdmFsdWVzKTtcbiAgICB9XG59Il19