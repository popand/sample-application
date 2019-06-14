import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SampleApplicationSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [SampleApplicationSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [SampleApplicationSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SampleApplicationSharedModule {
  static forRoot() {
    return {
      ngModule: SampleApplicationSharedModule
    };
  }
}
