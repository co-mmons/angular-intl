import { Pipe, PipeTransform } from "@angular/core";
import { IntlService } from "./service";

@Pipe({
    name: "intlRelative"
})
export class IntlRelativePipe implements PipeTransform {

    constructor(private service: IntlService) {
    }

    transform(dateTime: number | Date, options?: any): string {
        return this.service.relative(dateTime, options);
    }
}