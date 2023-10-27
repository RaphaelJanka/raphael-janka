import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss', 'privacy-policy.component.media-query.scss']
})
export class PrivacyPolicyComponent implements OnInit{
  
  ngOnInit(): void {
    this.scrollToTop();
  }
  scrollToTop() {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  }
}
