const User = require("../models/User");

/* Register */
const registerUser = async (req, res) => {
  try {

    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        message: "User already exists"
      });
    }

    const user = new User({
      name,
      email,
      password
    });

    await user.save();

    res.json({
      message: "User registered successfully",
      user
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      message: "Registration failed"
    });

  }
};


/* Login */
const loginUser = async (req, res) => {
  try {

    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({
        message: "No account found. Please register first."
      });
    }

    if (String(user.password) !== String(password)) {
      return res.status(401).json({
        message: "Incorrect password"
      });
    }

    res.json({
      message: "Login successful",
      user
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      message: "Login failed"
    });

  }
};

module.exports = {
  registerUser,
  loginUser
};