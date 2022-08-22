const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://exercisedb.p.rapidapi.com/exercises",
	"method": "GET",
	"headers": {
		"X-RapidAPI-Key": "1f1f7825famsh41c860c09108d3bp124bbfjsn428de2b57b0f",
		"X-RapidAPI-Host": "exercisedb.p.rapidapi.com"
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
});