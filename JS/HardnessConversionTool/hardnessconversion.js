// Rockwell > Vickers 
// >> y = 0.000111x^4 - 0.014722x^3 + 0.845702x^2 - 15.166443x + 303.499402

// Vickers > Rockwell
// >> y = 1E-07x^3 - 0.0003x^2 + 0.2748x - 29.619

// Brinell > Vickers
// >> y = 1.0732x - 5.0422

// Vickers > Brinell
// >> y = 0.9317x + 4.7088

// Vickers > Approx. Tensile Strength
// >> y = 0.2936x + 14.982

// Brinell > Approx. Tensile Strength
// >> y = 0.2736x + 18.668

function vickersFromRockwell(Rockwell, ElementID) {
    let x_rw = Rockwell;
    let elementID = ElementID;
    let y_vk;

    y_vk =    ( 0.000111 * Math.pow(x_rw, 4) ) 
            - ( 0.014722 * Math.pow(x_rw, 3) )
            + ( 0.845702 * Math.pow(x_rw, 2) )
            - ( 15.166443 * x_rw ) 
            + 303.499402;

    y_vk = Math.round((y_vk + Number.EPSILON) * 1 ) / 1; //0 DP

    //return y_vk;
    console.log("Function vickersFromRockwell was run.");
    document.getElementById(elementID).innerHTML = y_vk;
}

function rockwellFromVickers(Vickers, ElementID) {
    let x_vk = Vickers;
    let elementID = ElementID;
    let y_rw;

    y_rw =  - ( 0.0000000001794084 * Math.pow(x_vk, 4) )
            + ( 0.0000005101322 * Math.pow(x_vk, 3) )
            - ( 0.0005927337 * Math.pow(x_vk, 2) )
            + (0.3701118 * x_vk)
            - 40.39573;

    y_rw = Math.round((y_rw + Number.EPSILON) * 10 ) / 10; //1 DP

    document.getElementById(elementID).innerHTML = y_rw;
}

function brinellFromVickers(Vickers, ElementID) {
    let x_vk = Vickers;
    let elementID = ElementID;
    let y_br;

    y_br = ( 0.9317 * x_vk ) + 4.7088;

    y_br = Math.round((y_br + Number.EPSILON) * 1 ) / 1; //0 DP

    document.getElementById(elementID).innerHTML = y_br;
}

function vickersFromBrinell(Brinell, ElementID) {
    let x_br = Brinell;
    let elementID = ElementID;
    let y_vk;

    y_vk = ( 1.0732 * x_br ) - 5.0422;

    y_vk = Math.round((y_vk + Number.EPSILON) * 1 ) / 1; //0 DP

    document.getElementById(elementID).innerHTML = y_vk;
}

const queryString = window.location.search;
console.log("Query String = " + queryString);

const urlParams = new URLSearchParams(queryString);

const input_rw = urlParams.get('rockwell_ui');
const input_vk = urlParams.get('vickers_ui');
const input_br = urlParams.get('brinell_ui');

console.log("Rockwell Input = " + input_rw);
console.log("Vickers Input = " + input_vk);
console.log("Brinell Input = " + input_br);