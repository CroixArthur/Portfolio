import { Component, Input } from "@angular/core";
import { Content } from "../models/content.model";
import { TranslateService } from "@ngx-translate/core";

@Component({
    selector: 'history-list-item',
    template: `
      <div class="flex mb-4">
        <div class="mr-2">
          <div class="bg-gray-500 w-[18px] h-[18px] mt-[5px] rounded-full"
            [class]="{
              'bg-green': isActual(),
              'dark:bg-green-dark': isActual(),
              'dark:bg-gray-300': !isActual()
            }"
          ></div>
        </div>
        <div class="w-full">
          <div class="flex justify-between">
            <h3 [ngClass]="{
                '!text-green': isActual(),
                'dark:!text-green-dark': isActual()
              }"
              >{{ (content.title || '') | translate }}<span class="font-normal text-base ml-2" [ngClass]="{ 'hidden': !isActual() }">{{ "ACTUAL" | translate }}</span></h3>
          </div>
          <div class="flex gap-1 md:gap-4 md:flex-row flex-col text-gray-500 dark:text-gray-400">
            <div class="flex gap-2 items-center">
              <ng-icon name="featherClock" class="!overflow-visible"></ng-icon>
              <ng-container *ngIf="getDates() as dates"><p class="font-medium">{{ dates.key | translate: dates.params }}</p></ng-container>
            </div>
            <div class="flex gap-2 items-center">
              <ng-icon name="featherMapPin" class="!overflow-visible"></ng-icon>
              <p class="font-medium">{{content.place}}</p>
            </div>
          </div>
          <p class="whitespace-pre-wrap" [innerHTML]="(content.content ?? '') | translate"></p>
          <p *ngIf="content.competencies" class="mt-2"><span class="text-gray-500 dark:text-gray-400 font-bold">{{ 'COMPETENCIES' | translate}}:</span> {{content.competencies}}</p>
        </div>
      </div>
    `
})
export class HistoryListItemComponent {
  @Input({ required: true }) content!: Content;

  constructor(private translate: TranslateService) {}

  getDates() {
    const months = [
      "DATE.JANUARY",
      "DATE.FEBRUARY",
      "DATE.MARCH",
      "DATE.APRIL",
      "DATE.MAY",
      "DATE.JUNE",
      "DATE.JULY",
      "DATE.AUGUST",
      "DATE.SEPTEMBER",
      "DATE.OCTOBER",
      "DATE.NOVEMBER",
      "DATE.DECEMBER"
    ];

    return this.content.endDate
      ? {
        key: "DATE.FROMTO",
        params: {
          startMonth: this.translate.instant(months[this.content.startDate.getMonth()]),
          startYear: this.content.startDate.getFullYear(),
          endMonth: this.translate.instant(months[this.content.endDate.getMonth()]),
          endYear: this.content.endDate.getFullYear()
        }
      } : {
        key: "DATE.SINCE",
        params: {
          month: this.translate.instant(months[this.content.startDate.getMonth()]),
          year: this.content.startDate.getFullYear()
        }
      };
  }

  isActual = () => !this.content.endDate;
}