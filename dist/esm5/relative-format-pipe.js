import { __decorate } from "tslib";
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
    IntlRelativeFormatStaticPipe = __decorate([
        Pipe({
            name: "intlRelativeFormatStatic"
        })
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
    IntlRelativeFormatPipe = __decorate([
        Pipe({
            name: "intlRelativeFormat",
            pure: false
        })
    ], IntlRelativeFormatPipe);
    return IntlRelativeFormatPipe;
}());
export { IntlRelativeFormatPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVsYXRpdmUtZm9ybWF0LXBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY28ubW1vbnMvYW5ndWxhci1pbnRsLyIsInNvdXJjZXMiOlsicmVsYXRpdmUtZm9ybWF0LXBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyxJQUFJLEVBQWdCLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxXQUFXLENBQUM7QUFLdEM7SUFFSSxzQ0FBb0IsT0FBb0I7UUFBcEIsWUFBTyxHQUFQLE9BQU8sQ0FBYTtJQUN4QyxDQUFDO0lBRUQsZ0RBQVMsR0FBVCxVQUFVLFFBQXVCLEVBQUUsT0FBYTtRQUM1QyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUMxRCxDQUFDOztnQkFMNEIsV0FBVzs7SUFGL0IsNEJBQTRCO1FBSHhDLElBQUksQ0FBQztZQUNGLElBQUksRUFBRSwwQkFBMEI7U0FDbkMsQ0FBQztPQUNXLDRCQUE0QixDQVF4QztJQUFELG1DQUFDO0NBQUEsQUFSRCxJQVFDO1NBUlksNEJBQTRCO0FBY3pDO0lBRUksZ0NBQW9CLE9BQW9CO1FBQXBCLFlBQU8sR0FBUCxPQUFPLENBQWE7UUFHaEMsY0FBUyxHQUFXLENBQUMsQ0FBQztJQUY5QixDQUFDO0lBUUQsMENBQVMsR0FBVCxVQUFVLFFBQXVCLEVBQUUsa0JBQWlDLEVBQUUsT0FBYTtRQUUvRSxJQUFJLEdBQVcsQ0FBQztRQUNoQixJQUFJLFNBQWlCLENBQUM7UUFFdEIsSUFBSSxPQUFPLGtCQUFrQixJQUFJLFFBQVEsRUFBRTtZQUN2QyxTQUFTLEdBQUcsa0JBQWtCLENBQUM7U0FDbEM7YUFBTSxJQUFJLGtCQUFrQixJQUFJLE9BQU8sa0JBQWtCLEtBQUssUUFBUSxFQUFFO1lBQ3JFLE9BQU8sR0FBRyxrQkFBa0IsQ0FBQTtTQUMvQjtRQUVELElBQUksT0FBTyxTQUFTLEtBQUssV0FBVyxFQUFFO1lBQ2xDLFNBQVMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO1NBQzFDO1FBRUQsSUFBSSxTQUFTLEdBQUcsQ0FBQyxFQUFFO1lBRWYsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUVqQixJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUU7Z0JBQzVELE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQzthQUMxQjtTQUNKO1FBRUQsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBRTVELElBQUksU0FBUyxHQUFHLENBQUMsRUFBRTtZQUNmLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUNqQixJQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQztZQUNwQixJQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQztTQUM1QjtRQUVELE9BQU8sTUFBTSxDQUFDO0lBQ2xCLENBQUM7O2dCQTFDNEIsV0FBVzs7SUFGL0Isc0JBQXNCO1FBSmxDLElBQUksQ0FBQztZQUNGLElBQUksRUFBRSxvQkFBb0I7WUFDMUIsSUFBSSxFQUFFLEtBQUs7U0FDZCxDQUFDO09BQ1csc0JBQXNCLENBNkNsQztJQUFELDZCQUFDO0NBQUEsQUE3Q0QsSUE2Q0M7U0E3Q1ksc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtQaXBlLCBQaXBlVHJhbnNmb3JtfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtJbnRsU2VydmljZX0gZnJvbSBcIi4vc2VydmljZVwiO1xuXG5AUGlwZSh7XG4gICAgbmFtZTogXCJpbnRsUmVsYXRpdmVGb3JtYXRTdGF0aWNcIlxufSlcbmV4cG9ydCBjbGFzcyBJbnRsUmVsYXRpdmVGb3JtYXRTdGF0aWNQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNlcnZpY2U6IEludGxTZXJ2aWNlKSB7XG4gICAgfVxuXG4gICAgdHJhbnNmb3JtKGRhdGVUaW1lOiBudW1iZXIgfCBEYXRlLCBvcHRpb25zPzogYW55KTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VydmljZS5yZWxhdGl2ZUZvcm1hdChkYXRlVGltZSwgb3B0aW9ucyk7XG4gICAgfVxufVxuXG5AUGlwZSh7XG4gICAgbmFtZTogXCJpbnRsUmVsYXRpdmVGb3JtYXRcIixcbiAgICBwdXJlOiBmYWxzZVxufSlcbmV4cG9ydCBjbGFzcyBJbnRsUmVsYXRpdmVGb3JtYXRQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNlcnZpY2U6IEludGxTZXJ2aWNlKSB7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjYWxsQ291bnQ6IG51bWJlciA9IDA7XG5cbiAgICBwcml2YXRlIGNhbGxUaW1lOiBudW1iZXI7XG5cbiAgICBwcml2YXRlIGNhbGxSZXN1bHQ6IHN0cmluZztcblxuICAgIHRyYW5zZm9ybShkYXRlVGltZTogbnVtYmVyIHwgRGF0ZSwgY2FjaGVUaW1lT3JPcHRpb25zPzogbnVtYmVyIHwgYW55LCBvcHRpb25zPzogYW55KTogc3RyaW5nIHtcblxuICAgICAgICBsZXQgbm93OiBudW1iZXI7XG4gICAgICAgIGxldCBjYWNoZVRpbWU6IG51bWJlcjtcblxuICAgICAgICBpZiAodHlwZW9mIGNhY2hlVGltZU9yT3B0aW9ucyA9PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICBjYWNoZVRpbWUgPSBjYWNoZVRpbWVPck9wdGlvbnM7XG4gICAgICAgIH0gZWxzZSBpZiAoY2FjaGVUaW1lT3JPcHRpb25zICYmIHR5cGVvZiBjYWNoZVRpbWVPck9wdGlvbnMgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIG9wdGlvbnMgPSBjYWNoZVRpbWVPck9wdGlvbnNcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgY2FjaGVUaW1lID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICBjYWNoZVRpbWUgPSAodGhpcy5jYWxsQ291bnQgfHwgMSkgKiAxMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjYWNoZVRpbWUgPiAwKSB7XG5cbiAgICAgICAgICAgIG5vdyA9IERhdGUubm93KCk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmNhbGxUaW1lICYmIHRoaXMuY2FsbFRpbWUgKyAoY2FjaGVUaW1lICogMTAwMCkgPj0gbm93KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2FsbFJlc3VsdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGxldCByZXN1bHQgPSB0aGlzLnNlcnZpY2UucmVsYXRpdmVGb3JtYXQoZGF0ZVRpbWUsIG9wdGlvbnMpO1xuXG4gICAgICAgIGlmIChjYWNoZVRpbWUgPiAwKSB7XG4gICAgICAgICAgICB0aGlzLmNhbGxDb3VudCsrO1xuICAgICAgICAgICAgdGhpcy5jYWxsVGltZSA9IG5vdztcbiAgICAgICAgICAgIHRoaXMuY2FsbFJlc3VsdCA9IHJlc3VsdDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufSJdfQ==