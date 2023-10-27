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

  ngOnInit(): void {
    this.scrollToTop();
  }
  scrollToTop() {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  }
}