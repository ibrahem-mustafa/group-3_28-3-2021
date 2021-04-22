import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountsListItemComponent } from './accounts-list-item.component';

describe('AccountsListItemComponent', () => {
  let component: AccountsListItemComponent;
  let fixture: ComponentFixture<AccountsListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountsListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountsListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
