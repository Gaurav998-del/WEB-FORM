const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const UserModel = require("./models/Users");

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5000"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);
app.use(cookieParser());

mongoose.connect("mongodb://localhost:27017/employee");

const verifyUser = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.json("Token is missing");
  } else {
    jwt.verify(token, "jwt-secret-key", (err, decoded) => {
      if (err) {
        return res.json("Error with token");
      } else {
        if (decoded.role === "admin") {
          next();
        } else {
          return res.json("not admin");
        }
      }
    });
  }
};

app.get("/dashboard", verifyUser, (req, res) => {
  res.json("Success");
});

app.post("/signup", (req, res) => {
  const { name, password } = req.body;
  bcrypt
    .hash(password, 10)
    .then((hash) => {
      UserModel.create({ name, password: hash })
        .then((user) => res.json("Success"))
        .catch((err) => res.json(err));
    })
    .catch((err) => res.json(err));
});

app.post("/login", (req, res) => {
  const { name, password } = req.body;
  UserModel.findOne({ name: name }).then((user) => {
    if (user) {
      bcrypt.compare(password, user.password, (err, response) => {
        if (response) {
          const token = jwt.sign(
            { name: user.name, role: user.role },
            "jwt-secret-key",
            { expiresIn: "1d" }
          );
          res.cookie("token", token);
          return res.json({ Status: "Success", role: user.role });
        } else {
          return res.json("The password is incorrect");
        }
      });
    } else {
      return res.json("No record existed");
    }
  });
});

app.listen(7000, () => {
  console.log("Server is Running");
});
