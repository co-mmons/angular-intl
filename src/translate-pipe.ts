import { Pipe, PipeTransform } from "@angular/core";
import { I18nService } from "./service";

@Pipe({
    name: "i18nMessage"
})
export class I18nTranslatePipe implements PipeTransform {

    constructor(private service: I18nService) {
    }

    transform(key: string, values?: any): string {
        return this.service.message(key, values);
    }
}