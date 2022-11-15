import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyButtonUIComponent } from './my-button.component';

describe('MyButtonComponent', () => {
  let component: MyButtonUIComponent;
  let fixture: ComponentFixture<MyButtonUIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyButtonUIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyButtonUIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
