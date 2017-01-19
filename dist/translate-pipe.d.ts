import { PipeTransform } from "@angular/core";
import { IntlService } from "./service";
export declare class IntlTranslatePipe implements PipeTransform {
    private service;
    constructor(service: IntlService);
    transform(key: string, values?: any): string;
}
