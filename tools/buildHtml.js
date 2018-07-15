import fs from 'fs';
import cheerio from 'cheerio';
import colors from 'colors';

/* eslint-disable no-console */

fs.readFile('src/index.html', 'utf8', (err, markup) => {
  if(err) {
    return console.log(err).bold.red;
  }

  const $ = cheerio.load(markup);
  // since a separate spreadsheet is only utilised for the production build
  $('head').prepend('<link rel="stylesheet" href="index.css">');

  fs.writeFile('dist/index.html', $.html(), 'utf8', (err) => {
    if(err) {
      return console.log(err).bold.red;
    }
    console.log('index.html written to /dist'.green);
  });
});
