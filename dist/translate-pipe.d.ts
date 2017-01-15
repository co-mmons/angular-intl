import { PipeTransform } from "@angular/core";
import { I18nService } from "./service";
export declare class I18nTranslatePipe implements PipeTransform {
    private service;
    constructor(service: I18nService);
    transform(key: string, values?: any): string;
}
