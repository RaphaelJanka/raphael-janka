import { Component } from '@angular/core';

@Component({
  selector: 'app-my-skills',
  templateUrl: './my-skills.component.html',
  styleUrls: ['./my-skills.component.scss', 'my-skills.component.media-query.scss']
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
}
