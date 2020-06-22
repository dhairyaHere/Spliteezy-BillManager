import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetourteamComponent } from './meetourteam.component';

describe('MeetourteamComponent', () => {
  let component: MeetourteamComponent;
  let fixture: ComponentFixture<MeetourteamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeetourteamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetourteamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
