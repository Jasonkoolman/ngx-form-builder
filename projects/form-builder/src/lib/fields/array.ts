import { FormlyFieldConfig, FormlyTemplateOptions } from '@ngx-formly/core';
import { AbstractFormlyField } from './abstract-field';

export class FormlyArrayField extends AbstractFormlyField {

  constructor(key: string, type: string, fields: FormlyFieldConfig[], className?: string) {
    super(key);

    this.config.type = type;
    this.config.fieldArray = {
      fieldGroup: fields,
      templateOptions: {}
    };

    if (className) {
      this.config.fieldGroupClassName = className;
    }
  }

  configure(config: FormlyFieldConfig) {
    if (config.hasOwnProperty('fieldArray.templateOptions')) {
      throw new Error('Template options must be passed via compose()');
    }

    return super.configure(config);
  }

  compose(vars: FormlyTemplateOptions) {
    this.config.fieldArray.templateOptions = {...this.config.fieldArray.templateOptions, ...vars};

    return this;
  }

}
