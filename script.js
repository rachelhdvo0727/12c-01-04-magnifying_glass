"use strict";
window.addEventListener("DOMContentLoaded", init);
const HTML = {};

function init() {
  console.log("init");
  HTML.bigmap = document.querySelector(".hcm_map_big");
  HTML.borderglass = document.querySelector("#glass");
  HTML.clippedCircle = document.querySelector("#clippedcirle");
  HTML.map = document.querySelector("svg");

  HTML.map.addEventListener("mousedown", theMouseDown);
  HTML.map.addEventListener("mouseup", theMouseUp);
}

function theMouseDown() {
  console.log("mouseDown");
  HTML.map.addEventListener("mousemove", theMouseMove);
  HTML.map.addEventListener("mouseup", theMouseUp);
  event.preventDefault();
}

function theMouseMove() {
  console.log("mouseMove");

  HTML.clippedCircle.setAttribute(
    "cx",
    (event.pageX / window.innerWidth) * 1000
  );
  HTML.clippedCircle.setAttribute(
    "cy",
    (event.pageY / window.innerHeight) *
      1000 *
      (window.innerHeight / window.innerWidth)
  );
  console.log(HTML.clippedCircle.attributes);

  HTML.borderglass.setAttribute("cx", (event.pageX / window.innerWidth) * 1000);
  HTML.borderglass.setAttribute(
    "cy",
    (event.pageY / window.innerHeight) *
      1000 *
      (window.innerHeight / window.innerWidth)
  );
  console.log(HTML.borderglass.attributes);

  //add (posX)* -1
  //add (posY)* -1
}

function theMouseUp() {
  console.log("mouseUp");
  HTML.map.removeEventListener("mousemove", theMouseMove);
  HTML.map.addEventListener("mousedown", theMouseDown);
}
