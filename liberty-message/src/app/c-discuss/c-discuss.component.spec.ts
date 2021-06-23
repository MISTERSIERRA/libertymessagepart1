import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CDiscussComponent } from './c-discuss.component';

describe('CDiscussComponent', () => {
  let component: CDiscussComponent;
  let fixture: ComponentFixture<CDiscussComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CDiscussComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CDiscussComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
