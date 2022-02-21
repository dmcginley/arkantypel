// from code institute
document.addEventListener("DOMContentLoaded", function () {
  let buttons = document.getElementsByTagName("button");
  for (let button of buttons) {
    button.addEventListener("click", function () {
      if (this.getAttribute("data-type") === "submit") {
        alert("you've clicked submit");
      } else {
        let gameType = this.getAttribute("data-type");
        alert(`other ${gameType}`);
      }
    });
  }
});

// from the tutorial
let container = document.querySelector(".text");

let speeds = {
  slow: 80,
  normal: 30,
};

// let textLine = [{
//         string: "Hi my friend, you have entered a forrest, ",
//         speed: speeds.normal,
//     },
//     {
//         string: "Be careful of the trees in front of you. ",
//         speed: speeds.normal,
//     },
// ];

// empty text to be injected into this array
let textLine = [];

// optional arrays
textLine[0] = {
  string:
    "Hi my friend, you have entered a forrest, Be careful of the trees in front of you. ",
  speed: speeds.normal,
};
textLine[1] = {
  string: "Please chose a direction.",
};

// back to tutorial
console.log(textLine.join());
textLine.join();

textLine.splice();
console.log(textLine.join());

let characters = [];

textLine.forEach((line) => {
  line.string.split("").forEach((character) => {
    let span = document.createElement("span");
    span.textContent = character;
    container.appendChild(span);
    characters.push({
      span: span,
      delayAfter: line.speed,
    });
  });
});

function revealOneCharacter(list) {
  let next = list.splice(0, 1)[0];
  next.span.classList.add("revealed");

  let delay = next.delayAfter;

  if (list.length > 0) {
    setTimeout(function () {
      revealOneCharacter(list);
    }, delay);
  }
}

revealOneCharacter(characters);
