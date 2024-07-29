import { NgModule } from "@angular/core";
import { HomeComponent } from "./home.component";
import { HistoryListModule } from "../history-list/history-list.module";
import { NgIconsModule } from "@ng-icons/core";
import {
  featherMail,
  featherLinkedin,
  featherPhone
} from "@ng-icons/feather-icons";
import { CommonModule } from "@angular/common";
import { CompetenciesComponent } from "../competencies/competencies.component";
import { RecommendationComponent } from "../recommendation/recommendation.component";
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  declarations: [HomeComponent],
  exports: [HomeComponent],
  imports: [
    CommonModule,
    HistoryListModule,
    CompetenciesComponent,
    RecommendationComponent,
    NgIconsModule.withIcons({
      featherMail,
      featherLinkedin,
      featherPhone
    }),
    TranslateModule
  ]
})
export class HomeModule {}