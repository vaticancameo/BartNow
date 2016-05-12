// import { Meteor } from 'meteor/meteor'
// import fs from 'fs';
// import path from 'path';
// import { HTTP } from 'meteor/http';
// import { quadtree } from 'd3-quadtree';
// import { parseString } from 'xml2js';
//
// const estimatesURL = 'http://api.bart.gov/api/etd.aspx';
// const stationsURL = 'http://api.bart.gov/api/stn.aspx';
//
// const parseOptions = {
//     explicitArray: false,
//     ignoreAttrs: true,
//     mergeAttrs: true,
// };
//
// Meteor.startup(() => {
//   buildQuadtree((tree) => console.log(tree));
//
// });
//
// export function buildQuadtree(cb) {
//   HTTP.get(stationsURL, {
//     params: {
//       key: Meteor.settings.bartAPIKey,
//       cmd: "stns",
//     }
//   }, (error, response) => {
//     if (error) {
//       console.log(error);
//       return;
//     }
//     parseString(response.content, parseOptions, (err, result) => {
//       if (err) {console.log(err)}
//       const stations = result.root.stations.station;
//       const stationsTree = quadtree()
//         .x(d => parseFloat(d['gtfs_latitude']))
//         .y(d => parseFloat(d['gtfs_longitude']))
//         .addAll(stations);
//       cb(JSON.stringify(stationsTree));
//     });
//   });
// }
