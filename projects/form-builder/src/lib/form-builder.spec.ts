import { FormBuilder } from './form-builder';

describe('FormBuilder', () => {
  let builder: FormBuilder;

  beforeEach(() => {
    builder = new FormBuilder();
  });

  it('should create input', () => {
    const control = builder
      .input('username', 'text')
      .label('Username')
      .default('admin')
      .required()
      .get();

    expect(control).toEqual({
      key: 'username',
      type: 'input',
      defaultValue: 'admin',
      templateOptions: {
        type: 'text',
        label: 'Username',
        required: true
      },
      modelOptions: {},
      hooks: {}
    });
  });
});
