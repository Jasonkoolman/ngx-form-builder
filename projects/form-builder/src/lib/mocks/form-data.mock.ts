export const OPTIONS = [
  { label: 'Yes', value: false },
  { label: 'No', value: false }
];

export const CONTROL = {
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
    validation: []
  },
  modelOptions: {
    updateOn: 'blur'
  }
};
