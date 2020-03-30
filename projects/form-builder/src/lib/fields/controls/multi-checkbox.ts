import { FormlyTemplateOptions } from '@ngx-formly/core';
import { AbstractFormlyControl } from './abstract-control';

export class FormlyMultiCheckboxField extends AbstractFormlyControl {

  constructor(key: string, options: FormlyTemplateOptions['options']) {
    super(key);

    this.config.type = 'multicheckbox';
    this.config.templateOptions.options = options;
  }

}
