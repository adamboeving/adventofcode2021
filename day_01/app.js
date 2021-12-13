
const fs = require('fs');
const depths = fs.readFileSync('input.txt').toString().split("\n");

let counter = 0;

// let test = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];


// for (let i = 0; i < test.length; i++) {

//     if(test[i] < test[i + 1] ){
//         counter++
//     }


for (let i = 0; i < depths.length; i++) {

    if(parseInt(depths[i]) < parseInt(depths[i + 1]) ){
        counter++
    }

    // if(depths[i < depths [i + 1]]){
    //     counter++
    // }
	
}

console.log(counter)
console.log(depths.length)