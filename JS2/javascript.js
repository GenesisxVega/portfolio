console.log("Hello World");

let year = new Date().getFullYear();
let date = `&copy; Genesis Vega Gonzalez ${year}. All Rights Reserved.`;
document.getElementById("footer").innerHTML = date;

const myButton = () => {
    alert("💭 Do not ruin today with mourning tomorrow, Catherynne M. Valente 💭");
};

document.getElementById('btn-alert').onmouseover = () => {
    document.getElementById('btn-alert').innerText = '🍰🍫☕️ Tiramisu means Pick-Me-Up!';
};

document.getElementById('btn-alert').onmouseleave = () => {
    document.getElementById('btn-alert').innerText = '🍰🍫☕️ Click Me for a Pick-Me-Up!';
};

let count = 1;

function incrementButton() {
    count = count + 1;

    // Check if the count is even or odd
    if (count % 2 === 0) {
        document.getElementById('txt-counter').innerHTML = `Number: ${count}`;
        document.getElementById('txt-counter').classList.remove('odd');
        document.getElementById('txt-counter').classList.add('even');
    } else {
        document.getElementById('txt-counter').innerHTML = `Number: ${count}`;
        document.getElementById('txt-counter').classList.remove('even');
        document.getElementById('txt-counter').classList.add('odd');
    }
}

const numbersList = document.getElementById('numbers');

for (let i = 1; i <= 100; i = i + 1) {
    const listItem = document.createElement('li');
    listItem.textContent = "";

    if (i % 2 === 0) {
        listItem.textContent = "even";
    } else {
        listItem.textContent = "odd";
    }

    numbersList.appendChild(listItem);
}

document.getElementById('btn-counter').addEventListener('click', function(event) {
    event.preventDefault();
    incrementButton();
});

document.getElementById('btn-counter').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        incrementButton();
    }
});
