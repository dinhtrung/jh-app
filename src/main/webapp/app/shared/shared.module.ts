import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';

import { NgbDateMomentAdapter } from './util/datepicker-adapter';
import { AppSharedLibsModule, AppSharedCommonModule, HasAnyAuthorityDirective } from './';

@NgModule({
    imports: [AppSharedLibsModule, AppSharedCommonModule],
    declarations: [HasAnyAuthorityDirective],
    providers: [{ provide: NgbDateAdapter, useClass: NgbDateMomentAdapter }],
    exports: [AppSharedCommonModule, HasAnyAuthorityDirective],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppSharedModule {
    static forRoot() {
        return {
            ngModule: AppSharedModule
        };
    }
}
