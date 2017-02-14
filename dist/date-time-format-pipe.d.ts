import { PipeTransform } from "@angular/core";
import { IntlService } from "./service";
export declare class IntlDateTimeFormatPipe implements PipeTransform {
    private service;
    constructor(service: IntlService);
    transform(dateTime: number | Date, options?: any): string;
}
export declare class IntlDateFormatPipe implements PipeTransform {
    private service;
    constructor(service: IntlService);
    transform(dateTime: number | Date, options?: any): string;
}
export declare class IntlTimeFormatPipe implements PipeTransform {
    private service;
    constructor(service: IntlService);
    transform(dateTime: number | Date, options?: any): string;
}
