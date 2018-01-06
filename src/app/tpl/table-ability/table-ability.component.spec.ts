import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableAbilityComponent } from './table-ability.component';

describe('TableAbilityComponent', () => {
  let component: TableAbilityComponent;
  let fixture: ComponentFixture<TableAbilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableAbilityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableAbilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
