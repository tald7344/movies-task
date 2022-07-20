import { Component, HostListener, Inject, Input, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { LayoutService } from '../../helper/layout.service';
import { DatePipe, DOCUMENT } from '@angular/common';
import { SidebarMenuItems } from '../../model/sidebar-menu-items';
import { TokenService } from '../../admin-service/token/token.service';
import { AuthService } from '../../admin-service/auth/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [DatePipe]
})
export class HeaderComponent implements OnInit {

  @Input() menus: SidebarMenuItems[];
  loggedIn: boolean;
  name: string;
  disabled = false;

  constructor(private tokenService: TokenService,
              private authService: AuthService,
              private layoutService: LayoutService,
              private router: Router,
              private datePipe: DatePipe,
              @Inject(DOCUMENT) private document: Document,
              private render: Renderer2) {
  }

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
