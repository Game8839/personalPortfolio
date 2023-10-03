import { Component } from '@angular/core';

@Component({
  selector: 'app-certificate',
  templateUrl: './certificate.component.html',
  styleUrls: ['./certificate.component.css'],
})
export class CertificateComponent {
  certificates = [
    {
      title: 'Senior Project',
      header:
        'Cargo Carrier Robot with Mecanum wheels.  Displayed in ICA SP-CON 2018',
      content:
        'Create a cargo carrier robot with mecanum wheel using Arduino as a main processor.',
    },
    {
      title: 'Internship',
      header: 'Technische Universität Darmstadt, Germany.',
      content:
        'Work as a Ph.D. researcher assistant in a signal processing group. Use Matlab to analyze the biomedical signal.',
    },
  ];
}
