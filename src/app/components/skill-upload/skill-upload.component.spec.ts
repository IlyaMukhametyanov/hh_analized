import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillUploadComponent } from './skill-upload.component';

describe('SkillUploadComponent', () => {
  let component: SkillUploadComponent;
  let fixture: ComponentFixture<SkillUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillUploadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
