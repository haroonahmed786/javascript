 
  function show(){
         
         var j = " j variable of outer function";
         console.log(j);

         function innerfun(){

         	var k = " k variable of inner function";
         	console.log(k);
         }
         innerfun()
  }
  show();