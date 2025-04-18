const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
/* 
  IMPORTANT:
    ***NEVER*** store credentials unencrypted like this.
    This is for demo purposes only in order to simulate a functioning API serverr.
*/
const users = {
  "jim@joesrobotshop.com": {
    firstName: "Jim",
    lastName: "Cooper",
    email: "jim@joesrobotshop.com",
    password: "very-secret",
  },
  "joe@joesrobotshop.com": {
    firstName: "Joe",
    lastName: "Eames",
    email: "joe@joesrobotshop.com",
    password: "super-secret",
  },
};
let cart = [];

// use this to add a 1 second delay to all requests
// app.use(function (req, res, next) {
//   setTimeout(next, 1000);
// });

app.get("/api/products", (req, res) => {
  let products = [{
    id: 1,
    description: "Red army favourite",
    name: "AK Arm",
    imageName: "arm-ak.png",
    category: "Arms",
    price: 10000,
    discount: 10
  },
  {
    id: 2,
    name: "Texas special",
    description: "Robot arm with a Chainsaw",
    imageName: "arm-chainsaw.png",
    category: "Arms",
    price: 8500,
    discount: 0
  },
  {
    id: 3,
    name: "Not from Musk",
    description: "Robot arm with a Flamethrower",
    imageName: "arm-flamethrower.png",
    category: "Arms",
    price: 9500,
    discount: 20
  },
  {
    id: 4,
    name: "Propeller arm large",
    description: "Robot arm with a Propeller",
    imageName: "arm-propeller.png",
    category: "Arms",
    price: 4000,
    discount: 0
  },
  {
    id: 5,
    name: "Picker grabber",
    description: "Robot arm with a Grabber",
    imageName: "arm-grabber.png",
    category: "Arms",
    price: 5000,
    discount: 30
  },
  {
    id: 6,
    name: "Crabby McClaws",
    description: "Robot arm with Dual Claws",
    imageName: "arm-dual-claw.png",
    category: "Arms",
    price: 7000,
    discount: 0
  },
  {
    id: 7,
    name: "Pocket rocket",
    description: "Robot base with a Rocket",
    imageName: "base-rocket.png",
    category: "Bases",
    price: 15000,
    discount: 40
  },
  {
    id: 8,
    name: "Unicyclops",
    description: "Robot base with Single Wheel",
    imageName: "base-single-wheel.png",
    category: "Bases",
    price: 6000,
    discount: 0
  },
  {
    id: 9,
    name: "Smeagol Eyes",
    description: "Robot head with Big Eyes",
    imageName: "head-big-eye.png",
    category: "Heads",
    price: 3000,
    discount: 50
  },
  {
    id: 10,
    name: "Friendly Head",
    description: "Friendly Bot Head",
    imageName: "head-friendly.png",
    category: "Heads",
    price: 2500,
    discount: 0
  },
  {
    id: 11,
    name: "Flexi Torso",
    description: "Robot torso with a Flexible Gauged design",
    imageName: "torso-flexible-gauged.png",
    category: "Torsos",
    price: 10000,
    discount: 35
  },
  {
    id: 12,
    name: "Kangaroo Mama",
    description: "Robot torso with a Pouch",
    imageName: "torso-pouch.png",
    category: "Torsos",
    price: 8500,
    discount: 0
  }];
  res.send(products);
});

app.post("/api/cart", (req, res) => {
  cart = req.body;
  setTimeout(() => res.status(201).send(), 20);
});

app.get("/api/cart", (req, res) => res.send(cart));

app.post("/api/register", (req, res) =>
  setTimeout(() => {
    const user = req.body;
    if (user.firstName && user.lastName && user.email && user.password) {
      users[user.email] = user;
      res.status(201).send({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
      });
    } else {
      res.status(500).send("Invalid user info");
    }
  }, 800)
);

/* IMPORTANT:
    The code below is for demo purposes only and does not represent good security
    practices. In a production application user credentials would be cryptographically 
    stored in a database server and the password should NEVER be stored as plain text. 
*/
app.post("/api/sign-in", (req, res) => {
  const user = users[req.body.email];
  if (user && user.password === req.body.password) {
    res.status(200).send({
      userId: user.userId,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
    });
  } else {
    res.status(401).send("Invalid user credentials.");
  }
});

app.listen(8081, () => console.log("API Server listening on port 8081!"));
