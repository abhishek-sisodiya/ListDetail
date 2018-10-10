import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderListManagerComponent } from './header-list-manager.component';

describe('HeaderListManagerComponent', () => {
  let component: HeaderListManagerComponent;
  let fixture: ComponentFixture<HeaderListManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderListManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderListManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
