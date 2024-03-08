import { NgModule } from "@angular/core";
import { HomeComponent } from "./home.component";
import { HistoryListModule } from "../history-list/history-list.module";
import { NgIconsModule } from "@ng-icons/core";
import {
  featherMapPin,
  featherMail,
  featherLinkedin,
  featherPhone
} from "@ng-icons/feather-icons";
import { CommonModule } from "@angular/common";
import { CompetenciesComponent } from "../competencies/competencies.component";

@NgModule({
  declarations: [HomeComponent],
  exports: [HomeComponent],
  imports: [
    CommonModule,
    HistoryListModule,
    CompetenciesComponent,
    NgIconsModule.withIcons({
      featherMapPin,
      featherMail,
      featherLinkedin,
      featherPhone
    })
  ]
})
export class HomeModule {}