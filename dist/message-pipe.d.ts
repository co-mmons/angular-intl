import { PipeTransform } from "@angular/core";
import { IntlService } from "./service";
import { MessageRef } from "@co.mmons/js-intl";
export declare class IntlMessagePipe implements PipeTransform {
    private service;
    constructor(service: IntlService);
    transform(key: string | MessageRef, values?: any): string;
}
