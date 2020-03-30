import { AbstractFormlyControl } from './abstract-control';

export class FormlyCheckboxField extends AbstractFormlyControl {

  constructor(key: string) {
    super(key);

    this.config.type = 'checkbox';
  }

}
