// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() 
{
  // TODO
  const voiceSelect = document.getElementById('voice-select');
  const textInput = document.getElementById('text-to-speak');
  const speakButton = document.querySelector('#explore button');
  const img = document.querySelector('#explore img');

  let voices = [];

  speakButton.addEventListener('click', () => 
  {
    if (voiceSelect.value === 'select')
    {
      return;
    }

    const text = textInput.value;
    let utterance = new SpeechSynthesisUtterance(text);
    utterance.voice = voices[voiceSelect.selectedIndex - 1];

    utterance.onstart = () => 
    {
      img.src = 'assets/images/smiling-open.png';
    };

  utterance.onend = () => 
  {
    img.src = 'assets/images/smiling.png';
  };

    speechSynthesis.cancel();
    speechSynthesis.speak(utterance);
  });

  function loadVoices()
  {
    voices = speechSynthesis.getVoices();
    
    for(let i in voices)
    {
      const option = document.createElement('option');
      option.value = voices[i].name;
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
      voiceSelect.appendChild(option);
    }
  }

  speechSynthesis.addEventListener('voiceschanged', loadVoices);
  loadVoices();
}