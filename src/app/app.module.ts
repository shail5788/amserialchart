import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AmChartsModule } from "@amcharts/amcharts3-angular";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, AmChartsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
