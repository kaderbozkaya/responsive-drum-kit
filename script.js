function playSound(e) { // triggered on the keydown event.
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); //selects the audio element and the corresponding visual key element based on the keyCode of the pressed key.
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return; //there is no corresponding audio element, it returns early
    audio.currentTime = 0; //ensuring it starts from the beginning
    audio.play();
    key.classList.add('playing');
}

function removeTransition(e) {
if(e.propertyName !== 'transform') return; //if the propertyName of the transition is not 'transform' and returns early if true.
this.classList.remove('playing')
}

/*The removeTransition function is added as an event listener to each key for the transitionend event.
The playSound function is added as an event listener to the keydown event on the window. */

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);


//this code creates a responsive and interactive web application that plays sounds both on key presses and element clicks or touches.

keys.forEach(key => key.addEventListener("click", function(e) {
      let value = key.getAttribute("data-key");
      const audio = document.querySelector(`audio[data-key="${value}"]`);
      const key_data = document.querySelector(`div[data-key="${value}"]`);
      if (audio) {
        key_data.classList.add("playing");
        audio.currentTime = 0;
        audio.play();
      }
    })
  );
