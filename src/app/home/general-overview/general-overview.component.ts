import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-general-overview',
  templateUrl: './general-overview.component.html',
  styleUrl: './general-overview.component.css',
})
export class GeneralOverviewComponent
  implements OnInit, AfterViewInit, OnDestroy
{
  private animations: gsap.core.Tween[] = [];
  screenWidth: any;
  eventsHosted: number = 0;
  satisfiedClients: number = 0;
  venuesAvailable: number = 0;

  constructor() {
    gsap.registerPlugin(ScrollTrigger);
  }

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
  }

  ngAfterViewInit(): void {
    this.createAnimations();

    ScrollTrigger.create({
      trigger: '.scroll_element1',
      start: 'top 90%',
      toggleActions: 'play reverse play reverse',
      invalidateOnRefresh: true,
      onEnter: () => {
        this.resetCounter();
        this.startCounters();
      },
    });
  }

  resetCounter(): void {
    this.eventsHosted = 0;
    this.satisfiedClients = 0;
    this.venuesAvailable = 0;
  }

  startCounters(): void {
    this.animateCounter('eventsHosted', 250, 2000);
    this.animateCounter('satisfiedClients', 1000, 2000);
    this.animateCounter('venuesAvailable', 50, 2000);
  }

  animateCounter(
    propertyName: keyof GeneralOverviewComponent,
    targetValue: number,
    duration: number
  ): void {
    const startValue = 0;
    const increment = targetValue / (duration / 20);
    const interval = setInterval(() => {
      this[propertyName] += increment; // Increment the property value directly
      if (this[propertyName] >= targetValue) {
        this[propertyName] = targetValue; // Ensure it doesn't exceed the target value
        clearInterval(interval); // Stop the interval
      }
    }, 10); // Update every 10ms
  }

  createAnimations(): void {
    this.animations.forEach((anim) => anim.kill());
    this.animations = [];

    const elements1 = document.querySelectorAll('.scroll_element1');
    const btn = document.querySelectorAll('.scroll_element1 button');
    const elements2 = document.querySelectorAll('.scroll_element2');
    // const img = document.querySelectorAll('.scroll_element2 img');

    elements1.forEach((el) => {
      const animation = gsap.fromTo(
        el,
        {
          x: 800,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 1.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 95%',
            end: 'bottom 20%',
            toggleActions: 'play reverse play reverse',
            invalidateOnRefresh: true,
          },
        }
      );

      this.animations.push(animation);
    });

    elements2.forEach((el) => {
      const animation = gsap.fromTo(
        el,
        {
          x: -800,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 1.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 95%',
            end: 'bottom 20%',
            toggleActions: 'play reverse play reverse',
            invalidateOnRefresh: true,
          },
        }
      );

      this.animations.push(animation);
    });
  }

  ngOnDestroy(): void {
    this.animations.forEach((anim) => anim.kill());
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    this.resetCounter();
  }
}
