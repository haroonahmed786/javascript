
 var arr = [1,2,3,4,5];

 var total = 0;

 total = arr.reduce((total,num)=>{
 	return total+num;
 });
 console.log(total);


 //accumulator//

 const array = [1,2,30,40,50];


 const reduceArray = array.reduce((accumulator,num)=>{
 	return accumulator+num;
 },5);
 console.log(accumulator);