// const makeServerRequest = new Promise ((resolve, reject) => {
// })

// Complete a Promise with resolve and reject
const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer represents a response from a server
  let responseFromServer;

  if (responseFromServer) {
    // Change this line
    resolve("We got the data");
  } else {
    // Change this line
    reject("Data not received");
  }
});

// Handle a Fulfilled Promise with then
// result is the argument passed in to the resolve method.
makeServerRequest.then((result) => {
  console.log(result);
});

// Handle a Rejected Promise with catch
// error is the argument passed in to the reject method.
makeServerRequest.catch((error) => {
  console.error(error);
});
