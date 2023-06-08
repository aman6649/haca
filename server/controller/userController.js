const hackofest = require("../model/userModel");

const register = async (req, res) => {
  const { name, phone, email, clg } = req.body;
  try {
    const team = new hackofest({
      email,
      name,
      phone,
      clg,

    });
    const newTeam = await team.save();
    if (newTeam)
      return res.status(200).json({ message: "Registered successfully !!!" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};

module.exports = register;
