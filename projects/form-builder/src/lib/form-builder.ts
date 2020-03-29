import { FormlyFieldConfig } from '@ngx-formly/core';
import { Observable } from 'rxjs';
import { InputType } from './form-builder.interface';
import {
  FormlyBaseField,
  FormlyInputField,
  FormlyTextareaField,
  FormlySelectField,
  FormlyRadioField,
  FormlyCheckboxField,
  FormlyMultiCheckboxField,
  FormlyCustomField,
  FormlyGroupField,
  FormlyArrayField
} from './form-fields';

type Closure = (builder: FormBuilder) => void;
type Options = { label: string, value: any, [prop: string]: any }[];

export class FormBuilder {

  fields: FormlyBaseField[] = [];

  /**
   * Create a new input field.
   */
  input(key: string, type: InputType): FormlyInputField {
    return this.addField(
      new FormlyInputField(key, type)
    );
  }

  /**
   * Create a new textarea field.
   */
  textarea(key: string, rows = 3): FormlyTextareaField {
    return this.addField(
      new FormlyTextareaField(key, rows)
    );
  }

  /**
   * Create a new select field.
   */
  select(key: string, options: Options | Observable<Options>): FormlySelectField {
    return this.addField(
      new FormlySelectField(key, options)
    );
  }

  /**
   * Create a new radio field.
   */
  radio(key: string, options: Options | Observable<Options>): FormlyRadioField {
    return this.addField(
      new FormlyRadioField(key, options)
    );
  }

  /**
   * Create a new (multi)checkbox field.
   */
  checkbox(key: string): FormlyCheckboxField {
    return this.addField(
      new FormlyCheckboxField(key)
    );
  }

  /**
   * Create a new multicheckbox field.
   */
  checkboxes(key: string, options?: Options | Observable<Options>): FormlyMultiCheckboxField {
    return this.addField(
      new FormlyMultiCheckboxField(key, options)
    );
  }

  /**
   * Create a new custom field.
   */
  custom(key: string, type: string): FormlyCustomField {
    return this.addField(
      new FormlyCustomField(key, type)
    );
  }

  /**
   * Create a new field group.
   */
  group(key: string, closure: Closure, className?: string): FormlyGroupField {
    const builder = new FormBuilder();

    // the new builder instance will be accessible via the first
    // argument, as well as the 'this' keyword, sweet!
    closure.call(builder, builder);

    return this.addField(
      new FormlyGroupField(key, builder.fields, className)
    );
  }

  /**
   * Create a new field group container.
   */
  container(closure: Closure, className?: string): FormlyGroupField {
    return this.group(null, closure, className);
  }

  /**
   * Create a new array field.
   */
  array(key: string, type: string, closure: Closure, className?: string): FormlyArrayField {
    const builder = new FormBuilder();

    // the new builder instance will be accessible via the first
    // argument, as well as the 'this' keyword, sweet!
    closure.call(builder, builder);

    return this.addField(
      new FormlyArrayField(key, type, builder.getFields(), className)
    );
  }

  /**
   * Get the fields in formly format.
   */
  getFields(): FormlyFieldConfig[] {
    return this.fields.map(field => field.get());
  }

  /**
   * Add the given field to the stack.
   */
  private addField<Field extends FormlyBaseField>(field: Field): Field {
    this.fields.push(field);
    return field;
  }

}
