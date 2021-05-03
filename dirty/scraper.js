const axios = require("axios");
const cheerio = require("cheerio");

const URL = "https://www.zipdatamaps.com/monroe-ny-county-zipcodes"

async function szip() {
  const { data } = await axios.get(URL);
  const $ = cheerio.load(data);

	$('html body div.container div.row.clearfix div.col-md-12.column table.table.table-striped.table-bordered.table-hover.table-condensed tbody tr td table tbody tr').slice(1).each((index, ele) =>{

		const $zip = $(ele)
		zip = $zip.text()
		process.stdout.write(zip+ ',');
	})

}

szip();


