import { Component, OnInit, DoCheck } from '@angular/core';
import { User } from './models/user';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})
export class AppComponent implements OnInit, DoCheck {
  title = 'videos-angular';
  public identity: any;
  public token: any;

  constructor(private _userService: UserService) {

  }
  ngDoCheck(): void {
    this.loadUser(); 
  }
  ngOnInit(): void {

  }

  loadUser() {
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
  }
}
