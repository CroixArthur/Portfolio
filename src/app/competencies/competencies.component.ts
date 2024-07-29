import { Component, Input } from '@angular/core';
import { Competency } from '../models/competency.model';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'competencies',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule
  ],
  template: `
    <div class="flex first:mb-8">
      <h3 class="text-end pr-4 border-r border-r-[gray] mr-4 w-28">{{ title | translate }}</h3>
      <div class="flex flex-col flex-wrap h-full gap-2">
        <div
          *ngFor="let competency of competencies"
          class="flex items-center w-60"
        >
          <p class="flex-1">{{competency.name}}</p>
          <div class="bg-gray-200 dark:bg-gray-700 h-6 w-full flex-[2] rounded-md overflow-hidden" title="{{competency.percentage}}%"><div ngClass="bg-green-600 h-full" style="width: {{competency.percentage}}%;"></div></div>
        </div>
      </div>
    </div>
  `
})
export class CompetenciesComponent {
  @Input({ required: true }) title!: string;
  @Input() competencies: Competency[] = [];
}
