import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TailwindPage } from './tailwind.page';

describe('TailwindPage', () => {
  let component: TailwindPage;
  let fixture: ComponentFixture<TailwindPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TailwindPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
