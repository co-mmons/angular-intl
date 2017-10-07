/// <reference types="bignumber.js" />
import { PipeTransform } from "@angular/core";
import { BigNumber } from "@co.mmons/js-utils/core";
import { IntlService } from "./service";
export declare class IntlDecimalFormatPipe implements PipeTransform {
    private service;
    constructor(service: IntlService);
    transform(value: number | BigNumber, predefinedOptionsOrOptions?: string | Intl.NumberFormatOptions, additionalOptions?: Intl.NumberFormatOptions): string;
}
