import {NgModule} from "@angular/core";

import {IntlService} from "./service";
import {IntlMessagePipe} from "./message-pipe";
import {IntlRelativeFormatStaticPipe, IntlRelativeFormatPipe} from "./relative-format-pipe";
import {IntlDateTimeFormatPipe, IntlTimeFormatPipe, IntlDateFormatPipe} from "./date-time-format-pipe";
import {IntlCurrencyFormatPipe} from "./currency-format-pipe";

@NgModule({
    declarations: [IntlMessagePipe, IntlRelativeFormatStaticPipe, IntlRelativeFormatPipe, IntlDateTimeFormatPipe, IntlTimeFormatPipe, IntlDateFormatPipe, IntlCurrencyFormatPipe],
    providers: [IntlService],
    exports: [IntlMessagePipe, IntlRelativeFormatStaticPipe, IntlRelativeFormatPipe, IntlDateTimeFormatPipe, IntlTimeFormatPipe, IntlDateFormatPipe, IntlCurrencyFormatPipe]
})
export class IntlModule {
}
