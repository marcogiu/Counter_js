//Basic function that creates a node with the provided tag, id and content
function createNode(tag, id, content) {
  let element = document.createElement(tag);
  element.id = id;
  element.innerHTML = content;
  return element
}

const startValue = createNode('div', 'startValue', '0'); //create value container
container0.append(startValue)

const btnDecrease = createNode('button', 'btnDecrease', '-'); //create - button
container1.append(btnDecrease)

const btnIncrease = createNode('button', 'btnIncrease', '+'); //create + button
btnDecrease.after(btnIncrease);

const reset = createNode('button', 'reset', 'reset'); //create reset button
btnDecrease.after(reset);

const start = createNode('button', 'start', 'start'); //create reset button
container2.append(start);

const stop = createNode('button', 'stop', 'stop'); //create reset button
start.after(stop);

let count = startValue.innerHTML

//increase or decrease by 1 the value of the valueContainer
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
}


let myInterval

function startCounter() {
  if (!myInterval) {
    myInterval = setInterval(() => {
      startValue.innerHTML++
      count++
      color(count)
    }, 1000);
  }
}

function stopCounter() {
  clearInterval(myInterval)
  myInterval = null
}


start.addEventListener("click", startCounter)
stop.addEventListener("click", stopCounter)
reset.addEventListener("click", stopCounter)

//Increase, decrease or reset the counter
container1.addEventListener('click', (e) => {
  counter(e);
});


container1.addEventListener('click', (e) => {
  color(count);
});


// change color of startValue
function color(e) {
  if (count < 0) {
    document.getElementById('startValue').style.color = 'red'
  } else
    if (count > 0) {
      document.getElementById('startValue').style.color = 'green'
    } else {
      document.getElementById('startValue').style.color = 'black'

    }
}




