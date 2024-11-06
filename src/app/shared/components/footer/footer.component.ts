import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  siteInfoSections = [
    {
      id: 1,
      header : 'Sitemap',
      contents : ['About', 'Community', 'Collection']
    },
    {
      id: 2,
      header : 'Legal',
      contents : ['Terms of Service', 'Privacy Policy', 'Cookies Policy']
    },
  ];

  baseImageUrl :string = 'assets/images/footer/'

  socialIcons = [
    {name : 'twitterIcon', url: this.baseImageUrl+'social-icons/twitter-icon.svg'},
    {name : 'instagramIcon', url :  this.baseImageUrl+'social-icons/instagram-icon.svg'},
    {name : 'facebookIcon', url :  this.baseImageUrl+'social-icons/facebook-icon.svg'}
  ]
  userIcon :string = this.baseImageUrl+'user-icon.svg'
  footerLogo :string = this.baseImageUrl+'logo-footer.svg'


}
