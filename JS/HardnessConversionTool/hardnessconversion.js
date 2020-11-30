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
    let y_vk

    y_vk =    ( 0.000111 * Math.pow(x_rw, 4) ) 
            - ( 0.014722 * Math.pow(x_rw, 3) )
            + ( 0.845702 * Math.pow(x_rw, 2) )
            - ( 15.166443 * x_rw ) 
            + 303.499402

    return y_vk

}

const queryString = window.location.search;
console.log("Query String = " + queryString);

const urlParams = new URLSearchParams(queryString);

const input_rw = urlParams.get('rockwell');
console.log("Input Value = " + input_rw);

const output_vk = vickersFromRockwell(input_rw)
console.log(input_rw +" Rockwell = " + output_vk + " Vickers")