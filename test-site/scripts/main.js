let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/image1.jpg') {
      myImage.setAttribute ('src','images/hounddp.png');
    } else {
      myImage.setAttribute ('src','images/image1.jpg');
    }
}      

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.innerHTML = 'Sloths name is.. ' + myName;
    }
  }
if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Sloths second name is.. ' + storedName;
  }

myButton.onclick = function() {
    setUserName();
  }
