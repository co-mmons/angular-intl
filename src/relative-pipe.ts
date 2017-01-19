import { Pipe, PipeTransform } from "@angular/core";
import { IntlService } from "./service";

@Pipe({
    name: "intlRelativeStatic"
})
export class IntlRelativeStaticPipe implements PipeTransform {

    constructor(private service: IntlService) {
    }

    transform(dateTime: number | Date, options?: any): string {
        return this.service.relative(dateTime, options);
    }
}

@Pipe({
    name: "intlRelative",
    pure: false
})
export class IntlRelativePipe implements PipeTransform {

    constructor(private service: IntlService) {
    }

    private callCount: number = 0;

    private callTime: number;

    private callResult: string;

    transform(dateTime: number | Date, cacheTimeOrOptions?: number | any, options?: any): string {

        let now: number;
        let cacheTime: number;
        
        if (typeof cacheTimeOrOptions == "number") {
            cacheTime = cacheTimeOrOptions;
        } else if (cacheTimeOrOptions && typeof cacheTimeOrOptions === "object") {
            options = cacheTimeOrOptions
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

        let result = this.service.relative(dateTime, options);

        if (cacheTime > 0) {
            this.callCount++;
            this.callTime = now;
            this.callResult = result;
        }

        return result;
    }
}