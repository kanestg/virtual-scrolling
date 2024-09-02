import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './virtual.component.html',
  styleUrls: ['./virtual.component.css']
})
export class VirtualComponent implements OnInit, AfterViewInit {

  items: any = [];
  isLoading = false;
  page = 1;

  // Reference to the last item
  @ViewChild('lastItem', { static: false }) lastItem: ElementRef | undefined;

  ngOnInit(): void {
    this.loadMoreData();
  }

  ngAfterViewInit(): void {
    // Create IntersectionObserver to observe when last item is visible
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !this.isLoading) {
          this.loadMoreData();
        }
      });
    }, {
      root: null, // Use the viewport as the container
      threshold: 0.1 // Trigger when 10% of the element is visible
    });

    // Observe the last item
    if (this.lastItem) {
      observer.observe(this.lastItem.nativeElement);
    }
  }

  // Simulate API call and append more data
  loadMoreData(): void {
    this.isLoading = true;
    setTimeout(() => {
      const newItems = Array.from({ length: 20 }).map((_, i) => `Item #${(this.page - 1) * 20 + i + 1}`);
      this.items = [...this.items, ...newItems];
      this.page++;
      this.isLoading = false;
    }, 100);
  }
}

