import { Component } from '@angular/core';

@Component({
  selector: 'app-career-summary',
  templateUrl: './career-summary.component.html',
  styleUrls: ['./career-summary.component.css'],
})
export class CareerSummaryComponent {
  careers = [
    {
      jobTitle: 'Software Engineer',
      Company: 'Third500 Investment Banking',
      start: 'Decemer 2022',
      end: 'Present',
      jobDescription: [
        'Develop a software as an internal tools used within company.',
        'Prepare software solution based on the giving assignment.',
        'Create data pipeline imported from different service.',
      ],
    },
    {
      jobTitle: 'Software Engineer',
      Company: 'Werum IT Solution',
      start: 'August 2020',
      end: 'July 2022',
      jobDescription: [
        'Access customer environment on demanded to provide workaround/ track requirement/ consult with customer.',
        'Use SQL database intervention to solve the issue.',
      ],
    },
    {
      jobTitle: 'Software Engineer',
      Company: 'TESM (Thonburi Energy Storage Manufacturing)',
      start: 'August 2019',
      end: 'April 2020',
      jobDescription: [
        'Perform preventive maintenance of the MES software inside the production.',
        'Work as MES administrator running the production.',
      ],
    },
  ];
}
