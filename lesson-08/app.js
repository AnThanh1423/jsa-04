const btnInc = document.getElementById("inc");
const btnDec = document.getElementById("dec");
const countEl = document.getElementById("count");

let currentCount = 0;

btnInc.addEventListener("click", () => {
    if (currentCount < 10) {
        currentCount+=1;
        countEl.textContent = currentCount;
    } else {
        alert("khong dc tang nua")
    }
});

btnDec.addEventListener("click", () => {
    if (currentCount > 0) {
        currentCount-=1;
    countEl.textContent = currentCount;
    } else {
        alert("khong dc giam nua")
    }
})
