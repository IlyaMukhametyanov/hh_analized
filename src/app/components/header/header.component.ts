import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  //headerComponent = 'headerComponent'
  nonAuthorized: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

}
