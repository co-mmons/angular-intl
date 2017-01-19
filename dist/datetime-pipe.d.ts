import { PipeTransform } from "@angular/core";
import { IntlService } from "./service";
export declare class IntlDateTimePipe implements PipeTransform {
    private service;
    constructor(service: IntlService);
    transform(dateTime: number | Date, options?: any): string;
}
export declare class IntlDatePipe implements PipeTransform {
    private service;
    constructor(service: IntlService);
    transform(dateTime: number | Date, options?: any): string;
}
export declare class IntlTimePipe implements PipeTransform {
    private service;
    constructor(service: IntlService);
    transform(dateTime: number | Date, options?: any): string;
}
