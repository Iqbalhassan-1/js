// Fetch

// fetch api to Nodejs

// HMLHtppRequest => library FetchApi

// fetch =>when use fetch then one is going to onFullfilled[] or onRejection => and another is webBrowser /Node => network request resolve or reject => after that then they will go to global memory or declare varibale like response
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
