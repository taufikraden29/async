const token = ~~[Math.random() * 12345678];

const pictures = ["1.jpg", "2.jpg", "3.jpg"];

function login(username) {
  console.log("Processing.. memvalidasi data!");
  return new Promise((success, failed) => {
    setTimeout(() => {
      if (username != "raden_taufik") failed("sorry wrong data");
      success({ token });
    }, 200);
  });
}

function getUser(token) {
  console.log("Processing apikey now ....");
  return new Promise((success, failed) => {
    if (!token) failed("No token inputed");
    if (token)
      setTimeout(() => {
        success({
          apiKey: "sdaus67gaO",
        });
      }, 500);
  });
}

function getPictures(apiKey) {
  console.log("Processing Pictures now ....");
  if (apiKey)
    setTimeout(() => {
      return { pic: pictures };
    }, 1500);
}

const user = login("raden_taufik");
user
  .then(function (response) {
    const { token } = response;
    getUser(token)
      .then(function (response) {
        const { apiKey } = response;
        console.log(apiKey);
      })
      .catch((err) => console.log(err));
  })
  .catch((err) => console.log(err));

// login("raden_taufik", function (response) {
//   const { token } = response;
//   getUser(token, function (response) {
//     const { apiKey } = response;
//     getPictures(apiKey, function (response) {
//       const { pic } = response;
//       console.log(pic);
//     });
//   });
// });
// const { apiKey } = getUser(user.token);
// const getUserPictures = getPictures(apiKey);

// console.log(getUserPictures);
