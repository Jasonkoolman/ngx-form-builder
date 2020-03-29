import { FormlyTemplateOptions } from '@ngx-formly/core';
import { FormlyBaseField } from './base';

export class FormlyMultiCheckboxField extends FormlyBaseField {

  constructor(key: string, options: FormlyTemplateOptions['options']) {
    super(key);

    this.config.type = 'multicheckbox';
    this.config.templateOptions.options = options;
  }

}
