import { Component } from '@angular/core';
import { FeaturedRobotsAccordionComponent } from "./featured-robots-accordion/featured-robots-accordion.component";
import { ClubAccessComponent } from "./club-access/club-access.component";
import { FeaturedComponent } from "./featured/featured.component";
import { BannerComponent } from "./banner/banner.component";
import { RobotPrimaryFeaturesComponent } from "./robot-primary-features/robot-primary-features.component";
import { LoaderComponent } from "../../../shared/components/loader/loader.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FeaturedRobotsAccordionComponent, ClubAccessComponent, FeaturedComponent, BannerComponent, RobotPrimaryFeaturesComponent, LoaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
