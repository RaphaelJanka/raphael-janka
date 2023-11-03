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
    'ring-of-fire.png',
  ];
  titles = [
    'Join',
    'Sharkie',
    'Pokédex',
    'Ring of Fire'
  ];

  descriptions = [
    'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
    'A simple Jump-and-Run game based on an object-oriented approach. Help sharkie to find coins and poison bottles to fight against the killer whale.',
    'Based on the PokéAPI a simple library that provides and catalogues pokemon information.',
    'A famous online drinking game',
  ]
  tech = [
    'HTML | CSS | JavaScript | Bootstrap',
    'HTML | CSS | JavaScript',
    'HTML | CSS | JavaScript | API',
    'HTML | SCSS | TypeScript | Firebase | Angular'
  ];

  github = [
    'https://github.com/RaphaelJanka/join',
    'https://github.com/RaphaelJanka/Sharkie',
    'https://github.com/RaphaelJanka/pokedex',
    'https://github.com/RaphaelJanka/ringoffire',
  ];

  projectLinks = [
    'https://raphael-janka.com/Join/html/login.html',
    'https://raphael-janka.com/sharkie/index.html',
    'https://raphael-janka.com/pokedex/html/index.html',
    'https://raphael-janka.com/ringoffire/index.html',
  ];

  isHovered: boolean[] = new Array(this.notebooks.length).fill(false);

  onTouchStart(index: number): void {
    this.isHovered[index] = true;
  }

  onTouchEnd(index: number): void {
    this.isHovered[index] = false;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event): void {
    // Prüfen, ob der Klick außerhalb der project-content-Elemente erfolgt
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.isHovered = this.isHovered.map(() => false); // Alle auf false setzen
    }
  }

}
