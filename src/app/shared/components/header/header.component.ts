import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  baseHeaderUrl :string = 'assets/images/header/Logo-header.svg'
  headerRoutes = [
    {id: 1, name: 'About', url: '/about'},
    {id: 2, name: 'Community', url: '/community'},
    {id: 3, name: 'Collection', url: '/collections'}
  ]

  //Services
  #router = inject(Router);

  navigateToSelectedRoute(path :string){
    this.#router.navigate([`robots/${path}`])
  }

}