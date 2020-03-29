import { FormlyBaseField } from './base';

export class FormlyCheckboxField extends FormlyBaseField {

  constructor(key: string) {
    super(key);

    this.config.type = 'checkbox';
  }

}
