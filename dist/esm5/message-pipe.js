import { __decorate } from "tslib";
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
        })
    ], IntlMessagePipe);
    return IntlMessagePipe;
}());
export { IntlMessagePipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZS1waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvLm1tb25zL2FuZ3VsYXItaW50bC8iLCJzb3VyY2VzIjpbIm1lc3NhZ2UtcGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLElBQUksRUFBZ0IsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLFdBQVcsQ0FBQztBQU10QztJQUVJLHlCQUFvQixPQUFvQjtRQUFwQixZQUFPLEdBQVAsT0FBTyxDQUFhO0lBQ3hDLENBQUM7SUFFRCxtQ0FBUyxHQUFULFVBQVUsR0FBd0IsRUFBRSxNQUFZO1FBQzVDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQzdDLENBQUM7O2dCQUw0QixXQUFXOztJQUYvQixlQUFlO1FBSDNCLElBQUksQ0FBQztZQUNGLElBQUksRUFBRSxhQUFhO1NBQ3RCLENBQUM7T0FDVyxlQUFlLENBUTNCO0lBQUQsc0JBQUM7Q0FBQSxBQVJELElBUUM7U0FSWSxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtQaXBlLCBQaXBlVHJhbnNmb3JtfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtJbnRsU2VydmljZX0gZnJvbSBcIi4vc2VydmljZVwiO1xuaW1wb3J0IHtNZXNzYWdlUmVmfSBmcm9tIFwiQGNvLm1tb25zL2pzLWludGxcIjtcblxuQFBpcGUoe1xuICAgIG5hbWU6IFwiaW50bE1lc3NhZ2VcIlxufSlcbmV4cG9ydCBjbGFzcyBJbnRsTWVzc2FnZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgc2VydmljZTogSW50bFNlcnZpY2UpIHtcbiAgICB9XG5cbiAgICB0cmFuc2Zvcm0oa2V5OiBzdHJpbmcgfCBNZXNzYWdlUmVmLCB2YWx1ZXM/OiBhbnkpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXJ2aWNlLm1lc3NhZ2Uoa2V5LCB2YWx1ZXMpO1xuICAgIH1cbn0iXX0=