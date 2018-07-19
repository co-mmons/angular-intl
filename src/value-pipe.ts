import {Pipe, PipeTransform} from "@angular/core";
import {IntlService} from "./service";
import {IntlValue} from "@co.mmons/js-intl";

@Pipe({
    name: "intlValue"
})
export class IntlValuePipe implements PipeTransform {

    constructor(private service: IntlService) {
    }

    transform(value: IntlValue<any>): any {
        return this.service.value(value);
    }
}