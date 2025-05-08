const myImage = document.querySelector("img");
myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/img-1.jpg") {
    myImage.setAttribute("src", "images/img-2.jpg");
  } else {
    myImage.setAttribute("src", "images/img-1.jpg");
  }
};

// document.querySelector("img").addEventListener("click", function () {
//   alert("别戳我，我怕疼！");
// });

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("我们该怎么称呼你？");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Hello, ${myName}`;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Hello, ${storedName}`;
}

myButton.onclick = function () {
  setUserName();
};
