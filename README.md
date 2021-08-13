# Usage of ngx-plotly
## Dependencies
The library relies on the following peerDependencies. Other versions might work but no gurantee for that:

```
    "@angular/common": "^10.1.1",
    "@angular/core": "^10.1.1",
    "@angular/material": "^10.2.0",
    "@angular/cdk": "^10.2.0",
    "@ngrx/component-store": "10.1.0",
    "@types/plotly.js": "1.50.18",
    "plotly.js": "^1.55.2",
    "bootstrap": "4.5.2"
```

## Usage
All the functionality has to be wrapped into `<app-plot-container>`. Within this container you can put different components from the libarary. Here is an example with (almost) all the options you have. I will elaborate on the different components later.

```
<lib-plot-container>
        <lib-plot
          [config]="plotConfig"
          [layout]="plotLayout"
          [data]="plotData"
          [tags]="taggedAreas"
          (updateShapes)="updateShapes($event)"
          (selectShape)="selectShape($event)"
          (deleteShapes)="deleteShapes($event)"
          (zoom)="loadVisualizationData($event)"
          [lazyLoading]="true"
        ></lib-plot>
        <lib-action-bar
          [singleAxisTooltip]="'datasets.details.tagging.toolbar.btn_plot_normal' | translate"
          [multiAxisTooltip]="'datasets.details.tagging.toolbar.btn_plot_multiple_axes' | translate"
          [zoomTooltip]="'datasets.details.tagging.toolbar.btn_zoom_mode' | translate"
          [rangeSelectTooltip]="'datasets.details.tagging.toolbar.btn_horizontal_mode' | translate"
          [boxSelectTooltip]="'datasets.details.tagging.toolbar.btn_horizontal_mode' | translate"
          [deleteTooltip]="'datasets.details.tagging.toolbar.btn_delete_tag' | translate"
          [selectedDisplayType]="plotDisplayType"
          [config]="{
            chartType: { single: true, multi: true },
            chartDisplayType: { lines: true, markers: true, linesmarkers: true },
            chartActions: { zoom: true, rangeSelect: true, boxSelect: true, delete: true }
          }"
        ></lib-action-bar>
        <lib-load-data
          [allListElements]="features"
          [chipElements]="filterFeaturesSelected"
          (load)="loadFeatures($event)"
          [scaleDataText]="'datasets.details.tagging.toolbar.toggle_scaled_data_label' | translate"
          [scaleDataTooltip]="'datasets.details.tagging.toolbar.toggle_scaled_data_tooltip' | translate"
          [label]="'datasets.details.tagging.filter.placeholder' | translate"
          [loadButtonText]="'datasets.details.tagging.filter.btn_load_data' | translate"
        ></lib-load-data>
        <lib-status-bar [visibleObsText]="'shared.plot.visible_obs' | translate" [visibleObsTooltip]="visibleObsTooltip" [visibleObsPercent]="visibleObsPercent"></lib-status-bar>
      </lib-plot-container>
```

### `<lib-plot>` component
The `<lib-plot>` component is the core unit of the charting library.

You have to pass in at least the `[data]` property with an array of type `PlotData`. Check out plotly.js homepage to find out what you can pass in there.

The `[layout]` can define various things for the look and feel of the plot. This also corresponds to the layouts which plotly itself defines. The type for this is `PlotLayout`.

With `[config]` you can enable or disable things like the plotly logo, links to the homepage on the chart and so on.

### `<lib-action-bar>` component
The `<lib-action-bar>` component provides wrapper functionality for things you can do with the plotly chart. You can configure which button you want to display and set tooltips for the different buttons.