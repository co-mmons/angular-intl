import { PipeTransform } from "@angular/core";
import { Money } from "@co.mmons/typescript-utils/finance";
import { CurrencyAndNumber } from "@co.mmons/intl";
import { IntlService } from "./service";
export declare class IntlCurrencyFormatPipe implements PipeTransform {
    private service;
    constructor(service: IntlService);
    transform(value: Money | CurrencyAndNumber, predefinedOptionsOrOptions?: string | Intl.NumberFormatOptions, additionalOptions?: Intl.NumberFormatOptions): string;
}
