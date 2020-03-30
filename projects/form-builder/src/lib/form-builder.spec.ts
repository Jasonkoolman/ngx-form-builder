import { FormBuilder } from './form-builder';
import { Validators } from '@angular/forms';

const MOCK_OPTIONS = [
  { label: 'Yes', value: true },
  { label: 'No', value: false }
];

describe('FormBuilder', () => {
  let builder: FormBuilder;

  beforeEach(() => {
    builder = new FormBuilder();
  });

  it('should create input', () => {
    const output = builder.input('username', 'text').get();

    expect(output).toEqual({
      key: 'username',
      type: 'input',
      templateOptions: {
        type: 'text'
      }
    });
  });

  it('should create textarea', () => {
    const output = builder.textarea('description', 2).get();

    expect(output).toEqual({
      key: 'description',
      type: 'textarea',
      templateOptions: {
        rows: 2
      }
    });
  });

  it('should create select', () => {
    const output = builder.select('options', MOCK_OPTIONS).get();

    expect(output).toEqual({
      key: 'options',
      type: 'select',
      templateOptions: {
        options: MOCK_OPTIONS
      }
    });
  });

  it('should create radio', () => {
    const output = builder.radio('options', MOCK_OPTIONS).get();

    expect(output).toEqual({
      key: 'options',
      type: 'radio',
      templateOptions: {
        options: MOCK_OPTIONS
      }
    });
  });

  it('should create checkbox', () => {
    const output = builder.checkbox('terms').get();

    expect(output).toEqual({
      key: 'terms',
      type: 'checkbox',
      templateOptions: {}
    });
  });

  it('should create multiCheckbox', () => {
    const output = builder.checkboxes('options', MOCK_OPTIONS).get();

    expect(output).toEqual({
      key: 'options',
      type: 'multicheckbox',
      templateOptions: {
        options: MOCK_OPTIONS
      }
    });
  });

  it('should create rich control', () => {
    const callback = () => {};
    const output = builder
      .input('email', 'email')
      .label('Email')
      .placeholder('Enter your email')
      .description('Make sure to double check')
      .default('test@example.com')
      .required()
      .validators({ validation: [Validators.email] })
      .modelOptions({ updateOn: 'blur' })
      .onInit(callback)
      .onDestroy(callback)
      .get();

    expect(output).toEqual(jasmine.objectContaining({
      key: 'email',
      type: 'input',
      templateOptions: {
        type: 'email',
        label: 'Email',
        placeholder: 'Enter your email',
        description: 'Make sure to double check',
        required: true
      },
      defaultValue: 'test@example.com',
      validators: {
        validation: [Validators.email]
      },
      modelOptions: {
        updateOn: 'blur'
      }
    }));

    expect(typeof output.hooks.onInit).toMatch('function');
    expect(typeof output.hooks.onDestroy).toMatch('function');
  });

});
