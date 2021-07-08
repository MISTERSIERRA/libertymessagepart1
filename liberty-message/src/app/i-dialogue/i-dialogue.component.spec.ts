import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IDialogueComponent } from './i-dialogue.component';

describe('IDialogueComponent', () => {
  let component: IDialogueComponent;
  let fixture: ComponentFixture<IDialogueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IDialogueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IDialogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
