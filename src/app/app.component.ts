import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Location } from '@angular/common';
interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isSideNavCollapsed = false;
  screenWidth = 0;
  isLogin = true;
  event$: any;
  constructor(private location: Location,
    private router: Router,) {
    router.events.subscribe((val) => {

      if (this.location.path() !== '/login') {
        this.isLogin = false;
      } else {
        this.isLogin = true;
      }
    });
  }
  ngOnInit(): void {
   
  }


  onToggleSideNav(data: SideNavToggle): void {
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }
}
