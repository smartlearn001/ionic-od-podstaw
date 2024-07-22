import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShadowPage } from './shadow.page';

describe('ShadowPage', () => {
  let component: ShadowPage;
  let fixture: ComponentFixture<ShadowPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ShadowPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
