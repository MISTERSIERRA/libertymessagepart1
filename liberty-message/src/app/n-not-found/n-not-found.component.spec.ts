import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NNotFoundComponent } from './n-not-found.component';

describe('NNotFoundComponent', () => {
  let component: NNotFoundComponent;
  let fixture: ComponentFixture<NNotFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NNotFoundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
