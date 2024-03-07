import { Component } from '@angular/core';

declare function globalInit(): any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  darkMode = false;

  onSwitchDark() {
    if (this.darkMode) {
      document.getElementsByTagName('body')[0].classList.add('dark');
      localStorage['theme'] = 'dark'
    } else {
      document.getElementsByTagName('body')[0].classList.remove('dark');
      localStorage['theme'] = 'light'
    }
    globalInit();
  }
}
