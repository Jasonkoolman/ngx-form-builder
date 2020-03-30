import { AbstractFormlyControl } from './abstract-control';

export class FormlyTextareaField extends AbstractFormlyControl {

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
