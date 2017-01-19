import { NgModule } from "@angular/core";

import { IntlService } from "./service";
import { IntlTranslatePipe } from "./translate-pipe";

@NgModule({
    declarations: [IntlTranslatePipe],
    providers: [IntlService],
    exports: [IntlTranslatePipe]
})
export class IntlModule {
}
