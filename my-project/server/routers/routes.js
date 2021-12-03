const router = require("express").Router();
const controller = require('../controllers/controller.js');

router.post('/ajouter', controller.handleAddFunction)
router.get('/liste/:type', controller.getlists)
router.put('/modifier/:type/:id', controller.updateList)
router.delete('/delete/:id/:type', controller.deleteItem)





module.exports = router;
