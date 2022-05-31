import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatesharesComponent } from './updateshares.component';

describe('UpdatesharesComponent', () => {
  let component: UpdatesharesComponent;
  let fixture: ComponentFixture<UpdatesharesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatesharesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatesharesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
