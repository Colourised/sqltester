const connection = require("../../database");

export default async function getAllItems(req, res) {
  if (req.method === "POST") {
    console.log(req.body);
    var insertContent = `INSERT INTO stocklist (name, amount) VALUES ('${req.body.name}', ${req.body.amount})`;
    await connection.query(insertContent, (err, result) => {
      if (err) {
        console.error("POST FAILED", err.stack);
      }
      console.log("POST COMPLETE!");
    });
  }

  await connection.query("SELECT * FROM stocklist", (err, result) => {
    if (err) {
      console.error("Query failed", err.stack);
    }
    res.json(result);
  });
}
