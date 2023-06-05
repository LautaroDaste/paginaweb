var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var eventosModel = require('../models/eventosModel');

/* GET home page. */
router.get('/', async function (req, res, next) {

var eventos = await eventosModel.getEventos()

  res.render('index', {eventos});
});

router.post('/', async (req, res, next) => {

console.log(req.body)

  var email = req.body.email;
  var mensaje = req.body.mensaje;

  var obj = {
    to: 'Quintiyaku@gmail.com',
    subject: 'PAGINA WEB',
    html: email + " se contactó a través de la web y requiere una respuesta al mismo correo. <br> Su mensaje fue : " + mensaje + " "

  }

  var transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    }
  });

  var info = await transporter.sendMail(obj);

res.render('index', {
message: 'Mensaje enviado correctamente.'
});

});

module.exports = router;
