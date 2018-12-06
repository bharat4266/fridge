import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyfridgeListComponent } from './myfridge-list.component';

describe('MyfridgeListComponent', () => {
  let component: MyfridgeListComponent;
  let fixture: ComponentFixture<MyfridgeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyfridgeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyfridgeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
