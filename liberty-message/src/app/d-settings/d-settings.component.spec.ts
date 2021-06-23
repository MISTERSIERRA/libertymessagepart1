import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DSettingsComponent } from './d-settings.component';

describe('DSettingsComponent', () => {
  let component: DSettingsComponent;
  let fixture: ComponentFixture<DSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DSettingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
