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