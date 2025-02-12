import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallrecorderComponent } from './callrecorder.component';

describe('CallrecorderComponent', () => {
  let component: CallrecorderComponent;
  let fixture: ComponentFixture<CallrecorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CallrecorderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CallrecorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
