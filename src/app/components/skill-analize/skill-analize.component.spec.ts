import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillAnalizeComponent } from './skill-analize.component';

describe('SkillAnalizeComponent', () => {
  let component: SkillAnalizeComponent;
  let fixture: ComponentFixture<SkillAnalizeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillAnalizeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillAnalizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
