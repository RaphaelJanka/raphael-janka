import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MySkillsComponent } from './my-skills.component';

describe('MySkillsComponent', () => {
  let component: MySkillsComponent;
  let fixture: ComponentFixture<MySkillsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MySkillsComponent]
    });
    fixture = TestBed.createComponent(MySkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
