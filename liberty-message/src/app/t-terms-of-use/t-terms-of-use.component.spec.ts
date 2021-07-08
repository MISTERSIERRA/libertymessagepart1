import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TTermsOfUseComponent } from './t-terms-of-use.component';

describe('TTermsOfUseComponent', () => {
  let component: TTermsOfUseComponent;
  let fixture: ComponentFixture<TTermsOfUseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TTermsOfUseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TTermsOfUseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
