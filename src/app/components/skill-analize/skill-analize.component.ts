import { Component, OnInit } from '@angular/core';
import { SkillsAnalizeService } from 'src/app/services/skills-analize.service';
import {Router} from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-skill-analize',
  templateUrl: './skill-analize.component.html',
  styleUrls: ['./skill-analize.component.scss']
})
export class SkillAnalizeComponent implements OnInit {
  form = new FormGroup({
    profession : new FormControl()
  });


  constructor(
    private skills_serv: SkillsAnalizeService,
    private router: Router,
    private formBuilder: FormBuilder

  ) { }

  ngOnInit(): void {
    this.skills_serv.initialization()
    this.form = this.formBuilder.group({
      profession: ['', [Validators.required ,Validators.minLength(3)]],
    });

  }

    onSubmit() {
    if (this.form.valid){
      this.router.navigateByUrl('/skillsUpload');
      }
    }
}
