import { PipeTransform } from "@angular/core";
import { IntlService } from "./service";
export declare class IntlRelativeStaticPipe implements PipeTransform {
    private service;
    constructor(service: IntlService);
    transform(dateTime: number | Date, options?: any): string;
}
export declare class IntlRelativePipe implements PipeTransform {
    private service;
    constructor(service: IntlService);
    private callCount;
    private callTime;
    private callResult;
    transform(dateTime: number | Date, cacheTimeOrOptions?: number | any, options?: any): string;
}
