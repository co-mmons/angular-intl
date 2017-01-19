import { PipeTransform } from "@angular/core";
import { IntlService } from "./service";
export declare class IntlRelativePipe implements PipeTransform {
    private service;
    constructor(service: IntlService);
    transform(dateTime: number | Date, options?: any): string;
}
export declare class IntlRelativeLivePipe implements PipeTransform {
    private service;
    constructor(service: IntlService);
    private lastCallTime;
    private lastCallResult;
    transform(dateTime: number | Date, cacheTimeOrOptions?: number | any, options?: any): string;
}
