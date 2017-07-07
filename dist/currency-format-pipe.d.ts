import { PipeTransform } from "@angular/core";
import { Money, CurrencyAndNumber } from "@co.mmons/js-intl";
import { IntlService } from "./service";
export declare class IntlCurrencyFormatPipe implements PipeTransform {
    private service;
    constructor(service: IntlService);
    transform(value: Money | CurrencyAndNumber, predefinedOptionsOrOptions?: string | Intl.NumberFormatOptions, additionalOptions?: Intl.NumberFormatOptions): string;
}
