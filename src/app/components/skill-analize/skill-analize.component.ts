import { Component, OnInit } from '@angular/core';
import { SkillsAnalizeService } from 'src/app/services/skills-analize.service';

@Component({
  selector: 'app-skill-analize',
  templateUrl: './skill-analize.component.html',
  styleUrls: ['./skill-analize.component.scss']
})
export class SkillAnalizeComponent implements OnInit {

  constructor(
    private skills_serv: SkillsAnalizeService
  ) { }

  ngOnInit(): void {
    this.skills_serv.initialization()
  }

}
