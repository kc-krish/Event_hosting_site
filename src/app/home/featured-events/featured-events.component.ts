import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-featured-events',
  templateUrl: './featured-events.component.html',
  styleUrls: ['./featured-events.component.css'],
})
export class FeaturedEventsComponent implements OnInit, OnDestroy {
  featuredEvents = [
    {
      title: 'Tech Innovators Conference 2024',
      date: 'December 10, 2024',
      location: 'San Francisco, CA',
      description:
        'Join industry leaders and innovators to explore the latest advancements in technology.',
      image:
        'https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGV2ZW50c3xlbnwwfHwwfHx8MA%3D%3D',
    },
    {
      title: 'New Year’s Eve Gala',
      date: 'December 31, 2024',
      location: 'New York, NY',
      description:
        'Ring in the new year with an elegant night of music, dance, and celebration.',
      image:
        'https://images.unsplash.com/photo-1478145787956-f6f12c59624d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGV2ZW50c3xlbnwwfHwwfHx8MA%3D%3D',
    },
    {
      title: 'Music Festival 2025',
      date: 'March 20, 2025',
      location: 'Austin, TX',
      description:
        'Experience an unforgettable weekend of live music, food trucks, and entertainment.',
      image:
        'https://plus.unsplash.com/premium_photo-1661340622801-6e19ab613b2f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZXZlbnRzfGVufDB8fDB8fHww',
    },
    {
      title: 'Spring Art Exhibition',
      date: 'April 15, 2025',
      location: 'Chicago, IL',
      description:
        'Discover the works of talented artists from around the world in this vibrant exhibition.',
      image:
        'https://unsplash.com/photos/people-raising-wine-glass-in-selective-focus-photography-ULHxWq8reao',
    },
    {
      title: 'Corporate Leadership Summit',
      date: 'May 5, 2025',
      location: 'Seattle, WA',
      description:
        'Learn from top executives and thought leaders about building a successful corporate culture.',
      image:
        'https://plus.unsplash.com/premium_photo-1664474653221-8412b8dfca3e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZXZlbnRzfGVufDB8fDB8fHww',
    },
  ];

  currentIndex = 0;
  slidesToShow = 3;
  autoplayInterval: any;

  prevSlide() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = 2;
    }
  }

  nextSlide() {
    if (this.currentIndex < this.featuredEvents.length - this.slidesToShow) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0;
    }
  }

  ngOnInit() {
    this.startAutoplay(); // Start autoplay when the component loads
  }

  ngOnDestroy() {
    this.stopAutoplay(); // Stop the timer when the component is destroyed
  }

  // Start autoplay
  startAutoplay() {
    this.autoplayInterval = setInterval(() => {
      this.nextSlide(); // Move to the next slide at regular intervals
    }, 3000); // Change slide every 3 seconds
  }

  // Stop autoplay
  stopAutoplay() {
    if (this.autoplayInterval) {
      clearInterval(this.autoplayInterval);
    }
  }
}
