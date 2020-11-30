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

function vickersFromRockwell(Rockwell) {
    let x_rw = Rockwell;
    let y_vk;

    y_vk =    ( 0.000111 * Math.pow(x_rw, 4) ) 
            - ( 0.014722 * Math.pow(x_rw, 3) )
            + ( 0.845702 * Math.pow(x_rw, 2) )
            - ( 15.166443 * x_rw ) 
            + 303.499402;

    return y_vk;
}

function rockwellFromVickers(Vickers) {
    let x_vk = Vickers;
    let y_rw;

    y_rw =    ( 0.0000001 * Math.pow(x_vk, 3) )
            - ( 0.0003 * Math.pow(x_vk, 2) )
            + (0.2748 * x_vk)
            - 29.619;

    return y_rw;
}

function brinellFromVickers(Vickers) {
    let x_vk = Vickers;
    let y_br;

    y_br = ( 0.9317 * x_vk ) + 4.7088;

    return y_br;
}

function vickersFromBrinell(Brinell) {
    let x_br = Brinell;
    let y_vk;

    y_vk = ( 1.0732 * x_br ) - 5.0422;

    return y_vk;
}

const queryString = window.location.search;
console.log("Query String = " + queryString);

const urlParams = new URLSearchParams(queryString);

const input_rw = urlParams.get('rockwell');
const input_vk = urlParams.get('vickers');
const input_br = urlParams.get('brinell');

console.log("Rockwell Input = " + input_rw);
console.log("Vickers Input = " + input_vk);
console.log("Brinell Input = " + input_br);

const output_vickersFromRockwell = vickersFromRockwell(input_rw);
const output_rockwellFromVickers = rockwellFromVickers(input_vk);
const output_brinellFromVickers = brinellFromVickers(input_vk);
const output_vickersFromBrinell = vickersFromBrinell(input_br);

if(input_rw){
    //Vickers from Rockwell
    console.log(input_rw +" Rockwell = " + output_vickersFromRockwell + " Vickers")
}

if(input_vk){
    //Rockwell from Vickers
    console.log(input_vk +" Vickers = " + output_rockwellFromVickers + " Rockwell")

    //Brinell from Vickers
    console.log(input_vk +" Vickers = " + output_brinellFromVickers + " Brinell")
}

if(input_br) {
    //Vickers from Brinell
    console.log(input_br +" Brinell = " + output_vickersFromBrinell + " Vickers")
}