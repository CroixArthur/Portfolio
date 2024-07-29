import { NgModule } from "@angular/core";
import { NgIconsModule } from '@ng-icons/core';
import { featherMapPin, featherClock } from "@ng-icons/feather-icons";
import { HistoryListComponent } from "./history-list.component";
import { HistoryListItemComponent } from "./history-list-item.component";
import { CommonModule } from "@angular/common";
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  declarations: [
    HistoryListComponent,
    HistoryListItemComponent
  ],
  exports: [HistoryListComponent],
  imports: [
    CommonModule,
    NgIconsModule.withIcons({
      featherMapPin,
      featherClock
    }),
    TranslateModule
  ]
})
export class HistoryListModule {}