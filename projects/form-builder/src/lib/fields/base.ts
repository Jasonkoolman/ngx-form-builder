import { Validators } from '@angular/forms';
import { FormlyFieldConfig, FormlyTemplateOptions } from '@ngx-formly/core';
import { pairwise, startWith } from 'rxjs/operators';

/**
 * This class gets extended by all the different formly
 * fields to allow for convenient method chaining.
 */
export class FormlyBaseField {
  protected key: string;
  protected config: FormlyFieldConfig = {
    templateOptions: {}
  };

  constructor(key: string) {
    this.key = key;
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
   * Set the wrappers.
   */
  wrappers(value: string[]) {
    this.config.wrappers ?
      this.config.wrappers.push(...value) :
      this.config.wrappers = value;

    return this;
  }

  /**
   * Set the expression properties.
   */
  expressions(value: {
    [property: string]: string | ((model: any, formState: any) => boolean)
  }) {
    this.config.expressionProperties = value;

    return this;
  }

  /**
   * Add a template expression property.
   */
  expression(key: string, value: string | ((model: any, formState: any) => boolean)) {
    const props = this.config.expressionProperties || {};

    props['templateOptions. ' + key] = value;

    this.config.expressionProperties = props;

    return this;
  }

  /**
   * Set the class name.
   */
  class(value: string) {
    this.config.className = value;

    return this;
  }

  /**
   * Conditionally hide the field.
   */
  hide(condition: ((model: any, formState: any) => boolean) | string | boolean) {
    typeof condition === 'boolean' ?
      this.config.hide = condition :
      this.config.hideExpression = condition;

    return this;
  }

  /**
   * Merge the given configuration with the current one.
   */
  configure(config: FormlyFieldConfig) {
    if (config.hasOwnProperty('templateOptions')) {
      console.warn('Template options must be passed via compose()');
    }

    this.config = { ...this.config, ...config };

    return this;
  }

  /**
   * Compose variables to the template.
   */
  compose(vars: FormlyTemplateOptions) {
    this.config.templateOptions = { ...this.config.templateOptions, ...vars };

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
   * Add a listener for when the control is initialized.
   */
  onInit(callback: (field: FormlyFieldConfig) => void) {
    const hooks = this.config.hooks || {};

    hooks.onInit = (field) => callback(field);

    this.config.hooks = hooks;

    return this;
  }

  /**
   * Add a listener for when the control is destroyed.
   */
  onDestroy(callback: (field: FormlyFieldConfig) => void) {
    const hooks = this.config.hooks || {};

    hooks.onDestroy = (field) => callback(field);

    this.config.hooks = hooks;

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

  /**
   * Add a listener for when the control value changes.
   */
  valueChanges(callback: (value: any, previousValue: any, field: FormlyFieldConfig) => void) {
    let subscription;

    this.onInit(field => {
      subscription = field.formControl
        .valueChanges
        .pipe(startWith(this.config.defaultValue ?? null), pairwise())
        .subscribe(([prev, next]) => {
          callback(next, prev, field);
        });
    });

    this.onDestroy(() => {
      subscription.unsubscribe();
    });

    return this;
  }

  /**
   * Get the field configuration.
   */
  get(): FormlyFieldConfig {
    return {
      key: this.key,
      ...this.config
    };
  }
}
