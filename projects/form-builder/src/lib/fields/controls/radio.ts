import { FormlyTemplateOptions } from '@ngx-formly/core';
import { AbstractFormlyControl } from './abstract-control';

export class FormlyRadioField extends AbstractFormlyControl {

  constructor(key: string, options: FormlyTemplateOptions['options']) {
    super(key);

    this.config.type = 'radio';
    this.config.templateOptions.options = options;
  }

}
