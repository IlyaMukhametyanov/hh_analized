import { Component, ElementRef, HostListener, OnInit } from '@angular/core'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  //headerComponent = 'headerComponent'
  nonAuthorized: boolean = false
  showModal = false;


  toggleModal() {
      this.showModal =!this.showModal


  }
  goToProfile() {
    // Логика перехода на страницу профиля
  }

  goToSettings() {
    // Логика перехода на страницу настроек
  }

  logout() {
    // Логика выхода из системы
  }

  constructor() { }


  ngOnInit(): void {
  }

}
