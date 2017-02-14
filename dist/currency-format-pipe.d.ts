import { PipeTransform } from "@angular/core";
import { Money } from "@co.mmons/typescript-utils/finance";
import { IntlService, CurrencyAndNumber } from "./service";
export declare class IntlCurrencyFormatPipe implements PipeTransform {
    private service;
    constructor(service: IntlService);
    transform(value: Money | CurrencyAndNumber, predefinedOptionsOrOptions?: string | Intl.NumberFormatOptions, additionalOptions?: Intl.NumberFormatOptions): string;
}
