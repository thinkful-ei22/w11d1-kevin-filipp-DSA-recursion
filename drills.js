//counting sheep
//input 3
//output 
//3 - another sheep jump over the fence

//decrementing
//console.logging sheep string

// function sheepCountR (num){
//   //base case
//   if(num === 0){
//     return '';
//   }
//   console.log(num + '- Another sheep jumps over the fence');
//   return sheepCountR(num - 1);
// }

// sheepCountR(5);

// function sheepCountI (num){
//   for(let i = num; i > 0; i-- ){
//     console.log(i + '- Another sheep jumps over the fence');
//   }
// }

// sheepCountI(5);


//array double
//input [1,2,3]
//output [2,4,6]

//incrementing and doubling

// function arrayDoubleR (arr){
//   if(!arr.length){
//     return [];
//   }
//   const newArr = [arr[0]*2];
//   console.log(newArr);
//   return [...newArr, ...arrayDoubleR(arr.slice(1))];
// }

// arrayDoubleR([1,2,5]);

// function arrayDoubleI(arr){
//   return arr.map(item => item*2);
// }

// arrayDoubleI([1,2,5]);

//Comment