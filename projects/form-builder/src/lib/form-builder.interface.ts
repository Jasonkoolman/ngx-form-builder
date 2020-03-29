import {FormGroup} from '@angular/forms';
import {FormBuilder} from './form-builder';
import {FormlyFormOptions} from '@ngx-formly/core';

export type InputType = 'text' | 'email' | 'number' | 'search' | 'date';

export interface FormBuilderForm {
  form: FormGroup;
  builder: FormBuilder;
  options: FormlyFormOptions;
  model: any;
}
