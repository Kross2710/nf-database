const connection = require("../config/database");
const { getAllAccounts, searchAcc, addAcc, getAccountById, updateAccById, deleteAccById } = require('../services/CRUD');

const getHomepage = (req, res) => {
    res.render('index.ejs')
};

const getAccount = async (req, res) => {
    let accounts = await getAllAccounts();

    res.render('account.ejs', { accounts: accounts })
};

const searchAccount = async (req, res) => {
    let keyword = req.query.client;

    let accounts = await searchAcc(keyword);

    if (!keyword) {
        accounts = await getAllAccounts();

        return res.render('account.ejs', { accounts: accounts })
    }

    res.render('account.ejs', { accounts: accounts })
};

const getAddAccount = (req, res) => {
    res.render('add.ejs')
};

const postAddAccount = async (req, res) => {
    let { client, account, password, profileNum, profilePass, buy, expire, note } = req.body

    await addAcc(client, account, password, profileNum, profilePass, buy, expire, note)

    console.log('Account added successfully!')

    res.redirect('/accounts')
}

const getEditAccount = async (req, res) => {
    let id = req.params.id;

    let account = await getAccountById(id)

    res.render('edit.ejs', { acc: account })
}

const postEditAccount = async (req, res) => {
    let { client, account, password, profileNum, profilePass, buy, expire, note, id } = req.body

    await updateAccById(id, client, account, password, profileNum, profilePass, buy, expire, note)

    res.redirect('/accounts')
}

const getDeleteAccount = async (req, res) => {
    let id = req.params.id

    await deleteAccById(id)

    res.redirect('/accounts')
}

module.exports = {
    getHomepage,
    getAccount,
    searchAccount, 
    getAddAccount,
    postAddAccount,
    getEditAccount,
    postEditAccount,
    getDeleteAccount
}