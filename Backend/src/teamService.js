const pool = require("../db");

exports.getTeamDetails = async () => {
  return new Promise((resolve, reject) => {
    let query = `Select * from team_table`;
    pool.query(query, [], (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result.rows);
      }
    });
  });
};
