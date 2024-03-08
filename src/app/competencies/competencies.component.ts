import { Component, Input } from '@angular/core';
import { Competency } from '../models/competency.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'competencies',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="w-60 flex flex-col gap-2">
      <h3 class="text-center">{{title}}</h3>
      <div
        *ngFor="let competency of competencies"
        class="flex items-center"
      >
        <p class="flex-1">{{competency.name}}</p>
        <div class="bg-gray-200 dark:bg-gray-700 h-6 w-full flex-[2] rounded-md overflow-hidden" title="{{competency.percentage}}%"><div ngClass="bg-green-600 h-full" style="width: {{competency.percentage}}%;"></div></div>
      </div>
    </div>
  `
})
export class CompetenciesComponent {
  @Input({ required: true }) title!: String;
  @Input() competencies: Competency[] = [];
}
