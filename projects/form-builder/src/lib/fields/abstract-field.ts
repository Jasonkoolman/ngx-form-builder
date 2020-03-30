import { FormlyFieldConfig, FormlyTemplateOptions } from '@ngx-formly/core';

/**
 * This class gets extended by all the different formly
 * fields to allow for convenient method chaining.
 */
export class AbstractFormlyField {
  protected key: string;
  protected config: FormlyFieldConfig = {
    templateOptions: {}
  };

  constructor(key: string) {
    this.key = key;
  }

  /**
   * Set or add the given wrappers.
   */
  wrappers(names: string[]) {
    this.config.wrappers ?
      this.config.wrappers.push(...names) :
      this.config.wrappers = names;

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
  class(name: string) {
    this.config.className = name;

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
      throw new Error('Template options must be passed via compose()');
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
   * Add a listener for when the field is initialized.
   */
  onInit(callback: (field: FormlyFieldConfig) => void) {
    const hooks = this.config.hooks || {};

    hooks.onInit = (field) => callback(field);

    this.config.hooks = hooks;

    return this;
  }

  /**
   * Add a listener for when the field is destroyed.
   */
  onDestroy(callback: (field: FormlyFieldConfig) => void) {
    const hooks = this.config.hooks || {};

    hooks.onDestroy = (field) => callback(field);

    this.config.hooks = hooks;

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
