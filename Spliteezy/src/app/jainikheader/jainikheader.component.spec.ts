import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JainikheaderComponent } from './jainikheader.component';

describe('JainikheaderComponent', () => {
  let component: JainikheaderComponent;
  let fixture: ComponentFixture<JainikheaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JainikheaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JainikheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
