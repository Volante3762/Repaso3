const express = require('express')

const jsonController = require('../controllers/jsonController')

const router = express.Router()

const {validarFirebase} = require('../middlewares/validadorFirebase')


router.get('/',[validarFirebase], jsonController.getJson)

module.exports = router