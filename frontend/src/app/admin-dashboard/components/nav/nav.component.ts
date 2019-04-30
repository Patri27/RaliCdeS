import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Logout } from 'src/app/auth/store/auth.actions';

@Component({
  selector: 'rcs-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(private store: Store) { }

  ngOnInit() {
  }

  logoutUser() {
    this.store.dispatch(new Logout());
  }

}
