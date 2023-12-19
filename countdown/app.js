const buttons = document.querySelectorAll('.timer__button')
const displayTimeLeft = document.querySelector('.display__time-left')
const displayEndTime = document.querySelector('.display__end-time')
const customForm = document.getElementById('custom')
let interval
let timeLeft = 0
let endTime = 0

function startTimer(seconds) {
  timeLeft = seconds
  clearInterval(interval)
  interval = setInterval(() => {
    timeLeft--
    updateDisplay()
    if (timeLeft <= 0) {
      clearInterval(interval)
      alert('Time is up!')
    }
  }, 1000)
  updateDisplay()
}

function updateDisplay() {
  const minutes = Math.floor(timeLeft / 60)
  const seconds = timeLeft % 60
  displayTimeLeft.textContent = `${minutes}:${
    seconds < 10 ? '0' : ''
  }${seconds}`
  endTime = new Date(Date.now() + timeLeft * 1000)
  displayEndTime.textContent = endTime.toLocaleTimeString()
}

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const seconds = parseInt(button.dataset.time)
    startTimer(seconds)
  })
})

customForm.addEventListener('submit', (event) => {
  event.preventDefault()
  const minutes = parseInt(customForm.minutes.value)
  startTimer(minutes * 60)
  customForm.reset()
})
