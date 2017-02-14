import { Pipe, PipeTransform } from "@angular/core";
import { Money, BigNumber, Currency } from "@co.mmons/typescript-utils/finance";

import { IntlService, CurrencyAndNumber } from "./service";

@Pipe({
    name: "intlCurrencyFormat"
})
export class IntlCurrencyFormatPipe implements PipeTransform {

    constructor(private service: IntlService) {
    }

    transform(value: Money | CurrencyAndNumber, predefinedOptionsOrOptions?: string | Intl.NumberFormatOptions, additionalOptions?: Intl.NumberFormatOptions): string {
        if (typeof predefinedOptionsOrOptions == "string") {
            return this.service.currencyFormat(value, predefinedOptionsOrOptions, additionalOptions);
        } else {
            return this.service.currencyFormat(value, predefinedOptionsOrOptions);
        }
    }
}
