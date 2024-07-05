import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ToastsPage } from './toasts.page';

describe('ToastsPage', () => {
  let component: ToastsPage;
  let fixture: ComponentFixture<ToastsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ToastsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
