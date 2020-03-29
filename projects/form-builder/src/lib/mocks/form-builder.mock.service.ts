import { FormGroup } from '@angular/forms';
import { FormBuilder } from '../form-builder';
import { FormlyFormOptions } from '@ngx-formly/core';
import { FormBuilderForm } from '../form-builder.interface';

export class FormBuilderMockService {

  private forms: {[key: string]: FormBuilderForm} = {};

  constructor() {
    this.createForm('test');
  }

  createForm(name: string, model: any = {}, options: FormlyFormOptions = {}): FormBuilderForm {
    const form = new FormGroup({});
    const builder = new FormBuilder();
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
