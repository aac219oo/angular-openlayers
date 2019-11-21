import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ';
import ZoomToExtent from 'ol/control/ZoomToExtent';

import { fromLonLat } from 'ol/proj';
import { defaults as defaultControls } from 'ol/control';

/**
 * Geo.
 */
export class Geo {

  /* Map. */
  public readonly map: Map;

  /**
   * Initialise the map.
   * @param view View with initial center and zoom.
   */
  constructor(view: { zoom: number; center: [number, number]; } = { zoom: 2, center: [0, 0] }) {
    this.map = new Map({
      target: 'map',
      layers: [
        new TileLayer({
          source: new XYZ({
            url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          })
        })
      ],
      view: new View({
        center: fromLonLat(view.center),
        zoom: view.zoom
      }),
      controls: defaultControls().extend([
        new ZoomToExtent({
          extent: [
            813079.7791264898, 5929220.284081122,
            848966.9639063801, 5936863.986909639
          ]
        })
      ])
    });
  }
}
