const expres = require('express');
const router = expres.Router();
const whatsAppController = require("../controllers/whatsappControllers");

router.get('/', whatsAppController.verifyToken);
router.post('/', whatsAppController.receivedMessage);

module.exports = router;
