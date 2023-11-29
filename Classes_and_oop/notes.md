# Javascript and classes

Does Javascript really has classes ?
// prototype-based language \*\*\*
Yes, JavaScript does have classes. The introduction of classes in JavaScript was formalized with the release of ECMAScript 2015 (also known as ES6). Prior to ES6, JavaScript used prototype-based inheritance, which is a different way of handling object-oriented programming.

With the introduction of classes in ES6, developers gained a more familiar syntax for defining classes and creating objects. Here's a basic example of a class in JavaScript

class Person {
constructor(name, age) {
this.name = name;
this.age = age;
}

sayHello() {
console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
}
}

// Creating an instance of the Person class
const person1 = new Person('John', 30);

// Calling the sayHello method
person1.sayHello();

// javascript => prototype-based language

## OOP => Pogramming paradigm => programming styling

## Object => collection of properties and methods => properties means=> var,constant => methods=> toLowerCase(),new Promise()

## why use OOP ?

avoid => speguity code

## parts of OOP

Object Literal
-Constructor function
-ProtoTypes
-Classes
-Instances (new,this)

## 4 pillars OOP

-Abstraction => abstraction hides unnecessary details
-Encapsulation => encapsulation wraps data and methods into a protective layer,
-Inhertance => inheritance promotes code reuse by allowing a class to inherit from another class
-Polymorphism => polymorphism allows objects to be treated as instances of their parent class, providing flexibility in method implementation
