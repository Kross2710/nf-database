const connection = require("../config/database");

const getAllAccounts = async () => {
    let [results, fields] = await connection.query('SELECT * FROM Netflix');
    return results;
}

const searchAcc = async (keyword) => {
    let [results, fields] = await connection.query('SELECT * FROM Netflix WHERE client LIKE ?', ['%' + keyword + '%']);
    return results;
}

const addAcc = async (client, account, password, profileNum, profilePass, buy, expire, note) => {
    let [results, fields] = await connection.query(
        'INSERT INTO Netflix (client, account, password, profileNum, profilePass, buy, expire, note) VALUES (?, ?, ?, ?, ?, ?, ?, ?)', [client, account, password, profileNum, profilePass, buy, expire, note]
    );
    return results;
}

const getAccountById = async (id) => {
    let [results, fields] = await connection.query('SELECT * FROM Netflix WHERE id = ?', [id]);
    return results[0];
}

const updateAccById = async (id, client, account, password, profileNum, profilePass, buy, expire, note) => {
    let [results, fields] = await connection.query(
        'UPDATE Netflix SET client = ?, account = ?, password = ?, profileNum = ?, profilePass = ?, buy = ?, expire = ?, note = ? WHERE id = ?', [client, account, password, profileNum, profilePass, buy, expire, note, id]
    );

    return results;
}

const deleteAccById = async (id) => {
    let [results, fields] = await connection.query('DELETE FROM Netflix WHERE id = ?', [id]);
    console.log('Account deleted successfully!');
    return results;
}

module.exports = {
    getAllAccounts,
    searchAcc,
    addAcc,
    getAccountById,
    updateAccById, 
    deleteAccById
}