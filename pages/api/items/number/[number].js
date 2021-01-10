const connection = require('../../../../database');

//returns any stock with higher levels than number input
export default async function getItemsByQuantity(req, res) {
    await connection.query(`SELECT * FROM stocklist WHERE amount <= '${req.query.number}'`, (err, result, fields) => {
        if (err) {
            console.error('Query failed', err.stack);
        }
        res.json(result);
    })
}
