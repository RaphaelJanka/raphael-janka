import { Component, ElementRef, HostListener } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';


@Component({
  selector: 'app-my-skills',
  templateUrl: './my-skills.component.html',
  styleUrls: ['./my-skills.component.scss', 'my-skills.component.media-query.scss'],
   animations: [
    trigger('fadeInFromBottom', [
      state('void', style({ transform: 'translateX(70%)', opacity: 0 })),
      transition(':enter', [
        animate('1s 500ms ease-out', style({ transform: 'translateX(0)', opacity: 1 })),
      ]),
    ]),
  ]
})


export class MySkillsComponent {
  
  logos = [ 
    'Angular.svg', 
    'Typescript.svg', 
    'Javascript.svg', 
    'html.svg', 
    'Firebase.svg', 
    'git.svg', 
    'css.svg', 
    'Api.svg', 
    'scrum.svg', 
    'material.svg'
  ];


  titles = [ 
    'Angular', 
    'Typescript', 
    'Javascript', 
    'Html', 
    'Firebase', 
    'Git', 
    'CSS', 
    'API', 
    'Scrum', 
    'Material'
  ];

  isVisible = false;

  constructor(private el: ElementRef) {}
  

  /**
   * Host listener for the 'window:scroll' event. Checks the scroll position
   * to determine if the element is visible in the viewport.
   *
   * @param {Event} $event - The scroll event object.
   */
  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const componentPosition = this.el.nativeElement.offsetTop;
    const scrollPosition = window.pageYOffset;

    if (scrollPosition > componentPosition - window.innerHeight + 100) {
      this.isVisible = true;
    }
  }
}
