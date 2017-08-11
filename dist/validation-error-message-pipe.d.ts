import { PipeTransform } from "@angular/core";
import { AbstractControl } from "@angular/forms";
import { IntlService } from "./service";
export declare class IntlValidationErrorMessagePipe implements PipeTransform {
    private service;
    constructor(service: IntlService);
    private lastMessage;
    private lastErrors;
    transform(control: AbstractControl): string;
    ngOnDestroy(): void;
}
