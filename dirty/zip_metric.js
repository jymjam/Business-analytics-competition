//const axios = require("axios");
//const cheerio = require("cheerio");
const fs = require('fs')

const URL = "https://www.zipdatamaps.com/"
var zipCodes 
fs.readFile("zip.csv", 'utf-8', (err, data) => {

    if(err){
        console.error(err);
    }

    zipCodes = data.split(',')
})

console.log(zipCodes);