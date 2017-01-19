import { Pipe, PipeTransform } from "@angular/core";
import { IntlService } from "./service";

@Pipe({
    name: "intlRelative"
})
export class IntlRelativePipe implements PipeTransform {

    constructor(private service: IntlService) {
    }

    transform(dateTime: number | Date, options?: any): string {
        return this.service.relative(dateTime, options);
    }
}

@Pipe({
    name: "intlRelativeLive",
    pure: false
})
export class IntlRelativeLivePipe implements PipeTransform {

    constructor(private service: IntlService) {
    }

    private lastCallTime: number;

    private lastCallResult: string;

    transform(dateTime: number | Date, cacheTimeOrOptions?: number | any, options?: any): string {

        let cacheTime: number = typeof cacheTimeOrOptions == "number" ? cacheTimeOrOptions : 0;
        let now: number;

        if (cacheTime > 0) {

            now = Date.now();

            if (this.lastCallTime && this.lastCallTime + (cacheTime * 1000) >= now) {
                return this.lastCallResult;
            }
        }

        let result = this.service.relative(dateTime, options);

        if (cacheTime > 0) {
            this.lastCallTime = now;
            this.lastCallResult = result;
        }

        return result;
    }
}