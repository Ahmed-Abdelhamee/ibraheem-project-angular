import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  // bannerContent = document.createElement('div');

  ngOnInit(): void {
    // this.bannerContent.className = 'content';
    // this.bannerContent.innerHTML = `
    // <h1 class="text-white mb-3">Support Center &amp; Knowledge base</h1>
    // <p class="text-white mb-4">
    //   Find advice and answers from our support team fast or get in touch
    // </p>
    // <div class="position-relative">
    //   <input
    //     id="search"
    //     class="form-control"
    //     placeholder="Have a question? Just ask here or enter terms"
    //   /><i class="ti-search search-icon"></i>
    // </div>`;
    // console.log(this.bannerContent);
  }
}
