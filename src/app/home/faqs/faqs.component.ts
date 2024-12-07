import { Component } from '@angular/core';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrl: './faqs.component.css',
})
export class FaqsComponent {
  faqs = [
    {
      question: 'What types of events do you plan?',
      answer:
        'We specialize in weddings, corporate events, birthday parties, product launches, and more. Whatever the occasion, we’re here to make it special.',
    },
    {
      question: 'How far in advance should I book your services?',
      answer:
        'We recommend booking at least 3-6 months in advance for major events. However, we can also accommodate last-minute requests based on availability.',
    },
    {
      question: 'Do you offer catering services?',
      answer:
        'Yes, we provide a wide range of catering options to suit different tastes, dietary needs, and event styles.',
    },
    {
      question: 'Can I customize my event package?',
      answer:
        'Absolutely! All our packages are fully customizable to match your vision, budget, and preferences.',
    },
    {
      question: 'Do you handle decorations and theming?',
      answer:
        'Yes, we take care of all the decorations, including custom themes, floral arrangements, and lighting setups.',
    },
    {
      question: 'What venues do you work with?',
      answer:
        'We have partnerships with top-rated venues across the city. If you have a specific venue in mind, we can work with them as well.',
    },
    {
      question: 'What is your cancellation policy?',
      answer:
        'Cancellations are allowed up to 30 days before the event for a full refund. For cancellations within 30 days, a partial refund may be provided.',
    },
    {
      question: 'Can you provide audiovisual equipment for my event?',
      answer:
        'Yes, we can arrange state-of-the-art audiovisual equipment, including projectors, microphones, and sound systems.',
    },
    {
      question: 'Do you offer on-site coordination during the event?',
      answer:
        'Yes, our team will be present on-site to ensure everything runs smoothly from start to finish.',
    },
    {
      question: 'How do I get a quote for my event?',
      answer:
        'You can fill out our contact form or call us directly to discuss your requirements. We’ll provide you with a detailed quote within 24-48 hours.',
    },
  ];
}
