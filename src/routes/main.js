const express = require('express');
const router = express.Router();
const controller = require('../controllers/indexController')
const adminMiddleware = require('../middlewares/userMiddleware')

router.get('/', controller.index);
router.get('/admin', adminMiddleware, controller.admin) /* middleware para que ingresen los administradores */
/* se va a verificar que el usuario sea un admin.. */
module.exports = router;