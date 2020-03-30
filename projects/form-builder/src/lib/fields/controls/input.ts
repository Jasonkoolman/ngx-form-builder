import { AbstractFormlyControl } from './abstract-control';
import { InputType } from '../../form-builder.interface';

export class FormlyInputField extends AbstractFormlyControl {

  constructor(key: string, type: InputType = 'text') {
    super(key);

    this.config.type = 'input';
    this.config.templateOptions.type = type;
  }

  /**
   * Set the placeholder.
   */
  placeholder(value: string) {
    this.config.templateOptions.placeholder = value;

    return this;
  }

  /**
   * Set the minimum.
   */
  min(value: number) {
    this.config.templateOptions.type === 'number' ?
      this.config.templateOptions.min = value :
      this.config.templateOptions.minLength = value;

    return this;
  }

  /**
   * Set the maximum.
   */
  max(value: number) {
    this.config.templateOptions.type === 'number' ?
      this.config.templateOptions.max = value :
      this.config.templateOptions.maxLength = value;

    return this;
  }

}
