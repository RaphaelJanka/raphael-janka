import { Component } from '@angular/core';

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
export class HomeComponent {}