import { Pipe, PipeTransform } from "@angular/core";
import { IntlService } from "./service";

@Pipe({
    name: "intlDateTime"
})
export class IntlDateTimePipe implements PipeTransform {

    constructor(private service: IntlService) {
    }

    transform(dateTime: number | Date, options?: any): string {
        return this.service.dateTime(dateTime, options);
    }
}

@Pipe({
    name: "intlDate"
})
export class IntlDatePipe implements PipeTransform {

    constructor(private service: IntlService) {
    }

    transform(dateTime: number | Date, options?: any): string {
        return this.service.date(dateTime, options);
    }
}

@Pipe({
    name: "intlTime"
})
export class IntlTimePipe implements PipeTransform {

    constructor(private service: IntlService) {
    }

    transform(dateTime: number | Date, options?: any): string {
        return this.service.time(dateTime, options);
    }
}