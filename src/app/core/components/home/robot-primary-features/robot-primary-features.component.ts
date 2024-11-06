import { Component } from '@angular/core';

@Component({
  selector: 'app-robot-primary-features',
  standalone: true,
  imports: [],
  templateUrl: './robot-primary-features.component.html',
  styleUrl: './robot-primary-features.component.scss'
})
export class RobotPrimaryFeaturesComponent {

  baseImageUrl :string = 'assets/images/banner-description/'
  featuresData :any[] = [
    {
      id:1,
      title: 'Unique Creations',
      imageUrl: this.baseImageUrl+'Icon-1.svg',
      description: 'Each golden Robot is a one-of-a-kind masterpiece, oreated with precision and care by the robot artist.'
    },
    {
      id:2,
      title: 'Cutting-Edge Technology',
      imageUrl: this.baseImageUrl+'Icon-1.svg',
      description: 'The artist combines artificial intelligenoo and robotios to produce art that blure the line between man and machine'
    },
    {
      id:3,
      title: 'Exclusive Membership',
      imageUrl: this.baseImageUrl+'Icon-2.svg',
      description: 'Eaoh collector gains access to an exclusive club, enjoying unique benefits and early previews of upcoming collections. has context menu'
    }
  ]
}
