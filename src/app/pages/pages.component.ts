import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, OnInit, Renderer2 } from '@angular/core';
import { Event, NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { AppState } from '../@theme/store/app-state';
import { getLoadSpinner } from '../@theme/store/shared/shared.selector';
import { SIDEBAR_MENU_ITEM } from '../sidebar-menu';

@Component({
  selector: 'app-pages',
  template: `
  
  <div id="parent_body_div" class="row w-100">
    <div id="sidebar_div" class="col-4 col-xl-3 px-0 d-none d-md-block">
      <app-sidebar [menus]="menu"></app-sidebar>
    </div>
    <div id="body_div" class="col-8 col-xl-9 pr-0">
      <app-loading-spinner *ngIf="showLoadingIndicator$ | async"></app-loading-spinner>
      <router-outlet *ngIf="!(showLoadingIndicator$ | async)"></router-outlet>
    </div>
  </div>`
})
export class PagesComponent implements OnInit {
  menu = SIDEBAR_MENU_ITEM;
  
  // showLoadingIndicator = true;		// create variable
  showLoadingIndicator$: Observable<boolean>;

  constructor(@Inject(DOCUMENT) private document: Document,
              private render: Renderer2,
              private store: Store<AppState>) {    
  }

  ngOnInit(): void {
    this.showLoadingIndicator$ = this.store.select(getLoadSpinner);
  }

  
}
