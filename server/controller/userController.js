const tmt = require("../model/userModel");

const register = async (req, res) => {
  const { email } = req.body;
  const teamCount = await tmt.countDocuments({});
  const tNumber = "T" + Number(teamCount + 1);
  try {
    const team = new tmt({
      email,
      token: tNumber,
    });
    const newTeam = await team.save();
    if (newTeam) return res.status(200).json({ message: newTeam.token });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};

module.exports = register;
