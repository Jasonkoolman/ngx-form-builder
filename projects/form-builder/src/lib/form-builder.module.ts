import { NgModule } from '@angular/core';
import { FormComponent } from './form.component';
import { FormBuilderService } from './form-builder.service';
import { FormlyModule } from '@ngx-formly/core';


@NgModule({
  declarations: [ FormComponent ],
  providers: [ FormBuilderService ],
  imports: [ FormlyModule ],
  exports: [ FormComponent ]
})
export class FormBuilderModule { }
