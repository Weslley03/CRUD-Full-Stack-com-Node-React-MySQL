import { db } from "../db.js"

export function getUsers(req, res){
    const queryCommand = 'SELECT * FROM crud001.users;'

    db.query(queryCommand, (err, data) => {
        if(err) return res.json(err);

        return res.status(200).json(data);
    })
}