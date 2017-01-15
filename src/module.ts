import { NgModule } from "@angular/core";

import { I18nService } from "./service";
import { I18nTranslatePipe } from "./translate-pipe";

@NgModule({
    declarations: [I18nTranslatePipe],
    providers: [I18nService],
    exports: [I18nTranslatePipe]
})
export class I18nModule {
}
