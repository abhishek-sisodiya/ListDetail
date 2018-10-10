import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsListManagerComponent } from './tabs-list-manager.component';

describe('TabsListManagerComponent', () => {
  let component: TabsListManagerComponent;
  let fixture: ComponentFixture<TabsListManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabsListManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsListManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
