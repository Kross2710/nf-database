const express = require('express');
const app = express();
const router = express.Router();

const { getHomepage, getAccount, searchAccount, getAddAccount, postAddAccount, getEditAccount, postEditAccount, getDeleteAccount } = require('../controllers/homeController');
router.get('/', getHomepage);

router.get('/accounts', getAccount);

router.get('/search', searchAccount);

router.get('/add', getAddAccount);

router.post('/add', postAddAccount);

router.get('/edit/:id', getEditAccount);

router.post('/edit', postEditAccount);

router.get('/delete/:id', getDeleteAccount);

module.exports = router; // export default