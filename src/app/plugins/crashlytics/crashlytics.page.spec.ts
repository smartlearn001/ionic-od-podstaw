import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrashlyticsPage } from './crashlytics.page';

describe('CrashlyticsPage', () => {
  let component: CrashlyticsPage;
  let fixture: ComponentFixture<CrashlyticsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CrashlyticsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
