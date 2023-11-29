function userName(user) {
  this.userName = user;
}
function createUser(Name, email, password) {
  userName.call(this, Name); // this context => window
  //
  this.email = email;
  this.password = password;
}
const user = new createUser("chai", "iqba123@gmail.com", "123456");
console.log(user);
