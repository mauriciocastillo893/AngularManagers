import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerManagementPageComponent } from './manager-management-page.component';

describe('ManagerManagementPageComponent', () => {
  let component: ManagerManagementPageComponent;
  let fixture: ComponentFixture<ManagerManagementPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManagerManagementPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagerManagementPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
