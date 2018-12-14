import {ModuleWithProviders, NgModule} from "@angular/core";
import {IntlCurrencyFormatPipe} from "./currency-format-pipe";
import {IntlDateFormatPipe, IntlDateTimeFormatPipe, IntlTimeFormatPipe} from "./date-time-format-pipe";
import {IntlDecimalFormatPipe} from "./decimal-format-pipe";
import {IntlMessagePipe} from "./message-pipe";
import {IntlPercentFormatPipe} from "./percent-format-pipe";
import {IntlRelativeFormatPipe, IntlRelativeFormatStaticPipe} from "./relative-format-pipe";
import {IntlService} from "./service";
import {IntlValidationErrorMessagePipe} from "./validation-error-message-pipe";
import {IntlValuePipe} from "./value-pipe";

@NgModule({
    declarations: [IntlValuePipe, IntlMessagePipe, IntlRelativeFormatStaticPipe, IntlRelativeFormatPipe, IntlDateTimeFormatPipe, IntlTimeFormatPipe, IntlDateFormatPipe, IntlCurrencyFormatPipe, IntlDecimalFormatPipe, IntlPercentFormatPipe, IntlValidationErrorMessagePipe],
    exports: [IntlValuePipe, IntlMessagePipe, IntlRelativeFormatStaticPipe, IntlRelativeFormatPipe, IntlDateTimeFormatPipe, IntlTimeFormatPipe, IntlDateFormatPipe, IntlCurrencyFormatPipe, IntlDecimalFormatPipe, IntlPercentFormatPipe, IntlValidationErrorMessagePipe]
})
export class IntlModule {

    static forRoot(): ModuleWithProviders {
        return {ngModule: IntlModule, providers: [IntlService]};
    }

}
