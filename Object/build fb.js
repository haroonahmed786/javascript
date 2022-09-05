var dataBase = [
    {
        username : "Haroon",
        password : "1234"
}
];

 var newsFeed = [
     {
         username : "Siddiq",
         timeLine : " so tired that all the lerning!"
 },
  {
  	     username : "Waqas",
  	     password : "javascript is soooo cooool!"
  }
 ];

  var userNamePrompt = prompt("what's your name?");
  var passwordPrompt = prompt("what's your password");

  function singnIn(user,pass){
           if (user === dataBase[0] . username &&
           	   pass === dataBase[0] . password){
           	console.log(newsFeed);
           }
           else{
           	alert("sorry wron username and password");
           }
  }
  	singnIn(userNamePrompt,passwordPrompt);