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

//Reverse String
//input 'hello'
//output 'olleh'

// function stringReverseR(word) {
//   if (word === '') {
//     return '';
//   }

//   const newChar = word[word.length-1];

//   return newChar + stringReverseR(word.slice(0, -1));
// }

// stringReverseR('hello');

// function stringReverseI(word) {
//   let newWord = '';
//   for(let i = word.length-1; i>=0 ; i--) {
//     console.log(newWord.concat(word[i]));
//   }
//   return newWord;
// }

// stringReverseI('hello');



//nth Triangular Number
//input:  1, 2, 3, 4,  5,  6,  7,  8,  9
//output: 1, 3, 6, 10, 15, 21, 28, 36, 45

// function triNumberR(seq) {
//   if (seq === 0) {
//     return 0;
//   }

//   return seq + triNumberR(seq - 1);
// }

// console.log(triNumberR(9));

//string splitter
//input 'hello world' with split(' ')
//output ['hello', 'world']

// function strSplitR (str, sep, curr=''){
//   if(str === '' && curr === ''){
//     return [];
//   }
//   if(str === '' && curr){
//     return [curr];
//   }
//   if(str[0] !== sep){
//     // console.log('');
//     return [...strSplitR(
//       str.slice(1), sep, curr + str[0])];
//   } 
//   return [curr, ...strSplitR(
//     str.slice(1), sep, '')];
// }

// console.log(strSplitR('hello world', ' '));

// function binaryR (num){
//   if(num <= 0){
//     return '';
//   }
//   const bStr = Math.floor(num%2);
//   return binaryR(Math.floor(num/2 )) + bStr;
// }

// binaryR(15);

// function factNum (num){
//   if(num === 0){
//     return 1;
//   }
//   return num * factNum(num - 1);
// }

// factNum(6);

//input east
//output teas, tase, tsae, tsea, taes, tesa
// function anagramWord (word){
//   if(word === ''){
//     return '';
//   }
//   return word[0] ; 
// }

// anagramWord('east');
