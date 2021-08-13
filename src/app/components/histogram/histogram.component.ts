import { Component, OnInit } from '@angular/core';
import { PlotData } from '@wm-fe/ngx-plotly';

@Component({
  selector: 'app-histogram',
  templateUrl: './histogram.component.html',
  styleUrls: ['./histogram.component.scss'],
})
export class HistogramComponent implements OnInit {
  plotData!: Array<PlotData>;

  constructor() {}

  ngOnInit(): void {
    const x = [];
    for (let i = 0; i < 500; i++) {
      x[i] = Math.random();
    }

    const trace: PlotData = {
      x: x,
      type: 'histogram',
    };

    this.plotData = [trace];
  }
}
