import { Component, Input } from "@angular/core";
import { Content } from "../models/content.model";

@Component({
  selector: 'history-list',
  template: `
    <div class="flex flex-col">
      <h2 class="flex w-full mb-4">{{title}}</h2>
      <ul class="relative">
        <li class="absolute h-full bg-gray-500 w-[3px] ml-[8px] -z-10"></li>
        <li *ngFor="let content of contents"><history-list-item [content]="content"></history-list-item></li>
      </ul>
    </div>
  `
})
export class HistoryListComponent {
    @Input({ required: true }) title!: String;
    @Input() contents: Content[] = [];
}