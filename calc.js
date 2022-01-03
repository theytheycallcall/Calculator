let a = ''; // first nubmer
let b = ''; // second nubmer
let sign = ''; // operation sign
let finish = false;

const digit = ['0','1','2','3','4','5','6','7','8','9','.' ];
const action = ['-','+','X','/' ];

//screen

const out = document.querySelector('.calc-screen p');

function clearALl () {

    a = ''; // first nubmer and result
    b = ''; // second nubmer
    sign = ''; // operation sign
    finish = false;
    out.textContent = 0 ;
}

document.querySelector(' .ac').onclick = clearALl;

document.querySelector(' .buttons').onclick = (event) => {
    //clicked button
    if(!event.target.classsList.contains ('btn')) return;
    //clicked button clearALL ac
    if(!event.target.classsList.contains ('ac')) return;

    out.textContent = '';
    // Receive clicked button
    const key = event.target.textContent;

    //If was clicked button from 0-9 or . 
    if (digit.includes(key)){
        a += key;
        console.log (a, b , sign);
        out.textContent = a;
    }





}
    