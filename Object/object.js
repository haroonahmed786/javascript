var a = {
         fname : 'Haroon',
         lname : 'Ahmed',
         age   :  22,
         email : 'Haroon@email.com',

        movie : ['Dhoom','Liger','Tufaan'], 
        
     salary    : function(){
     	return 2560;
     },
     fullname:function() {
          return this.fname+ " " +this.lname;
     }

   }
   console.log(a);
   document.write(a.salary());
   document.write('<br>');
   document.write('<br>');
   document.write(a.movie[0]);
   document.write('<br>');
   document.write('<br>');
   document.write(a.fullname());