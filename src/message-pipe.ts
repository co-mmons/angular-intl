import {Pipe, PipeTransform} from "@angular/core";
import {IntlService} from "./service";
import {MessageRef} from "@co.mmons/js-intl";

@Pipe({
    name: "intlMessage"
})
export class IntlMessagePipe implements PipeTransform {

    constructor(private service: IntlService) {
    }

    transform(key: string | MessageRef, values?: any): string {
        return this.service.message(key, values);
    }
}