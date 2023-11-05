import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <app-atf></app-atf>
    <app-about-me></app-about-me>
    <app-my-skills></app-my-skills>
    <app-portfolio></app-portfolio>
    <app-contact></app-contact>
  `,
})
export class HomeComponent implements OnInit {
  constructor() {}


  /**
   * Lifecycle hook called after Angular has initialized the component. Scrolls the window to the top when the component is initialized.
   */
  ngOnInit(): void {
    this.scrollToTop();
  }

  /**
   * Scrolls the window to the top of the page with a smooth animation.
   */
  scrollToTop() {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  }

}