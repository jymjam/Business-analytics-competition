const axios = require("axios");
const cheerio = require("cheerio");
const fs = require('fs')

const URL = "https://www.zipdatamaps.com/"
var zipCodes = [
14414,14416,14420,14428,14445,14450,14464,14467,14468,14470,14472,
14502,14506,14514,14519,14526,14534,14543,14546,14559,14564,14580,
14586,14603,14604,14605,14606,14607,14608,14609,14610,14611,14612,
14613,14614,14615,14616,14617,14618,14619,14620,14621,14622,14623,
14624,14625,14626,14627,14642,14430,14511,14515,14602,14692,14638,
14639,14643,14644,14646,14647,14649,14650,14651,14652,14653,14694
]

ipCodes = [
14414,14416
]
/*
fs.readFile("zip.csv", 'utf-8', (err, data) => {

    if(err){
        console.error(err);
    }

    zipCodes = data.split(',')
    console.log(zipCodes);
})
*/

const getAttributes = async (zip) => {
    zipAttribs = {}
    console.log(zip);

    let { data } = await axios.get(`https://www.zipdatamaps.com/${zip}`)
    const $ = cheerio.load(data)

    for (i = 0; i <= 10; i++){
        $(`div.col-md-4:nth-child(4) > table:nth-child(2) > tbody:nth-child(1) > 
           tr:nth-child(${i}) > td:nth-child(1)`).text().includes("Population:") ?
           zipAttribs.pop =  $(`div.col-md-4:nth-child(4) > table:nth-child(2) > tbody:nth-child(1) > 
           tr:nth-child(${i}) > td:nth-child(2)`).text() : console.log('not found')
    }

    console.log(zipAttribs);
}

ipCodes.forEach((val, index)=>{
    getAttributes(val)
})