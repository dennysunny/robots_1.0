import { CommonModule } from '@angular/common';
import { Component, effect, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})
export class BannerComponent {

  baseImageUrl :string = 'assets/images/banner/' 
  imageArray :any[] = [this.baseImageUrl+'Robo-Banner-1.svg', this.baseImageUrl+'Robo-Banner-2.svg']
  visibleImageIndex :number = 0;
  shouldDisplayImageOne :boolean = true;
  interval: any;

  //services
  #router = inject(Router);
  #activatedRoute = inject(ActivatedRoute);

  ngOnInit() {
    //interval to switch between robo images
    this.interval = setInterval(()=>{
      this.visibleImageIndex = (this.visibleImageIndex+1) % this.imageArray.length
    },3000)
  }

  //navigate to robot collections page
  navigateToRobotCollections(){
    this.#router.navigate(['collections'],{relativeTo: this.#activatedRoute})
  }

  //clear interval on component unmount
  ngOnDestroy() {
    if(this.interval){
      clearInterval(this.interval)
    }
  }
  
}
