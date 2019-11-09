import { __decorate, __metadata } from "tslib";
import { Pipe } from "@angular/core";
import { IntlService } from "./service";
var IntlValuePipe = /** @class */ (function () {
    function IntlValuePipe(service) {
        this.service = service;
    }
    IntlValuePipe.prototype.transform = function (value) {
        return this.service.value(value);
    };
    IntlValuePipe.ctorParameters = function () { return [
        { type: IntlService }
    ]; };
    IntlValuePipe = __decorate([
        Pipe({
            name: "intlValue"
        }),
        __metadata("design:paramtypes", [IntlService])
    ], IntlValuePipe);
    return IntlValuePipe;
}());
export { IntlValuePipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsdWUtcGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjby5tbW9ucy9hbmd1bGFyLWludGwvIiwic291cmNlcyI6WyJ2YWx1ZS1waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsSUFBSSxFQUFnQixNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sV0FBVyxDQUFDO0FBTXRDO0lBRUksdUJBQW9CLE9BQW9CO1FBQXBCLFlBQU8sR0FBUCxPQUFPLENBQWE7SUFDeEMsQ0FBQztJQUVELGlDQUFTLEdBQVQsVUFBVSxLQUFxQjtRQUMzQixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3JDLENBQUM7O2dCQUw0QixXQUFXOztJQUYvQixhQUFhO1FBSHpCLElBQUksQ0FBQztZQUNGLElBQUksRUFBRSxXQUFXO1NBQ3BCLENBQUM7eUNBRytCLFdBQVc7T0FGL0IsYUFBYSxDQVF6QjtJQUFELG9CQUFDO0NBQUEsQUFSRCxJQVFDO1NBUlksYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UGlwZSwgUGlwZVRyYW5zZm9ybX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7SW50bFNlcnZpY2V9IGZyb20gXCIuL3NlcnZpY2VcIjtcbmltcG9ydCB7SW50bFZhbHVlfSBmcm9tIFwiQGNvLm1tb25zL2pzLWludGxcIjtcblxuQFBpcGUoe1xuICAgIG5hbWU6IFwiaW50bFZhbHVlXCJcbn0pXG5leHBvcnQgY2xhc3MgSW50bFZhbHVlUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBzZXJ2aWNlOiBJbnRsU2VydmljZSkge1xuICAgIH1cblxuICAgIHRyYW5zZm9ybSh2YWx1ZTogSW50bFZhbHVlPGFueT4pOiBhbnkge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXJ2aWNlLnZhbHVlKHZhbHVlKTtcbiAgICB9XG59Il19