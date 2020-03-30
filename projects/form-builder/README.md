# Form Builder

A form builder to produce dynamic forms with [Formly](https://formly.dev).

## Features

Writing forms can become quite complex and time-consuming. Formly is a dynamic (JSON powered) form library for Angular that brings unmatched maintainability to your application's forms. Form Builder is a lightweight wrapper on top of Formly, allowing for expressive code and type hinting using the power of method chaining. It eliminates boilerplate code and large JSON schema's. Furthermore, writing faulty Formly field configurations using Form Builder is near impossible, the compiler would beat you to it.

- :heavy_check_mark: Lightweight
- :heavy_check_mark: Expressive
- :heavy_check_mark: Flexible
- :heavy_check_mark: Type hinting

Seeing is believing. Check out the [demo on Stackblitz](https://stackblitz.com/edit/ngx-form-builder-demo).

## Getting started

1. [Install Formly](https://formly.dev/guide/getting-started): `ng add @ngx-formly/schematics`
2. Install Form Builder: `npm install @koolm/ngx-form-builder`
3. Write your first form

## Documentation

Basic form

```javascript
const builder = new FormBuilder();

builder
  .input('username', 'text')
  .label('Enter your username')
  .default('The great wizard of Oz')
  .required();
  
builder
  .input('level', 'number')
  .label('Enter your level')
  .min(0)
  .max(100)
  .required();
  
builder
  .radio('race', [
    {label: 'Humans', value: 'human'},
    {label: 'Orcs', value: 'orc'}
  ])
  .label('Pick a side')
  .description('Choose carefully, there is no way back.')
  .required();
  
builder
  .select('class', [
    {label: 'Warrior', value: 'warrior'},
    {label: 'Rogue', value: 'rogue'},
    {label: 'Sorcerer', value: 'sorcerer'}
  ])
  .label('Choose your class')
  .default('warrior')
  .required();
  
this.builder.getFields(); // output
```
    
### Expressions

Fields methods allow for elegant (template) expressions:

```javascript
builder
  .radio('question', [
    {label: 'Yes', value: true},
    {label: 'No', value: false}
  ])
  .label('Disable the input');
  
builder
    .input('foo', 'text')
    .hide('model.question');

builder
  .input('bar', 'text')
  .expression('disabled', 'model.question');
```

### Groups

Fields can be grouped indefinitely.

```javascript
builder.group('address', (groupBuilder) => {

  groupBuilder
    .input('street', 'text')
    .label('Street')
    .required();
    
  groupBuilder
    .input('number', 'text')
    .label('House number')
    .required();

});
```
    
### Grid

Fields can be aligned inside a grid by assigning classes.

```javascript
builder.group('address', (groupBuilder) => {

  groupBuilder
    .input('street', 'text')
    .label('Street')
    .required()
    .class('col-md-6')
    
  groupBuilder
    .checkbox('number', 'text')
    .label('House number')
    .required()
    .class('col-md-6')

}, 'row');
```
