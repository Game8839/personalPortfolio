import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  constructor(private router: Router) {}
  facebookUrl = 'https://www.facebook.com/sarun.thongaram/';
  instagramUrl = 'https://www.instagram.com/gamesarun/';
  linkinUrl = 'https://www.linkedin.com/in/sarun-thongaram-1b6479188/';
  ngOnInit(): void {}
  redirect(url) {
    this.router.navigateByUrl(url);
  }
}
