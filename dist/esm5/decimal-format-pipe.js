import { __decorate } from "tslib";
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
    IntlDecimalFormatPipe = __decorate([
        Pipe({
            name: "intlDecimalFormat"
        })
    ], IntlDecimalFormatPipe);
    return IntlDecimalFormatPipe;
}());
export { IntlDecimalFormatPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVjaW1hbC1mb3JtYXQtcGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjby5tbW9ucy9hbmd1bGFyLWludGwvIiwic291cmNlcyI6WyJkZWNpbWFsLWZvcm1hdC1waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsSUFBSSxFQUFnQixNQUFNLGVBQWUsQ0FBQztBQUdsRCxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sV0FBVyxDQUFDO0FBS3RDO0lBRUksK0JBQW9CLE9BQW9CO1FBQXBCLFlBQU8sR0FBUCxPQUFPLENBQWE7SUFDeEMsQ0FBQztJQUVELHlDQUFTLEdBQVQsVUFBVSxLQUF5QixFQUFFLDBCQUE4RCxFQUFFLGlCQUE0QztRQUM3SSxJQUFJLE9BQU8sMEJBQTBCLElBQUksUUFBUSxFQUFFO1lBQy9DLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLDBCQUEwQixFQUFFLGlCQUFpQixDQUFDLENBQUM7U0FDM0Y7YUFBTTtZQUNILE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLDBCQUEwQixDQUFDLENBQUM7U0FDeEU7SUFDTCxDQUFDOztnQkFUNEIsV0FBVzs7SUFGL0IscUJBQXFCO1FBSGpDLElBQUksQ0FBQztZQUNGLElBQUksRUFBRSxtQkFBbUI7U0FDNUIsQ0FBQztPQUNXLHFCQUFxQixDQVlqQztJQUFELDRCQUFDO0NBQUEsQUFaRCxJQVlDO1NBWlkscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtQaXBlLCBQaXBlVHJhbnNmb3JtfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtCaWdOdW1iZXJ9IGZyb20gXCJiaWdudW1iZXIuanNcIjtcblxuaW1wb3J0IHtJbnRsU2VydmljZX0gZnJvbSBcIi4vc2VydmljZVwiO1xuXG5AUGlwZSh7XG4gICAgbmFtZTogXCJpbnRsRGVjaW1hbEZvcm1hdFwiXG59KVxuZXhwb3J0IGNsYXNzIEludGxEZWNpbWFsRm9ybWF0UGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBzZXJ2aWNlOiBJbnRsU2VydmljZSkge1xuICAgIH1cblxuICAgIHRyYW5zZm9ybSh2YWx1ZTogbnVtYmVyIHwgQmlnTnVtYmVyLCBwcmVkZWZpbmVkT3B0aW9uc09yT3B0aW9ucz86IHN0cmluZyB8IEludGwuTnVtYmVyRm9ybWF0T3B0aW9ucywgYWRkaXRpb25hbE9wdGlvbnM/OiBJbnRsLk51bWJlckZvcm1hdE9wdGlvbnMpOiBzdHJpbmcge1xuICAgICAgICBpZiAodHlwZW9mIHByZWRlZmluZWRPcHRpb25zT3JPcHRpb25zID09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNlcnZpY2UuZGVjaW1hbEZvcm1hdCh2YWx1ZSwgcHJlZGVmaW5lZE9wdGlvbnNPck9wdGlvbnMsIGFkZGl0aW9uYWxPcHRpb25zKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNlcnZpY2UuZGVjaW1hbEZvcm1hdCh2YWx1ZSwgcHJlZGVmaW5lZE9wdGlvbnNPck9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19