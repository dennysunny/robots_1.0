import { Component } from '@angular/core';
import { RobotProfileCardComponent } from "../../../../shared/components/robot-profile-card/robot-profile-card.component";

@Component({
  selector: 'app-featured',
  standalone: true,
  imports: [RobotProfileCardComponent],
  templateUrl: './featured.component.html',
  styleUrl: './featured.component.scss'
})
export class FeaturedComponent {

  baseImageUrl :string = 'assets/images/robots/'

  featuredRobotsList :any[] = [
    {
      id: 1,
      name: 'Wealthy D.',
      description: "Wealth isn't everything, but this robot excudes sophistication and calm. A true symbol of opulence.",
      price: '1200',
      avatar: this.baseImageUrl+'Robo-1.svg'
    },
    {
      id: 2,
      name: 'Cerberus D.',
      description: "With three heads and one brain, this robot embodies the mythological guardian with a quirky twist.",
      price: '920',
      avatar: this.baseImageUrl+'Robo-2.svg'
    },
    {
      id: 3,
      name: 'Ninja D.',
      description: "Stealthy and skilled, this Robot is a master of disguise. An intriguing addition to any collection.",
      price: '850',
      avatar: this.baseImageUrl+'Icon-3.svg'
    },
  ]

}
