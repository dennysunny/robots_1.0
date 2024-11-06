import { CurrencyPipe } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-robot-profile-card',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './robot-profile-card.component.html',
  styleUrl: './robot-profile-card.component.scss'
})
export class RobotProfileCardComponent {

  robotAvatar = input<any>('')
  robotName = input<any>('')
  robotBriefInfo = input<any>('')
  robotPrice = input<any>('')

}
