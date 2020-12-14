function aoc(input){
    let data = fetch(input)
    .then((response) => response.text())
    .then(data => {
        // do some stuff
        hasTwoCandidates(data, 2020);
        return data.split("\n");
    })
    .catch(error => {
        return error;
    });
    
}


function compareNumbers(a, b) {
    return a - b;
}


function hasTwoCandidates(input, targetSum) {
    // Function to check if in a given array, the sum of three values equal the given targetSum

    let inputArr = input.split("\n");
    inputArr.sort(compareNumbers);
    let inputArr_len = inputArr.length;
    //console.log(inputArr);

    // convert Strings to integers
    for (let i=0; i < inputArr.length; i++) {
        inputArr[i] = parseInt(inputArr[i]);
    }

    let l = 0;
    let r = inputArr_len - 1;
    console.log(inputArr_len, l);

    let sum;
    let a;
    let b;
    let c;
    let answer;

    for(let i = 0; i < inputArr_len; i++){
        for(let j = 0; j < inputArr_len; j++){
            for (let k=0; k < inputArr_len; k++){
                a = inputArr[i];
                b = inputArr[j];
                c = inputArr[k];
                
                sum = a + b + c;

                if(sum == targetSum){
                    console.log(a, b, c, sum);
                    answer = a * b * c;
                    console.log("The answer is ", answer);
                    break;
                }
            }
        }
    }



}

