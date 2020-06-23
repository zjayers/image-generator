const fs = require('fs');
const axios = require('axios');
const request = require('request');

const getImages = async (numberToDownload) => {
  for (let i = 1; i <= numberToDownload; i++) {
    const results = await axios.get('https://randomuser.me/api/');
    const uri = results.data.results[0].picture.medium;
    request(uri).pipe(fs.createWriteStream(`./img/${i}.png`));
  }
};

getImages(100);
