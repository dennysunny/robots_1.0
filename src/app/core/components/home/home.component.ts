import { Component } from '@angular/core';
import { FeaturedRobotsAccordionComponent } from "./featured-robots-accordion/featured-robots-accordion.component";
import { ClubAccessComponent } from "./club-access/club-access.component";
import { FeaturedComponent } from "./featured/featured.component";
import { BannerComponent } from "./banner/banner.component";
import { RobotPrimaryFeaturesComponent } from "./robot-primary-features/robot-primary-features.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FeaturedRobotsAccordionComponent, ClubAccessComponent, FeaturedComponent, BannerComponent, RobotPrimaryFeaturesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
