let display = document.getElementById("display")

let btns = document.getElementsByTagName("button")

for (let btn of btns) {
    btn.addEventListener("click", (element) => {
        btnText = element.target.innerText
        if (btnText == "C") {
            display.value = " ";
        }
        else if (btnText == "=") {
            try {
                display.value = eval(display.value)
            } catch (error) {
                display.value = "CHALLEEEE JAAOO "
            }
        }
        else {
            display.value += btnText
        }
    })
}

document.body.onkeydown = function (e) {
    if (e.code == "Enter" ||
        e.keyCode == 32
    ) {
        // for (let btn of btns) {
        //     if (btn.innerText == "=") {
        //         // Trigger a click event on the "=" button
        //         btn.click();
        //         break;
        //     }
        // }

        let equalsBtn = document.querySelector('button[data-key="="]');
        equalsBtn.click();
    }
}