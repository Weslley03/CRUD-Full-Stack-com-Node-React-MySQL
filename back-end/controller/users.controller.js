import { db } from "../db.js"

export function getUsers(req, res){
    const queryCommand = 'SELECT * FROM crud001.users;'

    db.query(queryCommand, (err, data) => {
        if(err) return res.json(err);

        return res.status(200).json(data);
    })
}

export function addUser(req, res){
    const queryCommand = 'INSERT INTO `crud001`.`users` (`nameUsers`, `emailUsers`, `fone`,  `date_nasc`) VALUES (?)';

    const values = [
        req.body.nameUsers,
        req.body.emailUsers,
        req.body.fone,
        req.body.data_nas
    ]

    db.query(queryCommand, [values], (err) => {
        if(err) return res.json(err)

        return res.status(200).json('usuário criado com sucesso')
    })
}

export function updateUser(req, res){
    const queryCommand = 'UPDATE `crud001`.`users` SET `nameUsers` = ?, `emailUsers` = ?, `fone` = ?, `data_nasc` = ? WHERE `id` = ?';

    const values = [
        req.body.nameUsers,
        req.body.emailUsers,
        req.body.fone,
        req.body.data_nas
    ]

    db.query(queryCommand, [...values, req.params.id], (err) => {
        if(err) return res.json(err)

        return res.status(200).json('usuário atualizado com sucesso')
    })
}

export function deleteUser(req, res){
    const queryCommand = 'DELETE FROM users WHERE `id` = ?';

    db.query(queryCommand, [req.params.id], (err) => {
        if(err) return res.json(err)

        return res.status(200).json('usuário deletado com sucesso')    
    })
}