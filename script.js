"use strict";

// document.addEventListener("DOMContentLoaded", function () {
  //   const header = document.querySelector(".header");
  //   console.log("Selected header:", header);
  // });
  
  const mainContent = document.getElementById("mainContent");
  const listContainer = document.getElementById("listContainer");
  const buttons = document.querySelectorAll("button");
  mainContainer.style.border = "solid 1px red";
  mainContainer.style.padding = "20px";
  // Tried different approaches to apply colors to buttons
  btn2.style.backgroundColor = "yellow";
  btn3.style.backgroundColor = "cyan";

buttons[0].addEventListener("click", () => {
  const ul = document.querySelector("ul");
  const li = document.createElement("li");
  li.innerText = "New Item";
  li.addEventListener("click", () => { 
    li.classList.add("highlight"); });

  buttons[1].addEventListener("click", () => {
    const ul = document.querySelector("ul");
    // const li = document.createElement("li");
    li.innerText = "Updated Item";
  });

  ul.appendChild(li);
});
// Keeping it for future reference - what I intially tried which didn't work

// buttons [1].addEventListener('click', () => {
//     const ul = document.querySelector('ul');
//     const li = document.createElement('li');
//     li.innerText = 'Updated Item';

//     ul.appendChild(li);
// });

buttons[2].addEventListener("click", () => {
  const ul = document.querySelector("ul");
  const li = document.querySelector("li");

  ul.removeChild(li);
});
