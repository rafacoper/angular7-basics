import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrazyTaxyComponent } from './crazy-taxy.component';

describe('CrazyTaxyComponent', () => {
  let component: CrazyTaxyComponent;
  let fixture: ComponentFixture<CrazyTaxyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrazyTaxyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrazyTaxyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
