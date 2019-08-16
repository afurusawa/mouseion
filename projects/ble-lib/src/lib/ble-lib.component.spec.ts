import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BleLibComponent } from './ble-lib.component';

describe('BleLibComponent', () => {
  let component: BleLibComponent;
  let fixture: ComponentFixture<BleLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BleLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BleLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
