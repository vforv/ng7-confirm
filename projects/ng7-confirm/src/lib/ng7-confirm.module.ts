import { NgModule } from '@angular/core';
import { Ng7ConfirmComponent } from './ng7-confirm.component';
import { Ng7ConfirmDirective } from './ng7-confirm.directive';

@NgModule({
  declarations: [Ng7ConfirmComponent, Ng7ConfirmDirective],
  entryComponents: [Ng7ConfirmComponent],
  imports: [
  ],
  exports: [Ng7ConfirmDirective]
})
export class Ng7ConfirmModule { }
