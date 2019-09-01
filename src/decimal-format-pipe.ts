import {Pipe, PipeTransform} from "@angular/core";
import {BigNumber} from "bignumber.js";

import {IntlService} from "./service";

@Pipe({
    name: "intlDecimalFormat"
})
export class IntlDecimalFormatPipe implements PipeTransform {

    constructor(private service: IntlService) {
    }

    transform(value: number | BigNumber, predefinedOptionsOrOptions?: string | Intl.NumberFormatOptions, additionalOptions?: Intl.NumberFormatOptions): string {
        if (typeof predefinedOptionsOrOptions == "string") {
            return this.service.decimalFormat(value, predefinedOptionsOrOptions, additionalOptions);
        } else {
            return this.service.decimalFormat(value, predefinedOptionsOrOptions);
        }
    }
}
