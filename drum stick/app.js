const clapButton = document.getElementById('clap');
const clapAudio = document.getElementById('clapaudio');


function playAudio(id) {
  var audio = document.getElementById(id)
  if (audio) {
    audio.currentTime = 0;
    audio.play();
  }
}
document.addEventListener('click' , function () {
  playAudio();
});

document.addEventListener('keydown', function (event) {
   if (event.key.toLowerCase() === 'a') {
     playAudio('clapAudio');
   }if (event.key.toLowerCase() === 's') {
    playAudio('snareAudio');
   }if (event.key.toLowerCase() === 'd') {
     playAudio('boomAudio')
   }if (event.key.toLowerCase() === 'f') {
     playAudio('hihatAudio')
   }if (event.key.toLowerCase() === 'g') {
     playAudio('kickAudio')
   }if (event.key.toLowerCase() === 'h') {
     playAudio('openhatAudio')
   }if (event.key.toLowerCase() === 'j') {
     playAudio('rideAudio')
   }if (event.key.toLowerCase() === 'k') {
     playAudio('tinkAudio')
   }if (event.key.toLowerCase() === 'l') {
     playAudio('tomAudio')
   }
 })