const user ={
    userName:"iqbal",
    price:88,
    welcomeMessage:function(){
        console.log(`${this.userName} Welcome to Js the price is ${this.price}`)
    }
}
// this keyword refer to current context
user.welcomeMessage() // show me userName is iqbal but now when change the value of userName is Hassan then what can be show ?
user.userName="Hassan";
// now call the function inside object what can be show let's check the result 
user.welcomeMessage() // So now they show me userName is Hassan why ? bcz i changed the object of value when change the object value then change and inside the function i use the "This" keyword they refer to current context so that why they show me Hassan.