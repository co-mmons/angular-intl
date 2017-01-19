import { NgModule } from "@angular/core";

import { IntlService } from "./service";
import { IntlTranslatePipe } from "./translate-pipe";
import { IntlRelativeStaticPipe, IntlRelativePipe } from "./relative-pipe";
import { IntlDateTimePipe, IntlTimePipe, IntlDatePipe } from "./datetime-pipe";

@NgModule({
    declarations: [IntlTranslatePipe, IntlRelativeStaticPipe, IntlRelativePipe, IntlDateTimePipe, IntlTimePipe, IntlDatePipe],
    providers: [IntlService],
    exports: [IntlTranslatePipe, IntlRelativeStaticPipe, IntlRelativePipe, IntlDateTimePipe, IntlTimePipe, IntlDatePipe]
})
export class IntlModule {
}
