import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  loggedIn : boolean = false;
  constructor(private router: Router) {
  }
  
  title = 'EnergyDashboard';

  sideBarOpen = true;

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
  ngOnInit(): void {
    this.loggedIn =localStorage.getItem("loggedIn")? JSON.parse(localStorage.getItem("loggedIn").toLowerCase()):localStorage.setItem("loggedIn","false");
    console.log("this.loggedIn  ", this.loggedIn)
    console.log("Redirect from login page")
    if(!this.loggedIn){
      this.router.navigateByUrl("/login");
    }
  }
}
