import { NgModule } from '@angular/core';

import { SampleApplicationSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [SampleApplicationSharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [SampleApplicationSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class SampleApplicationSharedCommonModule {}
