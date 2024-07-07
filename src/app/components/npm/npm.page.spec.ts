import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NpmPage } from './npm.page';

describe('NpmPage', () => {
  let component: NpmPage;
  let fixture: ComponentFixture<NpmPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NpmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
