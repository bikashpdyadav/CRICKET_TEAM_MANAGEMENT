const service = require("./teamService");
exports.getTeamDetails = async (req, res) => {
  try {
    const teamDetails = await service.getTeamDetails();
    res.send({ code: 200, message: "success", teamDetails: teamDetails });
  } catch (error) {
    console.log(error);
    res.send({ code: 500, message: error });
  }
};
