import { navLinks } from './index';
import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',

})
export class HeaderComponent implements OnInit{

  links = navLinks;
  isActive: boolean | undefined;

  isMenuVisible = false;
  isSticky = false;


  constructor(private renderer: Renderer2,
    private el: ElementRef,
  private router: Router, private route: ActivatedRoute) { }


  ngOnInit(): void {
   this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        setTimeout(() => {
          this.updateActiveLink();
        }, 0);
      }
    });
  }


   @HostListener('document:click', ['$event'])
  handleDocumentClick(event: MouseEvent): void {
    const isClickInsideMenu = this.isClickInsideMenu(event);

    if (this.isMenuVisible && !isClickInsideMenu) {
      this.toggleMenu();
    }
  }

  toggleMenu(): void {
    console.log('Menu toggled');
    this.isMenuVisible = !this.isMenuVisible;
  }

  private isClickInsideMenu(event: MouseEvent): any {
     const menuButton = document.getElementById('menuButton');

    return menuButton && (menuButton.contains(event.target as Node) || event.target === menuButton);
  }

  handleLinkClick(clickedLink: any): void {
    this.links.forEach(link => link.isActive = false);
    clickedLink.isActive = true;

    // Store the active link in local storage
    localStorage.setItem('activeLink', clickedLink.path);

    // Navigate to the clicked link
    this.router.navigate([clickedLink.path]);
  }

  private updateActiveLink(): void {
    const currentPath = this.router.url;
    const activeLink = this.links.find(link => link.path === currentPath);

    if (activeLink) {
      this.links.forEach(link => link.isActive = false);
      activeLink.isActive = true;
    }
  }


@HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    this.isSticky = scrollTop > 80;
  }
 }
