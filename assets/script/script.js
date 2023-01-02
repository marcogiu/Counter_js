//Basic function that creates a node with the provided tag, id and content
function createNode(tag, id, content) {
  let element = document.createElement(tag);
  element.id = id;
  element.innerHTML = content;
  return element
}

const header = createNode('div', 'header', '')
document.body.appendChild(header)

const leftHeader = createNode('div', 'leftHeader', 'COUNTER')
header.appendChild(leftHeader)
document.body.appendChild(header)

const rightHeader = createNode('div', 'rightHeader', '')
header.appendChild(rightHeader)
document.body.appendChild(header)

const main = createNode('div', 'main', '')
document.body.appendChild(main)

const container = createNode('div', 'container', '')
main.appendChild(container)
document.body.appendChild(main)

const btnDecrease = createNode('button', 'btnDecrease', '-'); //create - button
container.append(btnDecrease);

const startValue = createNode('div', 'startValue', '0'); //create value container
btnDecrease.after(startValue);

const btnIncrease = createNode('button', 'btnIncrease', '+'); //create + button
startValue.after(btnIncrease);

const auto = createNode('button', 'auto', 'auto'); //create reset button
container.append(auto);

const stop = createNode('button', 'stop', 'stop'); //create reset button
container.append(stop);

const reset = createNode('button', 'reset', 'reset'); //create reset button
container.append(reset);

//increase or decrease by 1 the value of the valueContainer
function counter(e) {
  switch (e.target.id) {
    case 'btnIncrease':
      startValue.innerHTML++
      break;
    case 'btnDecrease':
      startValue.innerHTML--
      break;
    case 'reset':
      startValue.innerHTML = 0
      break;
  }
}

let myInterval

function autoCounter() {
  if (!myInterval) {
    myInterval = setInterval(() => {
      startValue.innerHTML++
    }, 1000);
  }
}

function stopAutoCounter() {
  clearInterval(myInterval);
  myInterval = null;
}

auto.addEventListener("click", autoCounter)
stop.addEventListener("click", stopAutoCounter)
reset.addEventListener("click", stopAutoCounter)



//Increase, decrease or reset the counter
container.addEventListener('click', (e) => {
  counter(e);
});







