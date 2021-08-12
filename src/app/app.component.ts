import { Component, OnInit } from '@angular/core';

import { PlotData, PlotLayout } from '@wm-fe/ngx-plotly';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  plotData!: Array<PlotData>;
  plotLayout: PlotLayout = {
    xaxis: {
      range: [0.75, 5.25],
    },
    yaxis: {
      range: [0, 8],
    },
    legend: {
      y: 0.5,
      font: {
        family: 'Arial, sans-serif',
        size: 20,
        color: 'grey',
      },
    },
    title: 'Data Labels on the Plot',
  };

  ngOnInit() {
    const trace1: PlotData = {
      x: [1, 2, 3, 4, 5],
      y: [1, 6, 3, 6, 1],
      mode: 'text+markers',
      type: 'scatter',
      name: 'Team A',
      text: ['A-1', 'A-2', 'A-3', 'A-4', 'A-5'],
      textposition: 'top center',
      textfont: {
        family: 'Raleway, sans-serif',
      },
      marker: { size: 12 },
    };

    const trace2: PlotData = {
      x: [1.5, 2.5, 3.5, 4.5, 5.5],
      y: [4, 1, 7, 1, 4],
      mode: 'text+markers',
      type: 'scatter',
      name: 'Team B',
      text: ['B-a', 'B-b', 'B-c', 'B-d', 'B-e'],
      textfont: {
        family: 'Times New Roman',
      },
      textposition: 'bottom center',
      marker: { size: 12 },
    };

    this.plotData = [trace1, trace2];
  }
}
