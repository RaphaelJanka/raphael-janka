import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss', 'portfolio.component.media-query.scss'],
  animations: [
    trigger('flipAnimation', [
      state('void', style({ transform: 'rotateX(180deg)' })),
      transition(':enter', [
        animate('1.5s 1s ease-out', style({ transform: 'rotateX(0)' })),
      ]),
    ]),
  ],
})


export class PortfolioComponent implements OnInit {
  @ViewChild('allButton') allButton!: ElementRef;

  constructor(private el: ElementRef) {}

  selectedFilter = 'All';

  filteredProjects: any[] = [];

  touchStarted = false;

  isVisible = false;
  
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

  
  /**
   * Initializes the component when it is first created.
   * It filters and displays projects based on the selected filter.
   */
  ngOnInit(): void {
    this.filterProjects();
  }


  /**
   * Called after the component's view has been initialized.
   * It highlights the "All" button by adding a CSS class.
   */
  ngAfterViewInit(): void {
    this.highlightAllButton();
  }


  /**
   * Highlights the "All" button by adding a CSS class to it.
   */
  highlightAllButton() {
    let allButton = this.allButton.nativeElement;
    allButton.classList.add('all-button');
  }
  

  /**
   * Selects a filter and updates the display of projects accordingly.
   *
   * @param filter - The selected filter.
   */
  selectFilter(filter: string) {
    let allButton = this.allButton.nativeElement;
    if (allButton.classList.contains('all-button')) {
      allButton.classList.remove('all-button');
    }
    this.selectedFilter = filter;
    this.filterProjects();
  }


  /**
   * Filters the list of projects based on the selected filter.
   * Updates the display of projects according to the filter criteria.
   */
  filterProjects() {
    if (this.selectedFilter === 'All') {
      this.filteredProjects = this.notebooks;
    } else if (this.selectedFilter === 'Javascript') {
      this.filteredProjects = this.notebooks.filter((project) => !project.tech.includes('Angular'));
    } else if (this.selectedFilter === 'Angular') {
      this.filteredProjects = this.notebooks.filter((project) => project.tech.includes('Angular'));
    }
  }


  /**
   * Handles the touch event by toggling the opacity of the touched element for mobile mode
   * If `touchStarted` is `false`, sets the opacity to 1; otherwise, sets it to 0.
   *
   * @param event - The TouchEvent object.
   */
  onTouchStart(event: TouchEvent) {
    let target = event.currentTarget as HTMLElement | null;
    if (target) {
      if (!this.touchStarted) {
        target.style.opacity = '1';
      } else {
        target.style.opacity = '0';
      }
      this.touchStarted = !this.touchStarted;
    }
  }

  
  /**
   * Handles the touch event on buttons for mobile mode
   * Toggles the background color of the touched button and resets others to 'transparent'.
   *
   * @param event - The TouchEvent object.
   */
  onTouchStartButtons(event: TouchEvent) {
    const buttons = document.querySelectorAll('.select-button');
    buttons.forEach((button) => {
      const element = button as HTMLElement;
      if (element !== event.currentTarget) {
        if (element.style.backgroundColor === 'rgb(0, 190, 232)') {
          element.style.backgroundColor = 'transparent';
        }
      }
    });
    let target = event.currentTarget as HTMLElement;
    target.style.backgroundColor = '#00BEE8';
  }
}
