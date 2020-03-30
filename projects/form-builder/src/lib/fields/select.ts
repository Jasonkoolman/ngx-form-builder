import { FormlyTemplateOptions } from '@ngx-formly/core';
import { FormlyBaseField } from './base';

export class FormlySelectField extends FormlyBaseField {

  constructor(key: string, options: FormlyTemplateOptions['options']) {
    super(key);

    this.config.type = 'select';
    this.config.templateOptions.options = options;
  }

  /**
   * Set the placeholder.
   */
  placeholder(value: string) {
    this.config.templateOptions.placeholder = value;

    return this;
  }

}
