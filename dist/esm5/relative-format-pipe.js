import * as tslib_1 from "tslib";
import { Pipe } from "@angular/core";
import { IntlService } from "./service";
var IntlRelativeFormatStaticPipe = /** @class */ (function () {
    function IntlRelativeFormatStaticPipe(service) {
        this.service = service;
    }
    IntlRelativeFormatStaticPipe.prototype.transform = function (dateTime, options) {
        return this.service.relativeFormat(dateTime, options);
    };
    IntlRelativeFormatStaticPipe.ctorParameters = function () { return [
        { type: IntlService }
    ]; };
    IntlRelativeFormatStaticPipe = tslib_1.__decorate([
        Pipe({
            name: "intlRelativeFormatStatic"
        }),
        tslib_1.__metadata("design:paramtypes", [IntlService])
    ], IntlRelativeFormatStaticPipe);
    return IntlRelativeFormatStaticPipe;
}());
export { IntlRelativeFormatStaticPipe };
var IntlRelativeFormatPipe = /** @class */ (function () {
    function IntlRelativeFormatPipe(service) {
        this.service = service;
        this.callCount = 0;
    }
    IntlRelativeFormatPipe.prototype.transform = function (dateTime, cacheTimeOrOptions, options) {
        var now;
        var cacheTime;
        if (typeof cacheTimeOrOptions == "number") {
            cacheTime = cacheTimeOrOptions;
        }
        else if (cacheTimeOrOptions && typeof cacheTimeOrOptions === "object") {
            options = cacheTimeOrOptions;
        }
        if (typeof cacheTime === "undefined") {
            cacheTime = (this.callCount || 1) * 10;
        }
        if (cacheTime > 0) {
            now = Date.now();
            if (this.callTime && this.callTime + (cacheTime * 1000) >= now) {
                return this.callResult;
            }
        }
        var result = this.service.relativeFormat(dateTime, options);
        if (cacheTime > 0) {
            this.callCount++;
            this.callTime = now;
            this.callResult = result;
        }
        return result;
    };
    IntlRelativeFormatPipe.ctorParameters = function () { return [
        { type: IntlService }
    ]; };
    IntlRelativeFormatPipe = tslib_1.__decorate([
        Pipe({
            name: "intlRelativeFormat",
            pure: false
        }),
        tslib_1.__metadata("design:paramtypes", [IntlService])
    ], IntlRelativeFormatPipe);
    return IntlRelativeFormatPipe;
}());
export { IntlRelativeFormatPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVsYXRpdmUtZm9ybWF0LXBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY28ubW1vbnMvYW5ndWxhci1pbnRsLyIsInNvdXJjZXMiOlsicmVsYXRpdmUtZm9ybWF0LXBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyxJQUFJLEVBQWdCLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxXQUFXLENBQUM7QUFLdEM7SUFFSSxzQ0FBb0IsT0FBb0I7UUFBcEIsWUFBTyxHQUFQLE9BQU8sQ0FBYTtJQUN4QyxDQUFDO0lBRUQsZ0RBQVMsR0FBVCxVQUFVLFFBQXVCLEVBQUUsT0FBYTtRQUM1QyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUMxRCxDQUFDOztnQkFMNEIsV0FBVzs7SUFGL0IsNEJBQTRCO1FBSHhDLElBQUksQ0FBQztZQUNGLElBQUksRUFBRSwwQkFBMEI7U0FDbkMsQ0FBQztpREFHK0IsV0FBVztPQUYvQiw0QkFBNEIsQ0FReEM7SUFBRCxtQ0FBQztDQUFBLEFBUkQsSUFRQztTQVJZLDRCQUE0QjtBQWN6QztJQUVJLGdDQUFvQixPQUFvQjtRQUFwQixZQUFPLEdBQVAsT0FBTyxDQUFhO1FBR2hDLGNBQVMsR0FBVyxDQUFDLENBQUM7SUFGOUIsQ0FBQztJQVFELDBDQUFTLEdBQVQsVUFBVSxRQUF1QixFQUFFLGtCQUFpQyxFQUFFLE9BQWE7UUFFL0UsSUFBSSxHQUFXLENBQUM7UUFDaEIsSUFBSSxTQUFpQixDQUFDO1FBRXRCLElBQUksT0FBTyxrQkFBa0IsSUFBSSxRQUFRLEVBQUU7WUFDdkMsU0FBUyxHQUFHLGtCQUFrQixDQUFDO1NBQ2xDO2FBQU0sSUFBSSxrQkFBa0IsSUFBSSxPQUFPLGtCQUFrQixLQUFLLFFBQVEsRUFBRTtZQUNyRSxPQUFPLEdBQUcsa0JBQWtCLENBQUE7U0FDL0I7UUFFRCxJQUFJLE9BQU8sU0FBUyxLQUFLLFdBQVcsRUFBRTtZQUNsQyxTQUFTLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztTQUMxQztRQUVELElBQUksU0FBUyxHQUFHLENBQUMsRUFBRTtZQUVmLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7WUFFakIsSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFO2dCQUM1RCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7YUFDMUI7U0FDSjtRQUVELElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUU1RCxJQUFJLFNBQVMsR0FBRyxDQUFDLEVBQUU7WUFDZixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDakIsSUFBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUM7WUFDcEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUM7U0FDNUI7UUFFRCxPQUFPLE1BQU0sQ0FBQztJQUNsQixDQUFDOztnQkExQzRCLFdBQVc7O0lBRi9CLHNCQUFzQjtRQUpsQyxJQUFJLENBQUM7WUFDRixJQUFJLEVBQUUsb0JBQW9CO1lBQzFCLElBQUksRUFBRSxLQUFLO1NBQ2QsQ0FBQztpREFHK0IsV0FBVztPQUYvQixzQkFBc0IsQ0E2Q2xDO0lBQUQsNkJBQUM7Q0FBQSxBQTdDRCxJQTZDQztTQTdDWSxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1BpcGUsIFBpcGVUcmFuc2Zvcm19IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge0ludGxTZXJ2aWNlfSBmcm9tIFwiLi9zZXJ2aWNlXCI7XG5cbkBQaXBlKHtcbiAgICBuYW1lOiBcImludGxSZWxhdGl2ZUZvcm1hdFN0YXRpY1wiXG59KVxuZXhwb3J0IGNsYXNzIEludGxSZWxhdGl2ZUZvcm1hdFN0YXRpY1BpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgc2VydmljZTogSW50bFNlcnZpY2UpIHtcbiAgICB9XG5cbiAgICB0cmFuc2Zvcm0oZGF0ZVRpbWU6IG51bWJlciB8IERhdGUsIG9wdGlvbnM/OiBhbnkpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXJ2aWNlLnJlbGF0aXZlRm9ybWF0KGRhdGVUaW1lLCBvcHRpb25zKTtcbiAgICB9XG59XG5cbkBQaXBlKHtcbiAgICBuYW1lOiBcImludGxSZWxhdGl2ZUZvcm1hdFwiLFxuICAgIHB1cmU6IGZhbHNlXG59KVxuZXhwb3J0IGNsYXNzIEludGxSZWxhdGl2ZUZvcm1hdFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgc2VydmljZTogSW50bFNlcnZpY2UpIHtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNhbGxDb3VudDogbnVtYmVyID0gMDtcblxuICAgIHByaXZhdGUgY2FsbFRpbWU6IG51bWJlcjtcblxuICAgIHByaXZhdGUgY2FsbFJlc3VsdDogc3RyaW5nO1xuXG4gICAgdHJhbnNmb3JtKGRhdGVUaW1lOiBudW1iZXIgfCBEYXRlLCBjYWNoZVRpbWVPck9wdGlvbnM/OiBudW1iZXIgfCBhbnksIG9wdGlvbnM/OiBhbnkpOiBzdHJpbmcge1xuXG4gICAgICAgIGxldCBub3c6IG51bWJlcjtcbiAgICAgICAgbGV0IGNhY2hlVGltZTogbnVtYmVyO1xuXG4gICAgICAgIGlmICh0eXBlb2YgY2FjaGVUaW1lT3JPcHRpb25zID09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgIGNhY2hlVGltZSA9IGNhY2hlVGltZU9yT3B0aW9ucztcbiAgICAgICAgfSBlbHNlIGlmIChjYWNoZVRpbWVPck9wdGlvbnMgJiYgdHlwZW9mIGNhY2hlVGltZU9yT3B0aW9ucyA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgb3B0aW9ucyA9IGNhY2hlVGltZU9yT3B0aW9uc1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiBjYWNoZVRpbWUgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgIGNhY2hlVGltZSA9ICh0aGlzLmNhbGxDb3VudCB8fCAxKSAqIDEwO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNhY2hlVGltZSA+IDApIHtcblxuICAgICAgICAgICAgbm93ID0gRGF0ZS5ub3coKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuY2FsbFRpbWUgJiYgdGhpcy5jYWxsVGltZSArIChjYWNoZVRpbWUgKiAxMDAwKSA+PSBub3cpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jYWxsUmVzdWx0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHJlc3VsdCA9IHRoaXMuc2VydmljZS5yZWxhdGl2ZUZvcm1hdChkYXRlVGltZSwgb3B0aW9ucyk7XG5cbiAgICAgICAgaWYgKGNhY2hlVGltZSA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuY2FsbENvdW50Kys7XG4gICAgICAgICAgICB0aGlzLmNhbGxUaW1lID0gbm93O1xuICAgICAgICAgICAgdGhpcy5jYWxsUmVzdWx0ID0gcmVzdWx0O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59Il19