import { Validators } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { AbstractFormlyField } from '../abstract-field';

export class AbstractFormlyControl extends AbstractFormlyField {
  protected key: string;
  protected config: FormlyFieldConfig = {
    templateOptions: {}
  };

  constructor(key: string) {
    super(key);
  }

  /**
   * Set the label.
   */
  label(value: string) {
    this.config.templateOptions.label = value;

    return this;
  }

  /**
   * Set the default value.
   */
  default(value: any) {
    this.config.defaultValue = value;

    return this;
  }

  /**
   * Set the description.
   */
  description(value: string) {
    this.config.templateOptions.description = value;

    return this;
  }

  /**
   * Mark as required.
   */
  required(value = true) {
    this.config.templateOptions.required = value;

    if (this.config.type === 'checkbox') {
      this.config.validators = {
        validation: [Validators.requiredTrue]
      };
    }

    return this;
  }

  /**
   * Set the validators.
   */
  validators(value: object) {
    this.config.validators = { ...this.config.validators, ...value };

    return this;
  }

  /**
   * Set the async validators.
   */
  asyncValidators(value: object) {
    this.config.asyncValidators = { ...this.config.asyncValidators, ...value };

    return this;
  }

  /**
   * Set model options.
   */
  modelOptions(options: FormlyFieldConfig['modelOptions']) {
    this.config.modelOptions = options;

    return this;
  }

  /**
   * Set parser functions to execute as a pipeline when the model updates.
   */
  parsers(parsers: FormlyFieldConfig['parsers']) {
    this.config.parsers = parsers;

    return this;
  }

  /**
   * Add a listener for the change event.
   */
  onChange(callback: (field: FormlyFieldConfig, event: Event) => void) {
    this.config.templateOptions.change = callback;

    return this;
  }

  /**
   * Add a listener for the click event.
   */
  onClick(callback: (field: FormlyFieldConfig, event: MouseEvent) => void) {
    this.config.templateOptions.click = callback;

    return this;
  }

  /**
   * Add a listener for the keypress event.
   */
  onKeyPress(callback: (field: FormlyFieldConfig, event: KeyboardEvent) => void) {
    this.config.templateOptions.keypress = callback;

    return this;
  }

}
