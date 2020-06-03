
Mінімальне значення масиву
class SmallestIntegerFinder {
  findSmallestInt(args) {
  return Math.min(...args);
    
  }
}

Довжина кола
function circleCircumference(circle) {
return circle.radius * 2 * Math.PI ;

}


Тварини

class Shark extends Animal {
  constructor(name, age,status) {
    super(name , age, 0 , "shark",status);
  }
}

class Cat extends Animal {
constructor(name,age,status){
 super(name , age ,4 ,"cat" , status)
}
introduce(){
return  `Hello, my name is ${this.name} and I am ${this.age} years old.  Meow meow!` 
}
}
class Dog extends Animal {
  constructor(name ,age ,status ,master){
  super(name,age,4,"dog",status , master)
  this.master = master;}
  intoroduce(){
  return `Hello, my name is ${this.name} and I am ${this.age} years old.`
  }
  greetMaster(){
  return `Hello ${this.master}`
  }
  
}



