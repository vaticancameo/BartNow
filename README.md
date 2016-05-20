# BartNow

Small app that shows you the upcoming BART times of the nearest station in the SF Bay Area

you'll need to get an API key from developers.bart.gov
and create a `settings.json` file in the root folder with the following:

```
{
  "public": {
    "bartAPIKey": "YOUR_BART_API_KEY"
  }
}
```

you also need to have Meteor installed

to start the app on localhost:3000, run

`npm install`

`npm run settings`
