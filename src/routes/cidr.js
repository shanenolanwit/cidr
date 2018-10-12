const router = require('express').Router();

const cidrController = require('../controllers/cidrController');

router.get('/', cidrController.list);
router.post('/add', cidrController.save);
router.get('/update/:id', cidrController.edit);
router.post('/update/:id', cidrController.update);
router.get('/delete/:id', cidrController.delete);

module.exports = router;

