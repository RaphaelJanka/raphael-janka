import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-legal-notice',
  templateUrl: './legal-notice.component.html',
  styleUrls: ['./legal-notice.component.scss']
})
export class LegalNoticeComponent implements OnInit {

  
  /**
   * Lifecycle hook called after Angular has initialized the component. Scrolls the window to the top when the component is initialized.
   */
  ngOnInit(): void {
    this.scrollToTop();
  }


  /**
   * Scrolls the window to the top of the page with a smooth animation.
   */
  scrollToTop() {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  }
}
