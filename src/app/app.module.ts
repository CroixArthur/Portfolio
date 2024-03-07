import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { RouterOutlet } from "@angular/router";

@NgModule({
  imports: [
    BrowserModule,
    NavbarComponent,
    RouterOutlet
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}