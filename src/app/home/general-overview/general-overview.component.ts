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

  constructor() {
    gsap.registerPlugin(ScrollTrigger);
  }

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
  }

  ngAfterViewInit(): void {
    this.createAnimations();
  }

  createAnimations(): void {
    this.animations.forEach((anim) => anim.kill());
    this.animations = [];

    const elements1 = document.querySelectorAll('.scroll_element1');
    const elements2 = document.querySelectorAll('.scroll_element2');

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
  }
}
