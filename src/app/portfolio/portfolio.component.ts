import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss', 'portfolio.component.media-query.scss']
})
export class PortfolioComponent implements OnInit {
  @ViewChild('allButton') allButton!: ElementRef;

  constructor() { }


  selectedFilter = 'All';

  filteredProjects: any[] = [];

  notebooks = [
    {
      image: 'join.png',
      title: 'Join',
      description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      tech: 'HTML | CSS | JavaScript | Bootstrap',
      github: 'https://github.com/RaphaelJanka/join',
      projectLink: 'https://raphael-janka.com/Join/html/login.html',
    },
    {
      image: 'sharkie.png',
      title: 'Sharkie',
      description: 'A simple Jump-and-Run game based on an object-oriented approach. Help sharkie to find coins and poison bottles to fight against the killer whale.',
      tech: 'HTML | CSS | JavaScript',
      github: 'https://github.com/RaphaelJanka/Sharkie',
      projectLink: 'https://raphael-janka.com/sharkie/index.html',
    },
    {
      image: 'pokedex.png',
      title: 'Pokédex',
      description: 'Based on the PokéAPI a simple library that provides and catalogues pokemon information.',
      tech: 'HTML | CSS | JavaScript | API',
      github: 'https://github.com/RaphaelJanka/pokedex',
      projectLink: 'https://raphael-janka.com/pokedex/html/index.html',
    },
    {
      image: 'website.png',
      title: 'Personal Website',
      description: 'Own personal website',
      tech: 'Angular | Typescript | Bootstrap',
      github: 'https://github.com/RaphaelJanka/raphael-janka',
      projectLink: '',
    },
  ];


  ngOnInit(): void {
    this.filterProjects();
  }

  ngAfterViewInit(): void {
    this.highlightAllButton();
}

  highlightAllButton() {
    let allButton = this.allButton.nativeElement;
    allButton.classList.add('all-button');
  }
  

  selectFilter(filter: string) {
    let allButton = this.allButton.nativeElement;
    if (allButton.classList.contains('all-button')) {
      allButton.classList.remove('all-button');
    }
    this.selectedFilter = filter;
    this.filterProjects();
  }


  filterProjects() {
    if (this.selectedFilter === 'All') {
      this.filteredProjects = this.notebooks;
    } else if (this.selectedFilter === 'Javascript') {
      this.filteredProjects = this.notebooks.filter((project) => !project.tech.includes('Angular'));
    } else if (this.selectedFilter === 'Angular') {
      this.filteredProjects = this.notebooks.filter((project) => project.tech.includes('Angular'));
    }
  }
}
