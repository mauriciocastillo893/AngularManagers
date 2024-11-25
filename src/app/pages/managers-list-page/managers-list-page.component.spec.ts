import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagersListPageComponent } from './managers-list-page.component';

describe('ManagersListPageComponent', () => {
  let component: ManagersListPageComponent;
  let fixture: ComponentFixture<ManagersListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManagersListPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagersListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
