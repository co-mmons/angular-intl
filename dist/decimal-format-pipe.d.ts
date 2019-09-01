import { PipeTransform } from "@angular/core";
import { BigNumber } from "bignumber.js";
import { IntlService } from "./service";
export declare class IntlDecimalFormatPipe implements PipeTransform {
    private service;
    constructor(service: IntlService);
    transform(value: number | BigNumber, predefinedOptionsOrOptions?: string | Intl.NumberFormatOptions, additionalOptions?: Intl.NumberFormatOptions): string;
}
