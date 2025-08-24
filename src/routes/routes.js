const expres = require('express');
const router = expres.Router();
const whatsAppController = require("../controllers/whatsAppController");

router.get('/', whatsAppController.verifyToken);
router.post('/', whatsAppController.receivedMessage);

module.exports = router;
