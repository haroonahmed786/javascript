class Animal{
	constructor(name,age,lang){
	this.name = name;
	this.age  = age;
	this.lang = lang;
}

introduce(){
	console.log(`Hi I am ${this.name},my age ${this.age},my lang ${this.lang}`);	
}
}
class Memal extends Animal{
	constructor(name,age,lang){
    	super(name,age,lang);
	}
	voice(){
	console.log(`name is ${this.name},age is ${this.age},voice is ${this.lang}`);
}
}

const memal = new Memal("Memal","2year","Mooo");

memal.introduce();
memal.voice();
