import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClasessComponent } from './clasess.component';

describe('ClasessComponent', () => {
  let component: ClasessComponent;
  let fixture: ComponentFixture<ClasessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClasessComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClasessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
