import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from './form-builder';
import { FormlyFormOptions } from '@ngx-formly/core';

export interface FormBuilderForm {
  form: FormGroup;
  builder: FormBuilder;
  options: FormlyFormOptions;
  model: any;
}

@Injectable({
  providedIn: 'root'
})
export class FormBuilderService {

  private forms: {[key: string]: FormBuilderForm} = {};

  createForm(name: string, model: any = {}, options: FormlyFormOptions = {}): FormBuilderForm {
    const form = new FormGroup({});
    const builder = new FormBuilder();

    if (this.hasForm(name)) {
      throw new Error(`Unable to create form "${name}" as it already exists`);
    }

    this.forms[name] = { form, builder, options, model };

    return this.getForm(name);
  }

  hasForm(name: string): boolean {
    return this.forms.hasOwnProperty(name);
  }

  getForm(name: string): FormBuilderForm | null {
    return this.forms[name] || null;
  }

  deleteForm(name: string) {
    delete this.forms[name];
  }

}
