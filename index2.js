const token = ~~[Math.random() * 12345678];

const pictures = ["1.jpg", "2.jpg", "3.jpg"];

function login(username, callback) {
  console.log("Processing.. memvalidasi data!");
  setTimeout(
    callback(
      {
        token,
        username,
      },
      200
    )
  );
}

function getUser(token, callback) {
  console.log("Processing apikey now ....");
  if (token)
    setTimeout(() =>
      callback({
        apiKey: "sdaus67gaO",
      })
    );
}

function getPictures(apiKey, callback) {
  console.log("Processing Pictures now ....");

  if (apiKey)
    setTimeout(() => {
      callback({ pic: pictures });
    }, 1500);
}

login("raden_taufik", function (response) {
  const { token } = response;
  getUser(token, function (response) {
    const { apiKey } = response;
    getPictures(apiKey, function (response) {
      const { pic } = response;
      console.log(pic);
    });
  });
});
// const { apiKey } = getUser(user.token);
// const getUserPictures = getPictures(apiKey);

// console.log(getUserPictures);
