import * as tslib_1 from "tslib";
import { Pipe } from "@angular/core";
import { IntlService } from "./service";
let IntlRelativeFormatStaticPipe = class IntlRelativeFormatStaticPipe {
    constructor(service) {
        this.service = service;
    }
    transform(dateTime, options) {
        return this.service.relativeFormat(dateTime, options);
    }
};
IntlRelativeFormatStaticPipe.ctorParameters = () => [
    { type: IntlService }
];
IntlRelativeFormatStaticPipe = tslib_1.__decorate([
    Pipe({
        name: "intlRelativeFormatStatic"
    }),
    tslib_1.__metadata("design:paramtypes", [IntlService])
], IntlRelativeFormatStaticPipe);
export { IntlRelativeFormatStaticPipe };
let IntlRelativeFormatPipe = class IntlRelativeFormatPipe {
    constructor(service) {
        this.service = service;
        this.callCount = 0;
    }
    transform(dateTime, cacheTimeOrOptions, options) {
        let now;
        let cacheTime;
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
        let result = this.service.relativeFormat(dateTime, options);
        if (cacheTime > 0) {
            this.callCount++;
            this.callTime = now;
            this.callResult = result;
        }
        return result;
    }
};
IntlRelativeFormatPipe.ctorParameters = () => [
    { type: IntlService }
];
IntlRelativeFormatPipe = tslib_1.__decorate([
    Pipe({
        name: "intlRelativeFormat",
        pure: false
    }),
    tslib_1.__metadata("design:paramtypes", [IntlService])
], IntlRelativeFormatPipe);
export { IntlRelativeFormatPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVsYXRpdmUtZm9ybWF0LXBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY28ubW1vbnMvYW5ndWxhci1pbnRsLyIsInNvdXJjZXMiOlsicmVsYXRpdmUtZm9ybWF0LXBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyxJQUFJLEVBQWdCLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxXQUFXLENBQUM7QUFLdEMsSUFBYSw0QkFBNEIsR0FBekMsTUFBYSw0QkFBNEI7SUFFckMsWUFBb0IsT0FBb0I7UUFBcEIsWUFBTyxHQUFQLE9BQU8sQ0FBYTtJQUN4QyxDQUFDO0lBRUQsU0FBUyxDQUFDLFFBQXVCLEVBQUUsT0FBYTtRQUM1QyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUMxRCxDQUFDO0NBQ0osQ0FBQTs7WUFOZ0MsV0FBVzs7QUFGL0IsNEJBQTRCO0lBSHhDLElBQUksQ0FBQztRQUNGLElBQUksRUFBRSwwQkFBMEI7S0FDbkMsQ0FBQzs2Q0FHK0IsV0FBVztHQUYvQiw0QkFBNEIsQ0FReEM7U0FSWSw0QkFBNEI7QUFjekMsSUFBYSxzQkFBc0IsR0FBbkMsTUFBYSxzQkFBc0I7SUFFL0IsWUFBb0IsT0FBb0I7UUFBcEIsWUFBTyxHQUFQLE9BQU8sQ0FBYTtRQUdoQyxjQUFTLEdBQVcsQ0FBQyxDQUFDO0lBRjlCLENBQUM7SUFRRCxTQUFTLENBQUMsUUFBdUIsRUFBRSxrQkFBaUMsRUFBRSxPQUFhO1FBRS9FLElBQUksR0FBVyxDQUFDO1FBQ2hCLElBQUksU0FBaUIsQ0FBQztRQUV0QixJQUFJLE9BQU8sa0JBQWtCLElBQUksUUFBUSxFQUFFO1lBQ3ZDLFNBQVMsR0FBRyxrQkFBa0IsQ0FBQztTQUNsQzthQUFNLElBQUksa0JBQWtCLElBQUksT0FBTyxrQkFBa0IsS0FBSyxRQUFRLEVBQUU7WUFDckUsT0FBTyxHQUFHLGtCQUFrQixDQUFBO1NBQy9CO1FBRUQsSUFBSSxPQUFPLFNBQVMsS0FBSyxXQUFXLEVBQUU7WUFDbEMsU0FBUyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7U0FDMUM7UUFFRCxJQUFJLFNBQVMsR0FBRyxDQUFDLEVBQUU7WUFFZixHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBRWpCLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRTtnQkFDNUQsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO2FBQzFCO1NBQ0o7UUFFRCxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFFNUQsSUFBSSxTQUFTLEdBQUcsQ0FBQyxFQUFFO1lBQ2YsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDO1lBQ3BCLElBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDO1NBQzVCO1FBRUQsT0FBTyxNQUFNLENBQUM7SUFDbEIsQ0FBQztDQUNKLENBQUE7O1lBM0NnQyxXQUFXOztBQUYvQixzQkFBc0I7SUFKbEMsSUFBSSxDQUFDO1FBQ0YsSUFBSSxFQUFFLG9CQUFvQjtRQUMxQixJQUFJLEVBQUUsS0FBSztLQUNkLENBQUM7NkNBRytCLFdBQVc7R0FGL0Isc0JBQXNCLENBNkNsQztTQTdDWSxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1BpcGUsIFBpcGVUcmFuc2Zvcm19IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge0ludGxTZXJ2aWNlfSBmcm9tIFwiLi9zZXJ2aWNlXCI7XG5cbkBQaXBlKHtcbiAgICBuYW1lOiBcImludGxSZWxhdGl2ZUZvcm1hdFN0YXRpY1wiXG59KVxuZXhwb3J0IGNsYXNzIEludGxSZWxhdGl2ZUZvcm1hdFN0YXRpY1BpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgc2VydmljZTogSW50bFNlcnZpY2UpIHtcbiAgICB9XG5cbiAgICB0cmFuc2Zvcm0oZGF0ZVRpbWU6IG51bWJlciB8IERhdGUsIG9wdGlvbnM/OiBhbnkpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXJ2aWNlLnJlbGF0aXZlRm9ybWF0KGRhdGVUaW1lLCBvcHRpb25zKTtcbiAgICB9XG59XG5cbkBQaXBlKHtcbiAgICBuYW1lOiBcImludGxSZWxhdGl2ZUZvcm1hdFwiLFxuICAgIHB1cmU6IGZhbHNlXG59KVxuZXhwb3J0IGNsYXNzIEludGxSZWxhdGl2ZUZvcm1hdFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgc2VydmljZTogSW50bFNlcnZpY2UpIHtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNhbGxDb3VudDogbnVtYmVyID0gMDtcblxuICAgIHByaXZhdGUgY2FsbFRpbWU6IG51bWJlcjtcblxuICAgIHByaXZhdGUgY2FsbFJlc3VsdDogc3RyaW5nO1xuXG4gICAgdHJhbnNmb3JtKGRhdGVUaW1lOiBudW1iZXIgfCBEYXRlLCBjYWNoZVRpbWVPck9wdGlvbnM/OiBudW1iZXIgfCBhbnksIG9wdGlvbnM/OiBhbnkpOiBzdHJpbmcge1xuXG4gICAgICAgIGxldCBub3c6IG51bWJlcjtcbiAgICAgICAgbGV0IGNhY2hlVGltZTogbnVtYmVyO1xuXG4gICAgICAgIGlmICh0eXBlb2YgY2FjaGVUaW1lT3JPcHRpb25zID09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgIGNhY2hlVGltZSA9IGNhY2hlVGltZU9yT3B0aW9ucztcbiAgICAgICAgfSBlbHNlIGlmIChjYWNoZVRpbWVPck9wdGlvbnMgJiYgdHlwZW9mIGNhY2hlVGltZU9yT3B0aW9ucyA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgb3B0aW9ucyA9IGNhY2hlVGltZU9yT3B0aW9uc1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiBjYWNoZVRpbWUgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgIGNhY2hlVGltZSA9ICh0aGlzLmNhbGxDb3VudCB8fCAxKSAqIDEwO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNhY2hlVGltZSA+IDApIHtcblxuICAgICAgICAgICAgbm93ID0gRGF0ZS5ub3coKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuY2FsbFRpbWUgJiYgdGhpcy5jYWxsVGltZSArIChjYWNoZVRpbWUgKiAxMDAwKSA+PSBub3cpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jYWxsUmVzdWx0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHJlc3VsdCA9IHRoaXMuc2VydmljZS5yZWxhdGl2ZUZvcm1hdChkYXRlVGltZSwgb3B0aW9ucyk7XG5cbiAgICAgICAgaWYgKGNhY2hlVGltZSA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuY2FsbENvdW50Kys7XG4gICAgICAgICAgICB0aGlzLmNhbGxUaW1lID0gbm93O1xuICAgICAgICAgICAgdGhpcy5jYWxsUmVzdWx0ID0gcmVzdWx0O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59Il19