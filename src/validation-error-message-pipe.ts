import {Pipe, PipeTransform} from "@angular/core";
import {AbstractControl, ValidationErrors} from "@angular/forms";
import {IntlService} from "./service";

@Pipe({
    name: "intlValidationErrorMessage",
    pure: false
})
export class IntlValidationErrorMessagePipe implements PipeTransform {

    constructor(private service: IntlService) {
    }

    private lastMessage: string;

    private lastErrors: ValidationErrors;

    transform(control: AbstractControl): string {

        if (this.lastErrors === control.errors) {
            return this.lastMessage;
        }

        this.lastMessage = this.service.validationErrorMessage(control);
        this.lastErrors = control.errors;

        return this.lastMessage;
    }

    ngOnDestroy() {
        this.lastErrors = undefined;
        this.lastMessage = undefined;
    }
}