import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
  notebooks = [
    'laptop.png',
    'laptop.jpg',
    'laptop.jpg',
    'laptop.jpg',
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
    'https://github.com/RaphaelJanka/pokédex',
    'https://github.com/RaphaelJanka/ringoffire',
  ];

  projectLinks = [

  ];
}
