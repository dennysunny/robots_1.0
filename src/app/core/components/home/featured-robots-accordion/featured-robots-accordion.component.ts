import { Component } from '@angular/core';

@Component({
  selector: 'app-featured-robots-accordion',
  standalone: true,
  imports: [],
  templateUrl: './featured-robots-accordion.component.html',
  styleUrl: './featured-robots-accordion.component.scss'
})
export class FeaturedRobotsAccordionComponent {

  accordionData :any[] = [
    {
      id: 1,
      header: 'What is Robots?',
      content: 'Robots is a unique brand that combines art and technology. creating exclusive golden Robot sculptures through a sophisticated robot artist. Each piece is a one-of-a-kind masterpiece, blending creativity and innovation',
      isOpen : false
    },
    {
      id: 2,
      header: 'How are the golden Robots made?',
      content: 'All the golden ducks are created by GL4D, an advanced robot artist equipped with artificial intelligence and robotics technology The process involves a secret technique that enhances the value and uniqueness of each piece',
      isOpen : false
    },
    {
      id: 3,
      header: 'What benefits do I get by joining the club?',
      content: 'By joining our exclusive Discord community, collectors gain access to unique benefits such as insider news, early previews of new collections, special events, and exclusive offers',
      isOpen : false
    },
    {
      id: 4,
      header: 'What payment methods are accepted?',
      content: 'We accept various payment methods including major credit cards, PayPal, and cryptocurrency payments to ensure a smooth and secure transaction process.',
      tex : false
    },
  ]

  toggleAccordion(id :any){
    this.accordionData.forEach((data)=>{
      data.id == id ? (data.isOpen = !data.isOpen) : (data.isOpen = false)
    })
  }

}
