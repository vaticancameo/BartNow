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

export const quadtreePromise = new Promise(function(resolve, reject) {
  HTTP.get(stationsURL, {
    params: {
      key: Meteor.settings.public.bartAPIKey,
      cmd: "stns",
    }
  }, (error, response) => {

    if (error) {
      console.log(error);
      reject('bart went wrong');
    } else {
      parseString(response.content, parseOptions, (err, result) => {

        if (err) {
          console.log(err);
          reject('parseString went wrong');
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

// refactor later for more modularity
// function buildTree(data, x_accessor, y_accessor) {
//   const tree =  quadtree()
//     .x((item) => {return parseFloat(item[x_accessor])})
//     .y((item) => {return parseFloat(item[y_accessor])})
//     .addAll(data);
//   return tree;
// }
