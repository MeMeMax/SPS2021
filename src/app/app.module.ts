import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { PlotModule } from '@wm-fe/ngx-plotly';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LineChartComponent } from './components/line-chart/line-chart.component';
import { HistogramComponent } from './components/histogram/histogram.component';

@NgModule({
  declarations: [AppComponent, LineChartComponent, HistogramComponent],
  imports: [BrowserModule, AppRoutingModule, PlotModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
