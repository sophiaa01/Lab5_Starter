// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() 
{
  // TODO
  const image = document.querySelector("#expose img");
  const sound = document.querySelector("#expose audio");
  const button = document.querySelector("#expose button");
  const volume = document.querySelector("#volume-controls input");
  const volume_img = document.querySelector("#volume-controls img");

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

  volume.addEventListener('change', function() {
    let volume_value = volume.value;
    console.log(volume_value);

    if (volume_value == 0) {
      volume_img.src = "assets/icons/volume-level-0.svg";
    } else if (volume_value >= 1 && volume_value < 33) {
      volume_img.src = "assets/icons/volume-level-1.svg";
    } else if (volume_value >= 33 && volume_value < 67) {
      volume_img.src = "assets/icons/volume-level-2.svg";
    } else if (volume_value >= 67) {
      volume_img.src = "assets/icons/volume-level-3.svg";
    }
  }
  );
}