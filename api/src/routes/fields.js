const {Router} = require('express');
const { getFields } = require('../controllers/Owner/Field/getFields');
const { getSearchField } = require('../controllers/Owner/Field/getSearchFields');

const router = Router();

router.get('/:sport', getFields)
router.get('/getSearchField/:sport', getSearchField)


module.exports = router

