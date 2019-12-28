import { __decorate } from "tslib";
import { Pipe } from "@angular/core";
import { IntlService } from "./service";
var IntlCurrencyFormatPipe = /** @class */ (function () {
    function IntlCurrencyFormatPipe(service) {
        this.service = service;
    }
    IntlCurrencyFormatPipe.prototype.transform = function (value, predefinedOptionsOrOptions, additionalOptions) {
        if (typeof predefinedOptionsOrOptions == "string") {
            return this.service.currencyFormat(value, predefinedOptionsOrOptions, additionalOptions);
        }
        else {
            return this.service.currencyFormat(value, predefinedOptionsOrOptions);
        }
    };
    IntlCurrencyFormatPipe.ctorParameters = function () { return [
        { type: IntlService }
    ]; };
    IntlCurrencyFormatPipe = __decorate([
        Pipe({
            name: "intlCurrencyFormat"
        })
    ], IntlCurrencyFormatPipe);
    return IntlCurrencyFormatPipe;
}());
export { IntlCurrencyFormatPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VycmVuY3ktZm9ybWF0LXBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY28ubW1vbnMvYW5ndWxhci1pbnRsLyIsInNvdXJjZXMiOlsiY3VycmVuY3ktZm9ybWF0LXBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyxJQUFJLEVBQWdCLE1BQU0sZUFBZSxDQUFDO0FBR2xELE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxXQUFXLENBQUM7QUFLdEM7SUFFSSxnQ0FBb0IsT0FBb0I7UUFBcEIsWUFBTyxHQUFQLE9BQU8sQ0FBYTtJQUN4QyxDQUFDO0lBRUQsMENBQVMsR0FBVCxVQUFVLEtBQWdDLEVBQUUsMEJBQThELEVBQUUsaUJBQTRDO1FBQ3BKLElBQUksT0FBTywwQkFBMEIsSUFBSSxRQUFRLEVBQUU7WUFDL0MsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxLQUFLLEVBQUUsMEJBQTBCLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztTQUM1RjthQUFNO1lBQ0gsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxLQUFLLEVBQUUsMEJBQTBCLENBQUMsQ0FBQztTQUN6RTtJQUNMLENBQUM7O2dCQVQ0QixXQUFXOztJQUYvQixzQkFBc0I7UUFIbEMsSUFBSSxDQUFDO1lBQ0YsSUFBSSxFQUFFLG9CQUFvQjtTQUM3QixDQUFDO09BQ1csc0JBQXNCLENBWWxDO0lBQUQsNkJBQUM7Q0FBQSxBQVpELElBWUM7U0FaWSxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1BpcGUsIFBpcGVUcmFuc2Zvcm19IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge0N1cnJlbmN5QW5kTnVtYmVyLCBNb25leX0gZnJvbSBcIkBjby5tbW9ucy9qcy1pbnRsXCI7XG5cbmltcG9ydCB7SW50bFNlcnZpY2V9IGZyb20gXCIuL3NlcnZpY2VcIjtcblxuQFBpcGUoe1xuICAgIG5hbWU6IFwiaW50bEN1cnJlbmN5Rm9ybWF0XCJcbn0pXG5leHBvcnQgY2xhc3MgSW50bEN1cnJlbmN5Rm9ybWF0UGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBzZXJ2aWNlOiBJbnRsU2VydmljZSkge1xuICAgIH1cblxuICAgIHRyYW5zZm9ybSh2YWx1ZTogTW9uZXkgfCBDdXJyZW5jeUFuZE51bWJlciwgcHJlZGVmaW5lZE9wdGlvbnNPck9wdGlvbnM/OiBzdHJpbmcgfCBJbnRsLk51bWJlckZvcm1hdE9wdGlvbnMsIGFkZGl0aW9uYWxPcHRpb25zPzogSW50bC5OdW1iZXJGb3JtYXRPcHRpb25zKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKHR5cGVvZiBwcmVkZWZpbmVkT3B0aW9uc09yT3B0aW9ucyA9PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zZXJ2aWNlLmN1cnJlbmN5Rm9ybWF0KHZhbHVlLCBwcmVkZWZpbmVkT3B0aW9uc09yT3B0aW9ucywgYWRkaXRpb25hbE9wdGlvbnMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2VydmljZS5jdXJyZW5jeUZvcm1hdCh2YWx1ZSwgcHJlZGVmaW5lZE9wdGlvbnNPck9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19