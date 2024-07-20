const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

let interval = null;

function randomize(def, target) {
    let iteration = 0;

    clearInterval(interval);

    interval = setInterval(() => {
        console.log("interval running");
        target.innerText = target.innerText
            .split("")
            .map((letter, index) => {
                if (index < iteration || letter == " ") {
                    return def[index];
                }

                return letters[Math.floor(Math.random() * 62)]
            })
            .join("");

        if (iteration >= def.length) {
            clearInterval(interval);
        }

        iteration += 1 / 3;
    }, 30);
}


document.querySelector("h1").onmousedown = event => {
    randomize(event.target.dataset.value, event.target)
}

// document.querySelector("h1").onmouseover = event => {
//     let iteration = 0;
//     clearInterval(interval);

//     interval = setInterval(() => {
//         event.target.innerText = event.target.innerText
//             .split("")
//             .map((_letter, index) => {
//                 if (index < iteration) {
//                     return event.target.dataset.value[index];
//                 }

//                 return letters[Math.floor(Math.random() * 26)]
//             })
//             .join("");

//         if (iteration >= event.target.dataset.value.length) {
//             clearInterval(interval);
//         }

//         iteration += 1 / 3;
//     }, 30);
// }