var bin = "";

function decimalTilBin(number){

    while(number > 0){
        bin = number%2 + bin;
        number = Math.floor(number/2);


    }

return bin;

}

console.log(decimalTilBin(14));