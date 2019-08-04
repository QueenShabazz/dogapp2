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
    $('.results-img').empty();
    //if there is a breed 
   
        if (responseJson.status==="error"){
            alert("Invalid breed name")
        } else {  
            for (let i = 0; i < responseJson.message.length; i++ ){   
                let pic = responseJson.message[i];
                $('.results-img').append(`<img src=${pic}>`);
            }
    }
    $('.results').removeClass('hidden');
}

//submit listener
function manipForm(){
    $('form').submit(event =>{
        event.preventDefault();
        let input = $('input').val();
        getImage(input);
    })
}

$(function(){
    console.log("App Initiatiated");
    manipForm();
});

//   