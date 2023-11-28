// promise object

// create promise
const promiseOne = new Promise(function (resolve, reject) {
  // do an async task
  // DB call,cryptography,network call
  setTimeout(() => {
    console.log("Hello Promise is complete");
    // now call the resolve
    resolve();
  }, 1000);
});

// promise consume
promiseOne.then((res) => {
  console.log("promise consumed");
});

// new promises created 2nd method

new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Async task two");
    resolve();
  }, 1000);
}).then((res) => {
  console.log("Promises resolvedd");
});

// another promise create no3

const promiseThree = new Promise((resolve, reject) => {
  setTimeout(() => {
    //function ,array,or object
    resolve({ userName: "iqbal", emai: "iqbal123@gmail.com" });

    // pass data and get data into promise consumed
  }, 1000);
});
promiseThree.then((user) => {
  console.log(user);
});

// create promise no4

const promiseFour = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false; // let the promises is going to resolve
    // let error = true; // let the promises is going to reject
    if (!error) {
      resolve({ userName: "IqbalHassan", password: "12345678" });
    } else {
      reject("ERROR Something went Wrong");
    }
  }, 1000);
});
// working  but
// promiseFour
//   .then((user) => {
//     console.log(user);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// lets try to get username from promises chaining process
promiseFour
  .then((user) => {
    return user.userName; // get userName but still pending
  })
  .then((username) => {
    console.log(username); // get promises with userName
  })
  .catch((error) => {
    console.log(error); // here show the error into promises
  })
  .finally(() => console.log("The promises is either reject or resolved"));

//********************Promises five************ */

const promiseFive = new Promise((resolve, reject) => {
  setTimeout(() => {
    // let error = false; // let the promises is going to resolve
    let error = true; // let the promises is going to reject
    if (!error) {
      resolve({ userName: "kHAN ", password: "12345678" });
    } else {
      reject("kHAN Something went Wrong");
    }
  }, 1000);
});

// another method resolve promises
async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
consumePromiseFive();

// call api's

// async function getApis() {
//   try {
//     const response = await fetch("https://randomuser.me/api/");
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }
// getApis();
fetch("https://randomuser.me/api/")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
