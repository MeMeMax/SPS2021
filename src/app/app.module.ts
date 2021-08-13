import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { PlotModule } from '@wm-fe/ngx-plotly';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LineChartComponent } from './components/line-chart/line-chart.component';

@NgModule({
  declarations: [AppComponent, LineChartComponent],
  imports: [BrowserModule, AppRoutingModule, PlotModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
