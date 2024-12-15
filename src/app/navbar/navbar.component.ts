import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  menuType: string = 'default';
  userName: string = "";
  userImage: string = "";
  showDropdown: boolean = false;
  
  constructor(private route: Router) { }

  ngOnInit(): void {
    this.route.events.subscribe((val: any) => {
      if (val.url) {
        if (localStorage.getItem('user')) {
          let userStore = localStorage.getItem('user');
          let userData = userStore && JSON.parse(userStore);
          this.userName = userData.firstName + " " + userData.lastName;
          this.userImage = userData.image;
          console.log("userName", this.userName);
          this.menuType = 'user';
        } else {
          this.menuType = 'default';
        }
      }
    });
  }

  userLogout() {
    localStorage.removeItem('user');
    localStorage.removeItem('accessToken');
    this.route.navigate(['/user-auth']);
  }

  toggleDropdown(): void {
    this.showDropdown = !this.showDropdown; // Toggles the dropdown visibility
  }
} 
