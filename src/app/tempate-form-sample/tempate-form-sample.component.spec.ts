import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempateFormSampleComponent } from './tempate-form-sample.component';

describe('TempateFormSampleComponent', () => {
  let component: TempateFormSampleComponent;
  let fixture: ComponentFixture<TempateFormSampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TempateFormSampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TempateFormSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
