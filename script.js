/* ;
const sub = document.querySelector(".subtract");
const resetCount = document.querySelector(".reset");
const add = document.querySelector(".add"); */
const count = document.querySelector(".count")
const buttons = document.querySelector(".buttons");

//Adding event listener to buttons (parent) for event propagation/delegation
buttons.addEventListener("click", (e) => {
    if (e.target.classList.contains("add")) {
        count.innerHTML++;
        setColor();
    }
    if (e.target.classList.contains("subtract")) {
        count.innerHTML--;
        setColor();
    }
    if (e.target.classList.contains("reset")) {
        count.innerHTML = 0;
        setColor();
    }
})

// Changing colour of number depending on its sign

function setColor() {
    if (count.innerHTML > 0) {
        count.style.color = "black";
    }
      else if (count.innerHTML < 0) {
        count.style.color = "orange";
    }
      else {
        count.style.color = "#fff";
    }
}



// Event propogation/delegation (above) used instead of functions below.
// Event listeners for buttons
/* sub.addEventListener("click", () => {
    count.innerHTML--;
})

add.addEventListener("click", () => {
    count.innerHTML++;
})

resetCount.addEventListener("click", () => {
    count.innerHTML = 0;
}) */