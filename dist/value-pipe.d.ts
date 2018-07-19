import { PipeTransform } from "@angular/core";
import { IntlService } from "./service";
import { IntlValue } from "@co.mmons/js-intl";
export declare class IntlValuePipe implements PipeTransform {
    private service;
    constructor(service: IntlService);
    transform(value: IntlValue<any>): any;
}
