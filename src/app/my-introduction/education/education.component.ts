import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent {
  educations = [
    {
      school: 'The Aryan School',
      start: '2008',
      end: '2014',
      detail:
        'ICSE(Indian Certificate of Secondary Education) Board with 80% overall',
    },
    {
      school: 'SIIT Thammasat University',
      start: '2014',
      end: '2019',
      detail:
        'Bachelor of Electronics and Communication Engineering, SIIT, with 2.94 GPA',
    },
  ];
}
