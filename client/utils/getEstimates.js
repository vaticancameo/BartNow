import { Meteor } from 'meteor/meteor';
import { HTTP } from 'meteor/http';
import { parseString } from 'xml2js';

const estimatesURL = 'https://api.bart.gov/api/etd.aspx';

const parseOptions = {
    explicitArray: false,
    ignoreAttrs: true,
    mergeAttrs: true,
};

export default function getEstimates(abbr) {
  const promise = new Promise(function(resolve, reject) {
    HTTP.get(estimatesURL, {
      params: {
        orig: abbr,
        key: Meteor.settings.public.bartAPIKey,
        cmd: 'etd'
      }
    }, (error, response) => {
        if (error) {
          reject(error);
        } else {
          parseString(response.content, parseOptions, (err, result) => {
            if (err) {
              reject(err)
            } else {
              resolve(result.root.station.etd);
            }
          });
        }
      }
    );
  });
  return promise;
}
