import { AbstractFormlyControl } from './abstract-control';

export class FormlyCustomField extends AbstractFormlyControl {

  constructor(key: string, type: string) {
    super(key);

    this.config.type = type;
  }

}
