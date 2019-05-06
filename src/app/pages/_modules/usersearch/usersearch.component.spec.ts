import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersearchComponent } from './usersearch.component';

describe('UsersearchComponent', () => {
  let component: UsersearchComponent;
  let fixture: ComponentFixture<UsersearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
