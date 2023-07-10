import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampeaoSearchComponent } from './campeao-search.component';

describe('CampeaoSearchComponent', () => {
  let component: CampeaoSearchComponent;
  let fixture: ComponentFixture<CampeaoSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CampeaoSearchComponent]
    });
    fixture = TestBed.createComponent(CampeaoSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
