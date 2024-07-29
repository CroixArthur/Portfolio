import { Component, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageOption } from './models/language-option.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  darkMode: boolean;
  languageOptions: LanguageOption[];
  selectedLanguage = signal({} as LanguageOption);

  constructor(private translate: TranslateService) {
    const lang = translate.getBrowserLang();
    // Translations
    translate.setDefaultLang('fr');
    translate.use(lang && lang.match(/en|fr/) ? lang : "fr");
    this.languageOptions = [
      { name: "Français", value: "fr", svgPath: "assets/france-flag.svg" },
      { name: "English", value: "en", svgPath: "assets/united-kingdom-flag.svg" }
    ];
    this.selectedLanguage.set(this.languageOptions.find((x) => x.value == translate.currentLang) ?? this.languageOptions[0]);

    // Dark theme
    this.darkMode = localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
  }

  onSwitchDark() {
    if (this.darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light');
    }
  }

  switchLanguage(language: LanguageOption) {
    this.translate.use(language.value);
    this.selectedLanguage.set(language);
  }
}
