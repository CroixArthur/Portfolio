import { Component, Input } from "@angular/core";
import { Project } from "../models/project.model";

@Component({
  selector: 'project-card',
  template: `
    <div
      class="h-full dark:bg-gray-700 bg-gray-300 dark:bg-opacity-70 rounded-lg p-4 flex flex-col"
      [ngClass]="{ 'opacity-50 pointer-events-none': matchingTechnos.length == 0 && selectedTechnos.length > 0 }"
    >
      <div class="w-full flex justify-between"><h2 class="mb-2">{{project.name}}</h2><p *ngIf="project.context" class="text-gray-600 dark:text-neutral-400 text-end">{{project.context}}</p></div>
      <p class="whitespace-pre-wrap h-full">{{project.content}}</p>
      <p *ngIf="project.goal" class="text-lg font-bold mt-4">Objectif: {{project.goal}}</p>
      <div class="self-end flex flex-wrap justify-end items-end pt-2"><span
        *ngFor="let tech of project.techs"
        class="mr-2 font-bold whitespace-nowrap"
        [ngClass]="{
          'text-green-600': matchingTechnos.includes(tech)
        }"
      >{{tech}}</span></div>
    </div>
  `
})
export class ProjectCardComponent {
  matchingTechnos: String[] = [];
  private _selectedTechnos: String[] = [];

  @Input({ required: true }) project!: Project;
  @Input() set selectedTechnos(selectedTechnos: String[]) {
    this._selectedTechnos = selectedTechnos;
    this.matchingTechnos = this.selectedTechnos.filter(techno => this.project.techs.includes(techno))
  }
  get selectedTechnos(): String[] { return this._selectedTechnos };
}