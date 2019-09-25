import * as tslib_1 from "tslib";
import { Pipe } from "@angular/core";
import { IntlService } from "./service";
let IntlMessagePipe = class IntlMessagePipe {
    constructor(service) {
        this.service = service;
    }
    transform(key, values) {
        return this.service.message(key, values);
    }
};
IntlMessagePipe.ctorParameters = () => [
    { type: IntlService }
];
IntlMessagePipe = tslib_1.__decorate([
    Pipe({
        name: "intlMessage"
    }),
    tslib_1.__metadata("design:paramtypes", [IntlService])
], IntlMessagePipe);
export { IntlMessagePipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZS1waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvLm1tb25zL2FuZ3VsYXItaW50bC8iLCJzb3VyY2VzIjpbIm1lc3NhZ2UtcGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLElBQUksRUFBZ0IsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLFdBQVcsQ0FBQztBQU10QyxJQUFhLGVBQWUsR0FBNUIsTUFBYSxlQUFlO0lBRXhCLFlBQW9CLE9BQW9CO1FBQXBCLFlBQU8sR0FBUCxPQUFPLENBQWE7SUFDeEMsQ0FBQztJQUVELFNBQVMsQ0FBQyxHQUF3QixFQUFFLE1BQVk7UUFDNUMsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDN0MsQ0FBQztDQUNKLENBQUE7O1lBTmdDLFdBQVc7O0FBRi9CLGVBQWU7SUFIM0IsSUFBSSxDQUFDO1FBQ0YsSUFBSSxFQUFFLGFBQWE7S0FDdEIsQ0FBQzs2Q0FHK0IsV0FBVztHQUYvQixlQUFlLENBUTNCO1NBUlksZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UGlwZSwgUGlwZVRyYW5zZm9ybX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7SW50bFNlcnZpY2V9IGZyb20gXCIuL3NlcnZpY2VcIjtcbmltcG9ydCB7TWVzc2FnZVJlZn0gZnJvbSBcIkBjby5tbW9ucy9qcy1pbnRsXCI7XG5cbkBQaXBlKHtcbiAgICBuYW1lOiBcImludGxNZXNzYWdlXCJcbn0pXG5leHBvcnQgY2xhc3MgSW50bE1lc3NhZ2VQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNlcnZpY2U6IEludGxTZXJ2aWNlKSB7XG4gICAgfVxuXG4gICAgdHJhbnNmb3JtKGtleTogc3RyaW5nIHwgTWVzc2FnZVJlZiwgdmFsdWVzPzogYW55KTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VydmljZS5tZXNzYWdlKGtleSwgdmFsdWVzKTtcbiAgICB9XG59Il19