class Animal{
	constructor(name,age){
	this.name = name;
	this.age  = age;
}

introduce(){
	console.log(`Hi I am ${this.name},I am ${this.age}`);
}
}
class Cow extends Animal{
	constructor(name,age,lang){
		super(name,age);
		this.lang = lang;
	}
	voice(){
		console.log(`name is ${this.name},age is ${this.age},voice is ${this.lang}`);
	}
}

class Parrot extends Animal{
	constructor(name,age,lang){
	super(name,age);
	this.lang = lang;
  }
  sound(){
  	console.log(`name is ${this.name},age is ${this.age},voice is ${this.lang}`);
  }
}

class Dog extends Animal{
	constructor(name,age,lang){
	super(name,age);
	this.lang = lang;
  }
  sound(){
  	console.log(`name is ${this.name},age is ${this.age},voice is ${this.lang}`);
  }
  
}


const cow = new Cow("cow","2year","Mooo");
const parrot = new Parrot("Parrot","1year","chiiiiiiii chiiiiii")
const dog = new Dog("German","1 year","baoooo baoooo")

cow.introduce();
cow.voice();
parrot.introduce();
parrot.sound();
dog.introduce();
dog.sound();


