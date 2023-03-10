//Basic function that creates a node with the provided tag, id and content
function createNode(tag, id, content) {
  let element = document.createElement(tag);
  element.id = id;
  element.innerHTML = content;
  return element
}

//create HTML element
const startValue = createNode('div', 'startValue', '0'); //create value container
leftMain.append(startValue)

const btnDecrease = createNode('button', 'btnDecrease', '-'); //create - button
row1.append(btnDecrease)

const btnIncrease = createNode('button', 'btnIncrease', '+'); //create + button
btnDecrease.after(btnIncrease);

const reset = createNode('button', 'reset', 'reset'); //create reset button
btnDecrease.after(reset);

const start = createNode('button', 'start', 'start'); //create start button
row2.append(start);

const stop = createNode('button', 'stop', 'stop'); //create stop button
start.after(stop);

// block translate 
startValue.setAttribute('translate', 'no')
reset.setAttribute('translate', 'no')
start.setAttribute('translate', 'no')
stop.setAttribute('translate', 'no')

let count = startValue.innerHTML
let colorValue = null

// change color of startValue
function changeColor() {
  colorValue = startValue.style
  if (count > 0) {
    colorValue.color = 'green'
  } else
    if (count < 0) {
      colorValue.color = 'red'
    }
    else {
      colorValue.color = 'black'
    }
}

//increase or decrease by 1 the value of the valueContainer and increase or decrease by 1 the variable count
function counter(e) {
  switch (e.target.id) {
    case 'btnIncrease':
      startValue.innerHTML++
      count++
      break;
    case 'btnDecrease':
      startValue.innerHTML--
      count--
      break;
    case 'reset':
      startValue.innerHTML = 0
      count = 0
      break;
  }
  changeColor()
}

//function for the auto and stop button
let myInterval

function startCounter() {
  if (!myInterval) {
    myInterval = setInterval(() => {
      startValue.innerHTML++
      count++
      changeColor()
    }, 1000);
  }
}

function stopCounter() {
  clearInterval(myInterval)
  myInterval = null
}

//Increase, decrease, reset, start and stop the counter and change the color
document.addEventListener("click", function (e) {
  counter(e)
  if (e.target.id == "start") {
    startCounter()
  } else
    if (e.target.id == "stop")
      stopCounter()
    else if (e.target.id == "reset")
      stopCounter()
})













