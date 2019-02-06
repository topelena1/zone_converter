import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTimeZoneComponent } from './create-time-zone.component';

describe('CreateTimeZoneComponent', () => {
  let component: CreateTimeZoneComponent;
  let fixture: ComponentFixture<CreateTimeZoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateTimeZoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTimeZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
