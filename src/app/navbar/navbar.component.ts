import { Component, OnInit, signal } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';
import { CommonModule } from '@angular/common';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { featherChevronUp } from '@ng-icons/feather-icons';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    AppRoutingModule,
    CommonModule,
    NgIconComponent
  ],
  providers: [provideIcons({ featherChevronUp })],
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {
  displayScrollUp = signal(false);
  mainContainerElement = document.getElementsByClassName("main-container")[0];

  ngOnInit(): void {
    this.mainContainerElement = document.getElementsByClassName("main-container")[0];
    this.mainContainerElement.addEventListener("scroll", (e: Event) => this.shouldDisplayScrollUp((e.target as HTMLElement).scrollTop));
  }

  shouldDisplayScrollUp = (top: number) => top > 1080
    ? this.displayScrollUp() == false ? this.displayScrollUp.set(true) : {}
    : this.displayScrollUp() == true ? this.displayScrollUp.set(false) : {};

  scrollToTop = () => this.mainContainerElement.scrollTo({ top: 0, behavior: "smooth" })
}
