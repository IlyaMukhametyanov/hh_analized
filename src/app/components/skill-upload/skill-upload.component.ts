import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-skill-upload',
  templateUrl: './skill-upload.component.html',
  styleUrls: ['./skill-upload.component.scss']
})
export class SkillUploadComponent implements OnInit {
    uploadForm = new FormGroup({
      uploadFile : new FormControl()

    })

  constructor(
      private formBuilder: FormBuilder

  ) { }

  ngOnInit(): void {

  }
  onSubmit(): void{

  }

}
