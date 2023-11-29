// object literal

const student = {
  userName: "iqbal",
  email: "iq123@gmail.com",
  loginCount: 0,
  getUserDetail: function () {
    // console.log("User Details Function");
    // console.log(`User Details ${this.userName}`);
    console.log(this); // current context
  },
};
// console.log(user["userName"]);
// console.log(user.getUserDetail());

// console.log(this); // give object {}

// when hits into browser then show window

// constructor function
// give new instance
// 1 step new use => create empty instance or {}
// 2 step constructor function call => new
// 3 add into this
// const promise = new Promise();

function User(userName, loginCount, isLogginIn) {
  this.userName = userName;
  this.loginCount = loginCount;
  this.isLogginIn = isLogginIn;

  this.isGreeting = function (params) {
    console.log(`welcom ${this.userName}`);
  };
  return this;
}

// new instance use of new => constructor function
const userOne = new User("iqbal", 12, true);
const userTwo = new User("khan", 5, true);

console.log(userOne.constructor);
// console.log(userTwo);
