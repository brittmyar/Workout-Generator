// Connecting API and setting to variable
const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://exercisedb.p.rapidapi.com/exercises",
	"method": "GET",
	"headers": {
		"X-RapidAPI-Key": "7ba91b215amshee765be27b5ceabp1401d2jsn2b06ad9f5578",
		"X-RapidAPI-Host": "exercisedb.p.rapidapi.com"
	}
};
// Intializing variables 
const $input = $('input[type = "text"]')
const $bodyPart = $('#bodyPart')
const $name = $('#name')
const $target = $('#target')
const $equipment = $('#equipment')
const $form = $('form')
let img = $('img')

// Event Listener
$form.on('submit', handleGetData);

// Calling Data
function handleGetData(event) {
    event.preventDefault()
    userInput = $input.val()

// case matching input
let call=$.ajax(settings).done(function (response) {
    let data= response
    let filter=data.filter(workout => {
        return `${workout.bodyPart}`.toLowerCase().includes(userInput.toLowerCase().trim())
       
    })

    // Generating random number from array
    let number = Math.floor(Math.random() * 50)
    console.log(filter);
    // fetching information on workouts
    $bodyPart.text(filter[number].bodyPart);
    $name.text(filter[number].name);
    $target.text(filter[number].target);
    $equipment.text(filter[number].equipment);
    
    $('main').append(`<img id = "img" src = '${filter[number].gifUrl}'/>`);


});

}
