'use strict';

function getImage(breed){
    let myURL = `https://dog.ceo/api/breed/${breed}/images`
    fetch (myURL)
        .then(response => response.json())
        .then(responseJson =>
            displayResults(responseJson))
        .catch(error => alert ('Something Went Wrong'));
}

//function that displays images
function displayResults(responseJson){
    //replace existing images with new ones
    //if there is a breed 
    for (let i = 0; i < responseJson.message.length; i++){   
        if (responseJson.status === "error"){
            alert("Invalid breed name")
        } else {  
                let pic = responseJson.message[Math.floor(Math.random() * responseJson.message.length)];
                $('.results-img').replaceWith(`<img src=${pic} class="results-img">`);
        }
    $('.results').removeClass('hidden');
}}

//submit listener
function manipForm() {
    $('form').submit(event => {
        event.preventDefault();
        let input = $('input').val();
        getImage(input);
    });
}

$(function() {
    console.log("App Initiatiated");
    manipForm();
});

