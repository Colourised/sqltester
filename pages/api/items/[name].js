const connection = require('../../../database');

export default async function getItemByName(req, res) {
    await connection.query(`SELECT * FROM stocklist WHERE name = '${req.query.name}'`, (err, result, fields) => {
        if (err) {
            console.error('Query failed', err.stack);
        }
        res.json(result);
    })
}