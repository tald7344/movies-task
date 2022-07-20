import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { AuthService } from '../../admin-service/auth/auth.service';
import { TokenService } from '../../admin-service/token/token.service';
import { LayoutService } from '../../helper/layout.service';
import { SidebarMenuItems } from '../../model/sidebar-menu-items';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  providers: [DatePipe]
})
export class SidebarComponent implements OnInit {

  @Input() menus: SidebarMenuItems[];
  loggedIn: boolean;
  name: string;
  disabled = false;

  constructor(private tokenService: TokenService,
              private authService: AuthService,
              private layoutService: LayoutService,
              private router: Router) {}

  ngOnInit() {
    this.authService.authState.subscribe(
      loggedIn => this.loggedIn = loggedIn
    );
  }


  logout() {
    this.tokenService.deleteToken();
    this.authService.changeAuthStatus(false);
    this.router.navigate(['/auth/login']);
  }

  clicked(value = null) {
    if (value) {
      this.layoutService.changeLayout(value);
      this.router.navigate(['/']);
    }
  }


}
