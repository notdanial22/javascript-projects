const player = document.querySelector('.player')
const video = player.querySelector('.viewer')
const progress = player.querySelector('.progress')
const progressBar = player.querySelector('.progress__filled')
const toggle = player.querySelector('.toggle')
const skipButtons = player.querySelectorAll('[data-skip]')
const ranges = player.querySelectorAll('.player__slider')


function togglePlay() {
 if (video.paused) {
  video.play()
 } else {
  video.pause()
 }
}

function updateButton() {
 if (video.ended) {
  toggle.textContent = '►'
 } else if (video.paused) {
  toggle.textContent = '►'
 } else {
  toggle.textContent = '❚❚'
 }
}
function skip() {
 video.currentTime += parseFloat(this.dataset.skip) || 0
}

function handleRangeUpdate() {
  video[this.name] = this.value;
  
}
function updateProgress() {
  progressBar.style.flexBasis = `${(video.currentTime / video.duration) * 100}%`
}
function scrub(e){
 const scrubTime = (e.offsetX / video.offsetWidth) * video.duration;
 video.currentTime = scrubTime;
}
video.addEventListener( 'click', togglePlay )
video.addEventListener( 'play', updateButton )
video.addEventListener( 'pause', updateButton )

toggle.addEventListener( 'click', togglePlay )


skipButtons.forEach(button => button.addEventListener('click',skip))
ranges.forEach(range => range.addEventListener('mousemove',handleRangeUpdate))
ranges.forEach(range => range.addEventListener('click',handleRangeUpdate))
video.addEventListener('timeupdate' , updateProgress)
progress.addEventListener('click' , scrub)
let mousedown = false
progress.addEventListener('mousemove' , () => {
 if (mousedown === true){
  scrub;
 }else{
  return;
 }
})
progress.addEventListener('mousedown' , ()=>mousedown = true)
progress.addEventListener('mouseup', () => mousedown = false)

document.addEventListener('DOMContentLoaded', function () {
  const fullscreenButton = document.getElementById('fullscreenButton')

  fullscreenButton.addEventListener('click', function () {
    if (video.requestFullscreen) {
      video.requestFullscreen()
    } else if (video.mozRequestFullScreen) {
      /* Firefox */
      video.mozRequestFullScreen()
    } else if (video.webkitRequestFullscreen) {
      /* Chrome, Safari and Opera */
      video.webkitRequestFullscreen()
    } else if (video.msRequestFullscreen) {
      /* IE/Edge */
      video.msRequestFullscreen()
    }
  })
})
