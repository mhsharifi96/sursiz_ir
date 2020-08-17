import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FancyBoxComponent } from './fancy-box.component';

describe('FancyBoxComponent', () => {
  let component: FancyBoxComponent;
  let fixture: ComponentFixture<FancyBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FancyBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FancyBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
