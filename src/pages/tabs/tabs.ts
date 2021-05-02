import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { TimerPage } from '../timer/timer';
import { LoginPage } from '../login/login';
import { RegisterPage } from '../register/register';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab4Root = ContactPage;
  tab3Root = TimerPage;
  tab5Root = LoginPage;
  tab6Root = RegisterPage;

  constructor() {

  }
}
