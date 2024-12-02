import { AfterViewInit, Component } from '@angular/core';
import { Lightbox, LightboxConfig } from 'ngx-lightbox';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css',
})
export class GalleryComponent {
  images = [
    { src: '/images/Events/img1.avif', caption: 'Event 1' },
    { src: '/images/Events/img2.avif', caption: 'Event 2' },
    { src: '/images/Events/img3.webp', caption: 'Event 3' },
    { src: '/images/Events/img4.webp', caption: 'Event 4' },
    { src: '/images/Events/img5.avif', caption: 'Event 5' },
    { src: '/images/Events/img6.avif', caption: 'Event 6' },
    { src: '/images/Events/img7.avif', caption: 'Event 7' },
    { src: '/images/Events/img8.avif', caption: 'Event 8' },
    { src: '/images/Events/img9.avif', caption: 'Event 9' },
    { src: '/images/Events/img10.avif', caption: 'Event 10' },
    { src: '/images/Events/img11.avif', caption: 'Event 11' },
    { src: '/images/Events/img12.avif', caption: 'Event 12' },
  ];
  private albums: Array<any> = [];
  private animations: gsap.core.Tween[] = [];

  constructor(
    private lightbox: Lightbox,
    private lightboxConfig: LightboxConfig
  ) {
    this.images.forEach((image) => {
      this.albums.push({
        src: image.src,
        caption: image.caption,
      });
    });
    this.lightboxConfig.fadeDuration = 0.5;
    this.lightboxConfig.showImageNumberLabel = true;
  }

  open(index: number): void {
    console.log('opening image at index ' + index);
    this.lightbox.open(this.albums, index);
  }
  close(): void {
    this.lightbox.close();
  }
}
