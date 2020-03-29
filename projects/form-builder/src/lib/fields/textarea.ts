import { FormlyBaseField } from './base';

export class FormlyTextareaField extends FormlyBaseField {

  constructor(key: string, rows: number) {
    super(key);

    this.config.type = 'textarea';
    this.config.templateOptions.rows = rows;
  }

}
