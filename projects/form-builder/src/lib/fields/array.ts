import { FormlyFieldConfig, FormlyTemplateOptions } from '@ngx-formly/core';
import { FormlyBaseField } from './base';

export class FormlyArrayField extends FormlyBaseField {

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

  compose(vars: FormlyTemplateOptions) {
    this.config.fieldArray.templateOptions = {...this.config.fieldArray.templateOptions, ...vars};

    return this;
  }

}
