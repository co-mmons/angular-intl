import {Pipe, PipeTransform} from "@angular/core";
import {IntlService} from "./service";

@Pipe({
    name: "intlDateTimeFormat"
})
export class IntlDateTimeFormatPipe implements PipeTransform {

    constructor(private service: IntlService) {
    }

    transform(dateTime: number | Date, options?: any): string {
        return this.service.dateTimeFormat(dateTime, options);
    }
}

@Pipe({
    name: "intlDateFormat"
})
export class IntlDateFormatPipe implements PipeTransform {

    constructor(private service: IntlService) {
    }

    transform(dateTime: number | Date, options?: any): string {
        return this.service.dateFormat(dateTime, options);
    }
}

@Pipe({
    name: "intlTimeFormat"
})
export class IntlTimeFormatPipe implements PipeTransform {

    constructor(private service: IntlService) {
    }

    transform(dateTime: number | Date, options?: any): string {
        return this.service.timeFormat(dateTime, options);
    }
}