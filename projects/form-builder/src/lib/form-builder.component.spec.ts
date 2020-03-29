import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormComponent } from './form.component';
import { FormBuilderService } from './form-builder.service';
import { FormlyModule } from '@ngx-formly/core';
import { FormBuilderMockService } from './mocks/form-builder.mock.service';

describe('FormComponent', () => {
  let component: FormComponent;
  let service: FormBuilderService;
  let fixture: ComponentFixture<FormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormComponent ],
      imports: [ FormlyModule.forRoot() ],
      providers: [
        { provide: FormBuilderService, useClass: FormBuilderMockService }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    component.name = 'test';
    service = TestBed.inject(FormBuilderService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render form', () => {
    const { builder } = service.getForm('test');
    // TODO: Check component output after using builder
    expect(component).toBeTruthy();
  });
});
