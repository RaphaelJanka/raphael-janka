import { Component, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss', 'portfolio.component.media-query.scss']
})
export class PortfolioComponent {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  

  notebooks = [
    'join.png',
    'sharkie.png',
    'pokedex.png',
  ];
  
  titles = [
    'Join',
    'Sharkie',
    'Pokédex'
  ];

  descriptions = [
    'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
    'A simple Jump-and-Run game based on an object-oriented approach. Help sharkie to find coins and poison bottles to fight against the killer whale.',
    'Based on the PokéAPI a simple library that provides and catalogues pokemon information.'
  ]


  tech = [
    'HTML | CSS | JavaScript | Bootstrap',
    'HTML | CSS | JavaScript',
    'HTML | CSS | JavaScript | API'
  ];


  github = [
    'https://github.com/RaphaelJanka/join',
    'https://github.com/RaphaelJanka/Sharkie',
    'https://github.com/RaphaelJanka/pokedex',
  ];


  projectLinks = [
    'https://raphael-janka.com/Join/html/login.html',
    'https://raphael-janka.com/sharkie/index.html',
    'https://raphael-janka.com/pokedex/html/index.html'
  ];


  isHovered: boolean[] = new Array(this.notebooks.length).fill(false);

  
  /**
   * Handles the touch start event for a specified element at a given index.
   *
   * @param {number} index - The index of the element associated with the touch start event.
   */
  onTouchStart(index: number): void {
    this.isHovered[index] = true;
  }


  /**
   * Handles the touch end event for a specified element at a given index.
   *
   * @param {number} index - The index of the element associated with the touch end event.
   */
  onTouchEnd(index: number): void {
    this.isHovered[index] = false;
  }


  /**
   * Listens for a document click event and resets the hovered state if the click occurs outside of the component's elements.
   *
   * @param {Event} event - The click event.
   */
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event): void {
    // Prüfen, ob der Klick außerhalb der project-content-Elemente erfolgt
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.isHovered = this.isHovered.map(() => false); // Alle auf false setzen
    }
  }

}
