import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProvider } from './list-provider';

describe('ListProvider', () => {
  let component: ListProvider;
  let fixture: ComponentFixture<ListProvider>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListProvider]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListProvider);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
