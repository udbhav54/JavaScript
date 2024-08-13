# Project releated to DOM

## Project link
[Click here (Udbhav)](https://stackblitz.com/)

## Chai Aur Code
[Click here (hitesh)](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

#  Solution Code

##
 Project 1 [ Color Changer (JavaScript File) ]

```javascript
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach((button) => {
  console.log(button);
  button.addEventListener('click', (e) => {
    console.log(e);
    console.log(e.target);
    // if (e.target.id == 'grey') {
    //   body.style.backgroundColor = e.target.id;
    // }
    // if (e.target.id == 'yellow') {
    //   body.style.backgroundColor = e.target.id;
    // }
    // if (e.target.id == 'white') {
    //   body.style.backgroundColor = e.target.id;
    // }
    // if (e.target.id == 'blue') {
    //   body.style.backgroundColor = e.target.id;
    // }
    const eventId = e.target.id;
    switch (eventId) {
      case 'grey':
        body.style.backgroundColor = eventId;
        break;
      case 'white':
        body.style.backgroundColor = eventId;
        break;
      case 'yellow':
        body.style.backgroundColor = eventId;
        break;
      case 'blue':
        body.style.backgroundColor = eventId;
        break;
      case 'purple':
        body.style.backgroundColor = eventId;
        break;
    }
  });
});


```


## Project 2 [BMI Calculator]

```javascript
// JavaScript File

const form = document.querySelector('form');
// this use case will give you empty value
// const height = parseInt(document.querySelector('#height').value)
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');
  const message = document.querySelector('#message');

  if (height == '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight == '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    // show result
    results.innerHTML = `<span>${bmi}</span>`;
    if (bmi < 18.6) {
      message.innerHTML = `Under Weight`;
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      message.innerHTML = `Normal Range`;
    } else {
      message.innerHTML = `Overweight`;
    }
  }

  // results.innerHTML = `${height}`
});


```

```html
// HTML File

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="stylesheet" href="style.css" />
    <link rel="stylesheet" href="../styles.css" />
    <title>BMI Calculator</title>
  </head>
  <body>
    <div class="container">
      <h1>BMI Calculator</h1>
      <form>
        <p><label>Height in CM: </label><input type="text" id="height" /></p>
        <p><label>Weight in KG: </label><input type="text" id="weight" /></p>
        <button>Calculate</button>
        <div id="results"></div>
        <div id="message"></div>
        <div id="weight-guide">
          <h3>BMI Weight Guide</h3>
          <p>Under Weight = Less than 18.6</p>
          <p>Normal Range = 18.6 and 24.9</p>
          <p>Overweight = Greater than 24.9</p>
        </div>
      </form>
    </div>
  </body>
  <script src="chaiaurcode.js"></script>
</html>


```

## Project 3 [Digital Clock]

```javascript
// const clock = document.querySelector('#clock')
const clock = document.getElementById('clock');
setInterval(() => {
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString()
}, 1000)


```