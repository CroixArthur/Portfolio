import { Component, Input } from "@angular/core";
import { Content } from "../models/content.model";

@Component({
    selector: 'history-list-item',
    template: `
      <li class="flex mb-4">
        <div class="mr-2">
          <div class="bg-gray-500 w-[18px] h-[18px] mt-[5px] rounded-full"
            [class]="{
              'bg-green-500': isActual()
            }"
          ></div>
        </div>
        <div class="flex-col">
          <div class="flex">
            <h3 [class]="{
              'text-green-500': isActual()
            }">{{content.title}}</h3>
            <p *ngIf="isActual()" class="flex ml-2 text-green-500 items-center">actuel</p>
          </div>
          <div class="flex gap-1 md:gap-4 md:flex-row flex-col">
            <div class="flex gap-2 items-center">
              <ng-icon name="featherClock" class="text-gray-500 !overflow-visible"></ng-icon>
              <p class="text-gray-500 font-medium">{{getDates()}}</p>
            </div>
            <div class="flex gap-2 items-center">
              <ng-icon name="featherMapPin" class="text-gray-500 !overflow-visible"></ng-icon>
              <p class="text-gray-500 font-medium">{{content.place}}</p>
            </div>
          </div>
          <p class="whitespace-pre-wrap">{{content.content}}</p>
          <p *ngIf="content.competencies"><span class="text-gray-500 font-bold">Compétences:</span> {{content.competencies}}</p>
        </div>
      </li>
    `
})
export class HistoryListItemComponent {
  @Input({ required: true }) content!: Content;

  getDates() {
    const months = [
      "Janvier",
      "Février",
      "Mars",
      "Avril",
      "Mai",
      "Juin",
      "Juillet",
      "Août",
      "Septembre",
      "Octobre",
      "Novembre",
      "Décembre"
    ];
    const startDate = months[this.content.startDate.getMonth()] + ' ' + this.content.startDate.getFullYear();
    const endDate = this.content.endDate
      ? months[this.content.endDate.getMonth()] + ' ' + this.content.endDate.getFullYear()
      : null;

    return this.content.endDate
      ? `De ${startDate} à ${endDate}`
      : `Depuis ${startDate}`;
  }

  isActual = () => !this.content.endDate;
}