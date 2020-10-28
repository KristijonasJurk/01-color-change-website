const button1 = document.getElementById('btn');
const body = document.querySelector('body');
var randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
const colors = ['red', 'blue', 'green', 'lightbrown', 'coral', 'cyan', 'pink', 'black', 'lightgreen', 'yellow'];


button1.addEventListener("click", function () {

    const colorIndex = parseInt(Math.random() * colors.length)
    body.style.backgroundColor = colors[colorIndex]




    // for (i = 0; i < colors.length; i++) {
    //     let x = 0;
    //     x++;
    //     body.style.backgroundColor = colors[x - 1];

    // }
});
