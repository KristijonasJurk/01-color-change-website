const button1 = document.getElementById('btn');
const body = document.querySelector('body');
const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
const colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']


button1.addEventListener("click", function () {

    let hex = '#';
    for (let i = 0; i < 6; i++) {
        const index = Math.floor(Math.random() * colors.length);
        hex += colors[index];
    }
    document.getElementById('color').textContent = `HEX VALUE:${hex}`
    body.style.backgroundColor = hex;






    // const colorIndex = parseInt(Math.random() * colors.length)
    // body.style.backgroundColor = colors[colorIndex]
    // const h1 = document.createElement('h1');
    // h1.setAttribute('id', 'h1')
    // // let text = document.createTextNode('HEX COLOR:' + colors[colorIndex])
    // let z = document.getElementById('h1').innerText = 'HEX COLOR:' + colors[colorIndex];
    // // text += z;
    // // h1.appendChild(z);
    // document.getElementById('container').appendChild(z);
});
