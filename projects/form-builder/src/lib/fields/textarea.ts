import { FormlyBaseField } from './base';

export class FormlyTextareaField extends FormlyBaseField {

  constructor(key: string, rows: number) {
    super(key);

    this.config.type = 'textarea';
    this.config.templateOptions.rows = rows;
  }

  /**
   * Set the placeholder.
   */
  placeholder(value: string) {
    this.config.templateOptions.placeholder = value;

    return this;
  }

}
