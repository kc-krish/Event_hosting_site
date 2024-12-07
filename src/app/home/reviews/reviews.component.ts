import { X } from '@angular/cdk/keycodes';
import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css'],
})
export class ReviewsComponent implements AfterViewInit, OnDestroy {
  private animations: gsap.core.Tween[] = [];
  constructor() {
    gsap.registerPlugin(ScrollTrigger);
  }

  ngAfterViewInit(): void {
    this.createAnimations();
  }

  reviews = [
    {
      photo:
        'https://images.unsplash.com/photo-1619420674819-da50b9f76950?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2ZpbGUlMjBwaG90b3N8ZW58MHx8MHx8fDA%3D',
      name: 'John Doe',
      text: 'EventSphere made my wedding a dream come true! Highly recommend.',
      date: 'March 5, 2023',
    },
    {
      photo: 'https://via.placeholder.com/150/1e1e1e/FFFFFF?text=Jane+Smith',
      name: 'Jane Smith',
      text: 'Professional and creative. Our corporate gala was a huge success!',
      date: 'July 15, 2023',
    },
    {
      photo: 'https://via.placeholder.com/150/1e1e1e/FFFFFF?text=Emily+Johnson',
      name: 'Emily Johnson',
      text: 'Absolutely fantastic team! They handled everything seamlessly.',
      date: 'October 12, 2023',
    },
    {
      photo: 'https://via.placeholder.com/150/1e1e1e/FFFFFF?text=Michael+Brown',
      name: 'Michael Brown',
      text: 'EventSphere truly exceeded my expectations with their attention to detail.',
      date: 'April 10, 2023',
    },
    {
      photo:
        'https://via.placeholder.com/150/1e1e1e/FFFFFF?text=Sarah+Williams',
      name: 'Sarah Williams',
      text: 'The team was professional and made the whole process stress-free!',
      date: 'June 20, 2023',
    },
    {
      photo: 'https://via.placeholder.com/150/1e1e1e/FFFFFF?text=Chris+Taylor',
      name: 'Chris Taylor',
      text: 'Our product launch event was a hit, thanks to EventSphere!',
      date: 'August 14, 2023',
    },
    {
      photo:
        'https://via.placeholder.com/150/1e1e1e/FFFFFF?text=Jessica+Martinez',
      name: 'Jessica Martinez',
      text: 'A truly outstanding experience from start to finish.',
      date: 'September 30, 2023',
    },
    {
      photo: 'https://via.placeholder.com/150/1e1e1e/FFFFFF?text=David+Clark',
      name: 'David Clark',
      text: 'The best event planning service I have ever used!',
      date: 'November 11, 2023',
    },
    {
      photo: 'https://via.placeholder.com/150/1e1e1e/FFFFFF?text=Amanda+Lopez',
      name: 'Amanda Lopez',
      text: 'EventSphere brought my vision to life perfectly!',
      date: 'January 22, 2023',
    },
    {
      photo: 'https://via.placeholder.com/150/1e1e1e/FFFFFF?text=Robert+Moore',
      name: 'Robert Moore',
      text: 'The event went flawlessly thanks to the incredible team.',
      date: 'December 3, 2023',
    },
  ];
  currentIndex = 0;
  nextReview() {
    if (this.currentIndex < this.reviews.length - 1) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0;
    }
  }
  prevReview() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.reviews.length - 1;
    }
  }

  createAnimations() {
    const reviewTitle = document.querySelector('.reviewTitle');
    const reviewBox = document.querySelector('.reviewBox');

    const animation1 = gsap.fromTo(
      reviewTitle,
      {
        x: 1400,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: reviewTitle,
          start: 'top 95%',
          end: 'bottom 20%',
          toggleActions: 'play reverse play reverse',
          invalidateOnRefresh: true,
        },
      }
    );
    this.animations.push(animation1);

    const animation2 = gsap.fromTo(
      reviewBox,
      {
        x: -1400,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: reviewBox,
          start: 'top 95%',
          end: 'bottom 20%',
          toggleActions: 'play reverse play reverse',
          invalidateOnRefresh: false,
        },
      }
    );
  }
  ngOnDestroy(): void {
    this.animations.forEach((anim) => anim.kill());
  }
}
