import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-legal-notice',
  templateUrl: './legal-notice.component.html',
  styleUrls: ['./legal-notice.component.scss']
})
export class LegalNoticeComponent implements OnInit {

  ngOnInit(): void {
    this.scrollToTop();
  }
  scrollToTop() {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  }
}
