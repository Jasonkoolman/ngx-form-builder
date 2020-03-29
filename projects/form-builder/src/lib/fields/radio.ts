import { FormlyTemplateOptions } from '@ngx-formly/core';
import { FormlyBaseField } from './base';

export class FormlyRadioField extends FormlyBaseField {

  constructor(key: string, options: FormlyTemplateOptions['options']) {
    super(key);

    this.config.type = 'radio';
    this.config.templateOptions.options = options;
  }

}
