import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyfridgeDetailsComponent } from './myfridge-details.component';

describe('MyfridgeDetailsComponent', () => {
  let component: MyfridgeDetailsComponent;
  let fixture: ComponentFixture<MyfridgeDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyfridgeDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyfridgeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
