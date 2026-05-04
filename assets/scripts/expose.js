// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() 
{
  // TODO
  const image = document.querySelector("#expose img");
  const sound = document.querySelector("#expose audio");
  const button = document.querySelector("#expose button");

  let dropDownList = document.querySelector("#expose select");


  dropDownList.addEventListener('change', function() 
  {
    if (event.target.value == "air-horn")
    {
      image.src = "assets/images/air-horn.svg";
      sound.src = "assets/audio/air-horn.mp3";
    }
    else if (event.target.value == "car-horn")
    {
      image.src = "assets/images/car-horn.svg";
      sound.src = "assets/audio/car-horn.mp3";
    }
    else if (event.target.value == "party-horn")
    { 
      image.src = "assets/images/party-horn.svg";
      sound.src = "assets/audio/party-horn.mp3";
    }
  });
  
  button.addEventListener('click', function() 
  {
    sound.play();
  });
}