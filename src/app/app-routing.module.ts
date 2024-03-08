import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeModule } from "./home-page/home.module";
import { ProjectsModule } from "./projects-page/projects.module";
import { ProjectsComponent } from "./projects-page/projects.component";
import { HomeComponent } from "./home-page/home.component";

const routes: Routes = [
  { path: 'projects', pathMatch: 'full', component: ProjectsComponent },
  { path: 'home', pathMatch: 'full', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    HomeModule,
    ProjectsModule
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {}