import { Component, Input } from "@angular/core";
import { Project } from "../models/project.model";
import { TranslateModule } from "@ngx-translate/core";

@Component({
  selector: 'project-card',
  template: `
    <div
      class="h-full dark:bg-gray-700 bg-gray-300 dark:bg-opacity-70 rounded-lg p-4 flex flex-col"
      [ngClass]="{ 'opacity-50 pointer-events-none': matchingTechnos.length == 0 && selectedTechnos.length > 0 }"
    >
      <div class="w-full flex justify-between"><h2 class="mb-2">{{ project.name | translate }}</h2><p *ngIf="project.context" class="text-gray-600 dark:text-neutral-400 text-end">{{ project.context | translate }}</p></div>
      <p class="whitespace-pre-wrap h-full">{{ project.content | translate }}</p>
      <p *ngIf="project.goal" class="text-lg font-bold mt-4">{{ 'OBJECTIVE' | translate }}: {{ project.goal | translate }}</p>
      <div class="self-end flex flex-wrap justify-end items-end pt-2"><span
        *ngFor="let tech of project.techs"
        class="mr-2 font-bold whitespace-nowrap"
        [ngClass]="{
          'text-green-600': matchingTechnos.includes(tech)
        }"
      >{{ tech | translate }}</span></div>
    </div>
  `
})
export class ProjectCardComponent {
  matchingTechnos: string[] = [];
  private _selectedTechnos: string[] = [];

  @Input({ required: true }) project!: Project;
  @Input() set selectedTechnos(selectedTechnos: string[]) {
    this._selectedTechnos = selectedTechnos;
    this.matchingTechnos = this.selectedTechnos.filter(techno => this.project.techs.includes(techno))
  }
  get selectedTechnos(): string[] { return this._selectedTechnos };
}