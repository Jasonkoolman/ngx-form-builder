import { FormlyBaseField } from './base';

export class FormlyCustomField extends FormlyBaseField {

  constructor(key: string, type: string) {
    super(key);

    this.config.type = type;
  }

}
