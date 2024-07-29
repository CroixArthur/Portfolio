import { NgModule } from "@angular/core";
import { ProjectsComponent } from "./projects.component";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { ProjectCardComponent } from "./project-card.component";
import {
  featherHelpCircle,
  featherXCircle,
  featherChevronUp
} from "@ng-icons/feather-icons";
import { NgIconsModule } from "@ng-icons/core";
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  declarations: [
    ProjectsComponent,
    ProjectCardComponent
  ],
  exports: [ProjectCardComponent],
  imports: [
    FormsModule,
    CommonModule,
    NgIconsModule.withIcons({
      featherXCircle,
      featherHelpCircle,
      featherChevronUp
    }),
    TranslateModule
  ]
})
export class ProjectsModule {}