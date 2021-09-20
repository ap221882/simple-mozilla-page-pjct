const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";

myHeading.onclick = function () {
  if (myHeading.textContent === "Hello world") {
    myHeading.textContent = "Hello Ajay";
  } else {
    myHeading.textContent = "Hello world";
  }
};

let myButton = document.querySelector("button");
let myUser = document.querySelector("h2");

function setUserName() {
  let myName = prompt("What is your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myUser.textContent = "Hello, " + myName;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  let storedName = localStorage.getItem("name");
  myHeading.textContent = "Hello, " + storedName;
}
