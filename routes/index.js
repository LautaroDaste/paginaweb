var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var eventosModel = require('../models/eventosModel');
var cloudinary = require('cloudinary').v2;

/* GET home page. */
router.get('/', async function (req, res, next) {

var eventos = await eventosModel.getEventos()

eventos = eventos.splice(0, 5);
eventos = eventos.map(evento => {
  if (evento.img_id) {
    const imagen = cloudinary.url(evento.img_id, {
      width: 460,
      crop: 'fill'
    });
    return {
      ...evento,
      imagen
    }
  } else {
    return {
      ...evento,
      imagen: ''
    }
  }
});

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
