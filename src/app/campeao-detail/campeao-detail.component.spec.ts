import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampeaoDetailComponent } from './campeao-detail.component';

describe('CampeaoDetailComponent', () => {
  let component: CampeaoDetailComponent;
  let fixture: ComponentFixture<CampeaoDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CampeaoDetailComponent]
    });
    fixture = TestBed.createComponent(CampeaoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
