import {Pipe, PipeTransform} from "@angular/core";
import {IntlService} from "./service";

@Pipe({
    name: "intlMessage"
})
export class IntlMessagePipe implements PipeTransform {

    constructor(private service: IntlService) {
    }

    transform(key: string, values?: any): string {
        return this.service.message(key, values);
    }
}