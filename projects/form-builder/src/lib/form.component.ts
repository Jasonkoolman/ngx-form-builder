import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { FormBuilderService } from './form-builder.service';

@Component({
  selector: 'fb-form',
  template: '<formly-form [form]="form" [fields]="fields" [options]="options" [model]="model"></formly-form>',
})
export class FormComponent implements OnInit, OnDestroy {
  form: FormGroup;
  fields: FormlyFieldConfig[];
  options: FormlyFormOptions;
  model: any;

  @Input() name: string;

  constructor(private fb: FormBuilderService) {}

  ngOnInit() {
    const { form, builder, options, model } = this.fb.getForm(this.name);
    this.form = form;
    this.fields = builder.getFields();
    this.options = options;
    this.model = model;
  }

  ngOnDestroy() {
    this.fb.deleteForm(this.name);
  }
}
