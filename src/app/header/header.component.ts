import { Component, ElementRef, ViewChild, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss', 'header.component.media-query.scss']
})
export class HeaderComponent { 
  @ViewChild('sideBar') sideBar!: ElementRef;
  @ViewChild('burgerMenu') burgerMenu!: ElementRef;
  constructor() {}

  menu: any;
  

  /**
   * Listens for the window resize event and performs specific actions when the window width exceeds 550 pixels.
   *
   * @param {Event} event - The window resize event.
   */
  // @HostListener('window:resize', ['$event'])
  // onResize(event: Event): void {
  //   if (window.innerWidth > 550) {
  //     this.hideSidebar();
  //     this.resetBurgerMenuButton();
  //   }
  // }


  /**
   * Hides the sidebar by pushing it to the right if it is currently visible.
   */
  hideSidebar(): void {
    this.menu = this.sideBar.nativeElement;
    if (this.menu.classList.contains('sidebar-visible')) {
      this.pushSidebarToRight();
    }
  }


  /**
   * Handles the behavior of the sidebar by toggling the burger menu and moving the sidebar.
   */
  handleSidebar(): void {
    this.toggleBurgerMenu();
    this.moveSidebar();
  }


  /**
   * Moves the sidebar to its new position by either pushing it to the right or left based on its current visibility.
   */
  moveSidebar(): void {
    this.menu = this.sideBar.nativeElement;
    if (this.menu.classList.contains('sidebar-visible')) {
      this.pushSidebarToRight();
    } else {
      this.pushSidebarToLeft();
    }
  }


  /**
   * Toggles the highlighting of the burger menu button, changing its appearance.
   */
  toggleBurgerMenu(): void {
    let button = this.burgerMenu.nativeElement;
    button.classList.toggle('button-highlighted');
  }


  /**
   * Resets the appearance of the burger menu button by removing the 'button-highlighted' class if it is currently applied.
   */
  resetBurgerMenuButton(): void {
    let button = this.burgerMenu.nativeElement;
    if (button.classList.contains('button-highlighted')) {
      button.classList.remove('button-highlighted');
    }
  }


  /**
   * Pushes the sidebar to the right by changing its visibility classes.
   */
  pushSidebarToRight(): void {
    this.menu.classList.remove('sidebar-visible');
    this.menu.classList.add('sidebar-hidden');
  }


  /**
   * Pushes the sidebar to the left by changing its visibility classes.
   */
  pushSidebarToLeft(): void {
    this.menu.classList.remove('sidebar-hidden');
    this.menu.classList.add('sidebar-visible');
  }
}
