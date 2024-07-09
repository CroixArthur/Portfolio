import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeModule } from "./home-page/home.module";
import { ProjectsModule } from "./projects-page/projects.module";
import { ProjectsComponent } from "./projects-page/projects.component";
import { HomeComponent } from "./home-page/home.component";

const routes: Routes = [
  { path: 'projects', pathMatch: 'full', component: ProjectsComponent },
  { path: '', pathMatch: 'full', component: HomeComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      anchorScrolling: 'enabled'
    }),
    HomeModule,
    ProjectsModule
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {}