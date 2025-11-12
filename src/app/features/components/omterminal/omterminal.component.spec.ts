import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OmterminalComponent } from './omterminal.component';

describe('OmterminalComponent', () => {
  let component: OmterminalComponent;
  let fixture: ComponentFixture<OmterminalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OmterminalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OmterminalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
