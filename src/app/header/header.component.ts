import { Component, ElementRef, ViewChild, HostListener, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss', 'header.component.media-query.scss']
})
export class HeaderComponent { 
  @ViewChild('sideBar') sideBar!: ElementRef;
  @ViewChild('burgerMenu') burgerMenu!: ElementRef;
  constructor(private renderer: Renderer2) {}

  menu: any;
  
  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    if (window.innerWidth > 550) {
      this.hideSidebar();
      this.resetBurgerMenuButton();
    }
  }


  hideSidebar(): void {
    this.menu = this.sideBar.nativeElement;
    if (this.menu.classList.contains('sidebar-visible')) {
      this.pushSidebarToRight();
    }
  }


  handleSidebar(): void {
    this.toggleBurgerMenu();
    this.moveSidebar();
  }


  moveSidebar(): void {
    this.menu = this.sideBar.nativeElement;
    if (this.menu.classList.contains('sidebar-visible')) {
      this.pushSidebarToRight();
    } else {
      this.pushSidebarToLeft();
    }
  }


  toggleBurgerMenu(): void {
    let button = this.burgerMenu.nativeElement;
    button.classList.toggle('button-highlighted');
  }


  resetBurgerMenuButton(): void {
    let button = this.burgerMenu.nativeElement;
    if (button.classList.contains('button-highlighted')) {
      button.classList.remove('button-highlighted');
    }
  }


  pushSidebarToRight(): void {
    this.menu.classList.remove('sidebar-visible');
    this.menu.classList.add('sidebar-hidden');
  }


  pushSidebarToLeft(): void {
    this.menu.classList.remove('sidebar-hidden');
    this.menu.classList.add('sidebar-visible');
  }


  // highlightLinks(selectedLink: HTMLElement) {
  //   const linksToHighlight = document.querySelectorAll('.header-links a');
    
  //   linksToHighlight.forEach(link => {
  //     if (link === selectedLink) {
  //       this.renderer.addClass(link, 'link-highlighted');
  //     } else {
  //       this.renderer.removeClass(link, 'link-highlighted');
  //     }
  //   });
  // }

}
