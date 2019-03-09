
const sliderData = [
  { 'title': 'R', 'color': 'red', 'sliderId': 'red-slider', 'valueId': 'red-value' },
  { 'title': 'G', 'color': 'green', 'sliderId': 'green-slider', 'valueId': 'green-value' },
  { 'title': 'B', 'color': 'blue', 'sliderId': 'blue-slider', 'valueId': 'blue-value' }
]

const dataPanel = document.querySelector('#data-panel')

showSlider()

dataPanel.addEventListener('change', (event) => {
  const showRedVal = document.querySelector('#red-value')
  const showGreenVal = document.querySelector('#green-value')
  const showBlueVal = document.querySelector('#blue-value')
  const redVal = document.getElementById('red-slider').value
  const greenVal = document.getElementById('green-slider').value
  const blueVal = document.getElementById('blue-slider').value
  const showHexVal = document.querySelector('.show-hex-value')
  const redHexVal = parseInt(redVal, 10).toString(16)
  const greenHexVal = parseInt(greenVal, 10).toString(16)
  const blueHexVal = parseInt(blueVal, 10).toString(16)
  let htmlText = `#${paddingZero(redHexVal, 2)}${paddingZero(greenHexVal, 2)}${paddingZero(blueHexVal, 2)}`

  if (event.target.classList.contains('red')) {
    showRedVal.innerHTML = redVal
  } else if (event.target.classList.contains('green')) {
    showGreenVal.innerHTML = greenVal
  } else if (event.target.classList.contains('blue')) {
    showBlueVal.innerHTML = blueVal
  }
  showHexVal.innerHTML = htmlText
  document.body.style.backgroundColor = htmlText
})

// padding zero
function paddingZero(str, lenght) {
  if (str.length >= lenght)
    return str;
  else
    return paddingZero("0" + str, lenght);
}

function showSlider() {
  let htmlContent = ''
  sliderData.forEach(function (item, index) {
    htmlContent += `
    <div class="item-container">
      <div class="label ${item.color}">${item.title}</div>

      <div class="component">
        <input type="range" min="0" max="255" value="126" class="slider ${item.color}" id="${item.sliderId}">
      </div>

      <div class="show-rgb-value ${item.color}" id="${item.valueId}">126</div>
    </div>
      `
  })
  htmlContent += `
    <div class="show-hex-value">#7e7e7e</div>
    `
  dataPanel.innerHTML = htmlContent
}