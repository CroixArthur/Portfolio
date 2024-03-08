import { Component, Input } from "@angular/core";
import { Content } from "../models/content.model";

@Component({
    selector: 'history-list-item',
    template: `
      <li class="flex mb-4">
        <div class="mr-2">
          <div class="bg-gray-500 w-[18px] h-[18px] mt-[5px] rounded-full"
            [class]="{
              'bg-green-500': isActual(),
              'dark:bg-gray-300': !isActual()
            }"
          ></div>
        </div>
        <div class="w-full">
          <div class="flex justify-between">
            <h3 [class]="{
                '!text-green-500': isActual()
              }"
              >{{content.title}}<span class=" font-normal text-base">{{isActual() ? " actuel" : ""}}</span></h3>
            <img *ngIf="content.logoPath" [src]="content.logoPath" class="max-w-14 max-h-14 object-cover"/>
          </div>
          <div class="flex gap-1 md:gap-4 md:flex-row flex-col text-gray-500 dark:text-gray-400">
            <div class="flex gap-2 items-center">
              <ng-icon name="featherClock" class="!overflow-visible"></ng-icon>
              <p class="font-medium">{{getDates()}}</p>
            </div>
            <div class="flex gap-2 items-center">
              <ng-icon name="featherMapPin" class="!overflow-visible"></ng-icon>
              <p class="font-medium">{{content.place}}</p>
            </div>
          </div>
          <p class="whitespace-pre-wrap">{{content.content}}</p>
          <p *ngIf="content.competencies" class="mt-2"><span class="text-gray-500 dark:text-gray-400 font-bold">Compétences:</span> {{content.competencies}}</p>
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