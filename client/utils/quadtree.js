import { Meteor } from 'meteor/meteor';
import { HTTP } from 'meteor/http';
import { quadtree } from 'd3-quadtree';
import { parseString } from 'xml2js';

const stationsURL = 'https://api.bart.gov/api/stn.aspx';

const parseOptions = {
    explicitArray: false,
    ignoreAttrs: true,
    mergeAttrs: true,
};

export default function() {
    const promise = new Promise(function(resolve, reject) {
      HTTP.get(stationsURL, {
        params: {
          key: Meteor.settings.public.bartAPIKey,
          cmd: "stns",
        }
      }, (error, response) => {

        if (error) {
          reject("bart went wrong", error);
        } else {
          parseString(response.content, parseOptions, (err, result) => {

            if (err) {
              reject("parseString went wrong", err);
            } else {
              const stationsTree = quadtree()
              .x(d => parseFloat(d['gtfs_latitude']))
              .y(d => parseFloat(d['gtfs_longitude']))
              .addAll(result.root.stations.station);
              resolve(stationsTree);
            }
          });
        }
      });
    });
    
    return promise;
}
