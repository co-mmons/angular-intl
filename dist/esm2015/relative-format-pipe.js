import { __decorate } from "tslib";
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
IntlRelativeFormatStaticPipe = __decorate([
    Pipe({
        name: "intlRelativeFormatStatic"
    })
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
IntlRelativeFormatPipe = __decorate([
    Pipe({
        name: "intlRelativeFormat",
        pure: false
    })
], IntlRelativeFormatPipe);
export { IntlRelativeFormatPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVsYXRpdmUtZm9ybWF0LXBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY28ubW1vbnMvYW5ndWxhci1pbnRsLyIsInNvdXJjZXMiOlsicmVsYXRpdmUtZm9ybWF0LXBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyxJQUFJLEVBQWdCLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxXQUFXLENBQUM7QUFLdEMsSUFBYSw0QkFBNEIsR0FBekMsTUFBYSw0QkFBNEI7SUFFckMsWUFBb0IsT0FBb0I7UUFBcEIsWUFBTyxHQUFQLE9BQU8sQ0FBYTtJQUN4QyxDQUFDO0lBRUQsU0FBUyxDQUFDLFFBQXVCLEVBQUUsT0FBYTtRQUM1QyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUMxRCxDQUFDO0NBQ0osQ0FBQTs7WUFOZ0MsV0FBVzs7QUFGL0IsNEJBQTRCO0lBSHhDLElBQUksQ0FBQztRQUNGLElBQUksRUFBRSwwQkFBMEI7S0FDbkMsQ0FBQztHQUNXLDRCQUE0QixDQVF4QztTQVJZLDRCQUE0QjtBQWN6QyxJQUFhLHNCQUFzQixHQUFuQyxNQUFhLHNCQUFzQjtJQUUvQixZQUFvQixPQUFvQjtRQUFwQixZQUFPLEdBQVAsT0FBTyxDQUFhO1FBR2hDLGNBQVMsR0FBVyxDQUFDLENBQUM7SUFGOUIsQ0FBQztJQVFELFNBQVMsQ0FBQyxRQUF1QixFQUFFLGtCQUFpQyxFQUFFLE9BQWE7UUFFL0UsSUFBSSxHQUFXLENBQUM7UUFDaEIsSUFBSSxTQUFpQixDQUFDO1FBRXRCLElBQUksT0FBTyxrQkFBa0IsSUFBSSxRQUFRLEVBQUU7WUFDdkMsU0FBUyxHQUFHLGtCQUFrQixDQUFDO1NBQ2xDO2FBQU0sSUFBSSxrQkFBa0IsSUFBSSxPQUFPLGtCQUFrQixLQUFLLFFBQVEsRUFBRTtZQUNyRSxPQUFPLEdBQUcsa0JBQWtCLENBQUE7U0FDL0I7UUFFRCxJQUFJLE9BQU8sU0FBUyxLQUFLLFdBQVcsRUFBRTtZQUNsQyxTQUFTLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztTQUMxQztRQUVELElBQUksU0FBUyxHQUFHLENBQUMsRUFBRTtZQUVmLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7WUFFakIsSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFO2dCQUM1RCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7YUFDMUI7U0FDSjtRQUVELElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUU1RCxJQUFJLFNBQVMsR0FBRyxDQUFDLEVBQUU7WUFDZixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDakIsSUFBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUM7WUFDcEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUM7U0FDNUI7UUFFRCxPQUFPLE1BQU0sQ0FBQztJQUNsQixDQUFDO0NBQ0osQ0FBQTs7WUEzQ2dDLFdBQVc7O0FBRi9CLHNCQUFzQjtJQUpsQyxJQUFJLENBQUM7UUFDRixJQUFJLEVBQUUsb0JBQW9CO1FBQzFCLElBQUksRUFBRSxLQUFLO0tBQ2QsQ0FBQztHQUNXLHNCQUFzQixDQTZDbEM7U0E3Q1ksc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtQaXBlLCBQaXBlVHJhbnNmb3JtfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtJbnRsU2VydmljZX0gZnJvbSBcIi4vc2VydmljZVwiO1xuXG5AUGlwZSh7XG4gICAgbmFtZTogXCJpbnRsUmVsYXRpdmVGb3JtYXRTdGF0aWNcIlxufSlcbmV4cG9ydCBjbGFzcyBJbnRsUmVsYXRpdmVGb3JtYXRTdGF0aWNQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNlcnZpY2U6IEludGxTZXJ2aWNlKSB7XG4gICAgfVxuXG4gICAgdHJhbnNmb3JtKGRhdGVUaW1lOiBudW1iZXIgfCBEYXRlLCBvcHRpb25zPzogYW55KTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VydmljZS5yZWxhdGl2ZUZvcm1hdChkYXRlVGltZSwgb3B0aW9ucyk7XG4gICAgfVxufVxuXG5AUGlwZSh7XG4gICAgbmFtZTogXCJpbnRsUmVsYXRpdmVGb3JtYXRcIixcbiAgICBwdXJlOiBmYWxzZVxufSlcbmV4cG9ydCBjbGFzcyBJbnRsUmVsYXRpdmVGb3JtYXRQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNlcnZpY2U6IEludGxTZXJ2aWNlKSB7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjYWxsQ291bnQ6IG51bWJlciA9IDA7XG5cbiAgICBwcml2YXRlIGNhbGxUaW1lOiBudW1iZXI7XG5cbiAgICBwcml2YXRlIGNhbGxSZXN1bHQ6IHN0cmluZztcblxuICAgIHRyYW5zZm9ybShkYXRlVGltZTogbnVtYmVyIHwgRGF0ZSwgY2FjaGVUaW1lT3JPcHRpb25zPzogbnVtYmVyIHwgYW55LCBvcHRpb25zPzogYW55KTogc3RyaW5nIHtcblxuICAgICAgICBsZXQgbm93OiBudW1iZXI7XG4gICAgICAgIGxldCBjYWNoZVRpbWU6IG51bWJlcjtcblxuICAgICAgICBpZiAodHlwZW9mIGNhY2hlVGltZU9yT3B0aW9ucyA9PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICBjYWNoZVRpbWUgPSBjYWNoZVRpbWVPck9wdGlvbnM7XG4gICAgICAgIH0gZWxzZSBpZiAoY2FjaGVUaW1lT3JPcHRpb25zICYmIHR5cGVvZiBjYWNoZVRpbWVPck9wdGlvbnMgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIG9wdGlvbnMgPSBjYWNoZVRpbWVPck9wdGlvbnNcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgY2FjaGVUaW1lID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICBjYWNoZVRpbWUgPSAodGhpcy5jYWxsQ291bnQgfHwgMSkgKiAxMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjYWNoZVRpbWUgPiAwKSB7XG5cbiAgICAgICAgICAgIG5vdyA9IERhdGUubm93KCk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmNhbGxUaW1lICYmIHRoaXMuY2FsbFRpbWUgKyAoY2FjaGVUaW1lICogMTAwMCkgPj0gbm93KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2FsbFJlc3VsdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGxldCByZXN1bHQgPSB0aGlzLnNlcnZpY2UucmVsYXRpdmVGb3JtYXQoZGF0ZVRpbWUsIG9wdGlvbnMpO1xuXG4gICAgICAgIGlmIChjYWNoZVRpbWUgPiAwKSB7XG4gICAgICAgICAgICB0aGlzLmNhbGxDb3VudCsrO1xuICAgICAgICAgICAgdGhpcy5jYWxsVGltZSA9IG5vdztcbiAgICAgICAgICAgIHRoaXMuY2FsbFJlc3VsdCA9IHJlc3VsdDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufSJdfQ==