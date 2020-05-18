import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/user/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  navbarOpen = false;
 

  constructor(
    public authService: AuthService
  ) { }

  ngOnInit() {
  }

  openCollapse(){
    this.navbarOpen = !this.navbarOpen;
  }

}
