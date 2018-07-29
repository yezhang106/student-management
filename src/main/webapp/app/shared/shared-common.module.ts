import { NgModule } from '@angular/core';

import { StudentmanagementSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [StudentmanagementSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [StudentmanagementSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class StudentmanagementSharedCommonModule {}
