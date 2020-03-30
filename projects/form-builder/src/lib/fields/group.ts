import { AbstractFormlyField } from './abstract-field';

export class FormlyGroupField extends AbstractFormlyField {

  constructor(key: string, fields: AbstractFormlyField[], className?: string) {
    super(key);

    this.config.fieldGroup = fields.map(field => field.get());

    if (className) {
      this.config.fieldGroupClassName = className;
    }
  }

  /**
   * Add a template expression to each field.
   */
  expression(key: string, value: string | ((model: any, formState: any) => boolean)) {
    this.config.fieldGroup.forEach(field => {
      const props = field.expressionProperties || {};

      props['templateOptions. ' + key] = value;

      field.expressionProperties = props;
    });

    return this;
  }

}
