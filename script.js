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

const $input = $('input[type = "text"]')
const $bodyPart = $('#bodyPart')
const $name = $('#name')
const $target = $('#target')
const $equipment = $('#equipment')
const $form = $('form')
let img = $('img')

$form.on('submit', handleGetData);

function handleGetData(event) {
    event.preventDefault()
    userInput = $input.val()

let call=$.ajax(settings).done(function (response) {
    let data= response
    let filter=data.filter(workout => {
        return `${workout.bodyPart}`.toLowerCase().includes(userInput.toLowerCase().trim())
       
    })
    let number = Math.floor(Math.random() * 50)
    console.log(filter);
    $bodyPart.text(filter[number].bodyPart);
    $name.text(filter[number].name);
    $target.text(filter[number].target);
    $equipment.text(filter[number].equipment);
    
    $('main').append(`<img id = "img" src = '${filter[number].gifUrl}'/>`);



});

}
