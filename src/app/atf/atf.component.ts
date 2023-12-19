import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-atf',
  templateUrl: './atf.component.html',
  styleUrls: ['./atf.component.scss', './atf.component.media-query.scss'],
  animations: [
    trigger('fadeIn', [
      state('void', style({ opacity: 0 })),
      transition(':enter', [
        animate('2s 0.5s ease-out', style({ opacity: 1 })),
      ]),
    ]),
    trigger('slideInFromBottomAndRotate', [
      state('void', style({ transform: 'translateY(100%) rotate(-90deg)', opacity: 0 })),
      transition(':enter', [
        animate('1s 1.5s ease-out', style({ transform: 'translateY(0) rotate(-90deg)', opacity: 1 })),
      ]),
    ]),
    trigger('slideInFromTop', [
      state('void', style({ transform: 'translateY(-100%)', opacity: 0 })),
      transition(':enter', [
        animate('1s 2.5s ease-out', style({ transform: 'translateY(0)', opacity: 1 })),
      ]),
    ]),
    trigger('fadeInTitle', [
      state('void', style({ opacity: 0 })),
      transition(':enter', [
        animate('1s 3.5s ease-out', style({ opacity: 1 })),
      ]),
    ]),
  ],
  
})


export class AtfComponent {

}
